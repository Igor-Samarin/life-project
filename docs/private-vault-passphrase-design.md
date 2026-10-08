# PRIVATE VAULT: passphrase unlock design (no secrets)

Status: architecture specification; NOT deployed or security audited.

## Chosen owner experience
- User clicks the animated black-and-gold safe door within LIFE PROJECT.
- Always require the owner's separate vault passphrase before revealing records, even if the main app session is active.
- No passphrase should be entered in chat, GitHub issues, telemetry, or app logs.
- Close and lock immediately on leaving the vault or when app/tab is hidden; idle timeout 60 seconds. Enforce on server and client.
- After successful unlock show Special Cases, Documents and Secure References. Never render case names or previews while locked.

## Cryptographic design decision
A plain password check alone does not protect the database from its administrators. For actual sensitive records use authenticated client-side encryption with a random per-vault data encryption key (DEK). Wrap DEK with a key derived from a strong owner passphrase via a memory-hard password KDF (Argon2id, with reviewed parameters and unique salt). Use an authenticated cipher (e.g. AES-256-GCM) and fresh nonces. Never transmit the raw passphrase or plaintext records to the application server; separate owner authentication and rate-limited unlock controls are still required. Cryptographic design must be reviewed before production; password strength and device compromise remain important risks.

## Recovery
Document tradeoff: with true client-side encryption, losing both passphrase and recovery key permanently loses data. Generate a one-time recovery key for offline storage. Never add a backdoor or an administrator reset that decrypts user content.

## Acceptance tests
- Clicking vault while signed in does not reveal records.
- Reload, direct URL, multiple tabs, browser back, timeout, or backgrounding never bypass unlock.
- Server endpoints deny access to users without owner authorization; ciphertext remains unreadable without client key.
- Passphrase never appears in source, network requests, browser persistence, analytics or logs.
- Incorrect passphrase and brute-force controls behave safely.
- Decrypted state and keys are cleared on lock as far as browser platform permits.
- Accessibility: reduced motion support, keyboard focus, screen reader labels.
- No real case data, credentials or secrets are committed to the public repository.

## Delivery sequence
1. Inspect existing app framework and auth.
2. Implement isolated visual shell and locked state.
3. Implement owner authorization, encrypted record storage and passphrase setup/recovery.
4. Security test and review before any real private data is migrated.
