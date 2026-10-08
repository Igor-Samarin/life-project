# Private Vault — implementation specification (no private data)

Status: security design only; NOT an operational vault.

## Threat model
An authenticated LIFE PROJECT session may be left open on a phone or desktop. A bystander with access to the unlocked device must not be able to open sensitive vault content merely by clicking a navigation item. Never assume that hiding a UI button is authorization.

## Requirements
- Separate vault unlock from application login, using a server-verified, fresh WebAuthn user-verification ceremony (platform biometric/PIN or dedicated security key), with fallback recovery designed separately.
- Require a fresh verification for every entry; expire the vault session after 60 seconds idle and immediately when tab/app becomes hidden or user exits the vault. Enforce expiry server-side, not only in browser code.
- Scope every vault operation to the authenticated owner on the server, with deny-by-default authorization and auditable access checks. Do not expose records through public endpoints, static files, build logs, analytics, or admin views.
- Encrypt records and attachments before storage, with key-management separated from the app database and protected by a separate vault unlock secret where appropriate. TLS in transit. Never store raw passwords, PINs, recovery codes, private keys, or unencrypted case records in GitHub or client bundles.
- A biometric UI prompt by itself does not establish exclusive access if multiple people have biometrics enrolled on the same device; offer an independent vault secret or dedicated hardware key for high assurance.
- Disable indexing, caching of decrypted data, screenshots/previews where platform permits; clear decrypted state and browser memory on lock as far as technically possible.
- Provide an empty vault shell with animated dark/gold safe door and an explicit locked/unavailable state until server authentication and encryption are implemented and tested.
- Store account credentials and recovery codes in a dedicated password manager, not general case notes.
- Verify owner-only access, forced expiry, back-button behavior, multiple tabs, direct URLs, API calls without unlock, stolen session cookie, device loss, and recovery before enabling the vault.

## Planned navigation
Personal profile > Private Vault > (locked gate) > Special Cases / Personal Documents / Secure References.

## Acceptance criteria
No real private content is entered or migrated until an independent security review and end-to-end tests pass. Public repository may contain generic implementation code and this specification only; never personal case details or secrets.
