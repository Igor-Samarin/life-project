# FAMILY COMPANION — private family photo archive implementation plan

Status: approved concept; not yet deployed. No personal data, photographs, names, device IDs or credentials belong in this public repository.

## Experience
- Family section > Photo archive > "Review this week's photos".
- Each consenting family member connects their own device/account.
- Weekly or biweekly scan of **new** photos only, initially manual approval.
- Suggested queues: Family moments / Needs review / Skip. Skipped photos stay on source devices and are not uploaded to the shared archive.
- Album suggestions: family events, trips, school events, birthdays, each member's private album, and shared timeline.
- User reviews a batch and approves selected images with one action.
- Never delete originals; duplicate detection is non-destructive.
- Future opt-in: automatic album sorting and monthly galleries.

## Privacy and permissions
- No photo bytes, face embeddings, metadata or sensitive personal data in GitHub or public deployment assets.
- Private encrypted object storage; authenticated API; server-side per-album permissions; encrypted transport.
- Each device owner must opt in; parental oversight and age-appropriate consent for children.
- Do not scan private photo libraries without explicit permissions; no automatic sharing of children's private photos.
- Face recognition disabled by default and requires separate informed opt-in.
- Restrict EXIF/location metadata, especially for shared galleries.
- Retention, export, revocation, deletion and recovery flows must be designed before connecting devices.
- Backups with restoration testing and scoped credentials; audit access and uploads.

## Delivery phases
1. Design: photo archive screen, review queue, album list, timeline, permissions.
2. Backend: private object storage, account/device consent, metadata index, audit trail, backups.
3. Ingestion: phone photo-picker/manual batch upload first; scheduled sync only where platform permissions and an approved integration support it.
4. AI: on-device or privacy-conscious photo grouping, event clustering and duplicate suggestions; human approval.
5. Optional automation: weekly notifications, smart albums, monthly slideshow.

## Acceptance criteria
- A photo cannot enter a shared album without authorization.
- Unselected images remain on original devices.
- Review shows the source, date, destination album and permission status.
- A user can revoke device sync and album access.
- No real family data appears in source control, preview deployments, or logs.

## Outstanding decisions
- Private storage provider, device operating systems, consent/access model, backup location, preferred weekly schedule.
