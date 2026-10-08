# PRIVATE VAULT — implementation audit

Reviewed: 2026-10-08. This is an implementation checklist, not a security certification.

## Observed
- Next.js app uses Pages Router (`pages/private-vault.js`).
- Vault route renders a visual mockup and a button that only displays a warning. There is no passphrase input, encryption, account verification, database, or secrets store in this route.
- UI's `visibilitychange` handler dismisses only the warning, not an actual session (none exists).
- Homepage link is present in feature branch, but main app navigation has not been wired to the vault.
- Vercel preview uses deployment protection, but deployment access control is not equivalent to owner-only vault authorization.
- `package.json` currently declares Next/React only; no authentication or encryption implementation is configured by this feature.

## Release-blocking security gaps
1. Establish owner identity with authenticated sessions; deny access on server for every vault route and API operation. Public client routes and hiding navigation are not security.
2. Implement first-time vault setup using a long unique passphrase, client-side Argon2id KDF with reviewed parameters, random per-vault key and authenticated encryption (AES-GCM); no passphrase sent to server. Obtain security review before handling real secrets.
3. Define a recovery key and test loss/recovery scenarios. No administrator backdoor.
4. Use durable encrypted storage with owner-scoped access controls, key rotation plan and backups; protect metadata and attachments as well as record bodies.
5. Re-lock on navigation, page visibility loss and after 60 seconds idle. Clear plaintext and cryptographic keys from application state as far as browser permits; prevent accidental plaintext logging, caching, and analytics.
6. Add automated tests for unauthenticated requests, wrong owner, bypass via direct URL/API, reload, multiple tabs, back button, timeout, backgrounding and recovery.
7. Do not store case #001 or any other identifying personal data in the public GitHub repository, test fixtures, issue tracker or deployment logs.

## Next implementation milestone
Choose and configure secure owner authentication and encrypted storage (requires approved infrastructure/account access), then implement first-time passphrase enrollment and empty encrypted vault. Until all release gates pass, keep route locked and display 'Preview only'.
