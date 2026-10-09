# LIFE PROJECT — Intelligence Center (planned module)

Status: product specification; not a deployed feature.

## Placement
Primary navigation: People & Relationships → Intelligence Center. Cross-links from Candidates, Partners, Team, Projects. All records share one entity ID to avoid duplicates.

## Workflows
1. Search by organization name, Czech IČO, professional name, or voluntarily supplied public professional URL.
2. Basic card: professional role, company, verified public records, source URLs, last-checked date, confidence and ambiguity warnings.
3. Business due diligence: official company registry, representative authority, sanctions and insolvency checks where permitted, documented business links, conflicts of interest.
4. Enhanced review: user-approved scope and documented lawful basis; consent where needed; human review before consequential decisions.
5. Relationship CRM: candidate → shortlisted → onboarding → active partner → archived, with project associations and audit history.
6. Optional scheduled refresh of relevant business records; report material changes without private-person surveillance.

## Data model
entities(id, type, display_name, country, status, created_at)
organizations(entity_id, registration_id, jurisdiction)
relationships(id, from_entity_id, to_entity_id, relation_type, evidence_id)
evidence(id, source_url, source_name, observed_at, claim, confidence, lawful_basis, expires_at)
reviews(id, entity_id, tier, purpose, reviewer, decision, reviewed_at)
project_links(entity_id, project_id, role)
audit_events(id, actor_id, action, entity_id, timestamp)

## Source adapters
Czech Ministry of Finance ARES REST API for organizations, respecting official rate limits and terms; other verified official registries by jurisdiction. No scraping behind authentication or bypassing restrictions.

## Privacy and security
GDPR purpose limitation, lawful basis, minimization, notice where applicable, retention policy, deletion/correction rights, encryption, owner-only default permissions, no access for collaborators without explicit grant, access logs. No covert collection of private family relationships, home addresses, private communications, device location, or leaked credentials. No automated adverse decisions solely from unverified matches.

## Implementation checklist
- [ ] Add navigation and routed pages
- [ ] Implement authentication and row-level permissions
- [ ] Create database and migrations
- [ ] Implement ARES adapter and evidence provenance
- [ ] Build candidate and company cards
- [ ] Add review workflow and monitoring
- [ ] Complete privacy/security review and deployment QA
