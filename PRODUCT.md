# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and hiring managers evaluating Renan for senior front-end roles. Secondary: prospective clients weighing a freelance or consulting engagement. Peers and other engineers are incidental readers.

## Product Purpose

Renan Garcia's personal website. It presents his work history, selected case files and contact path so a visitor can judge his delivery record quickly and get in touch. Success means a visitor understands what he has shipped and sends a message or follows him on X or GitHub.

## Positioning

A senior front-end engineer's own record of production launches, not a generic template: the Rock in Rio ticket purchase flow rebuilt for Ingresso.com, the observa2018 real-time PWA featured by the press, and a role as the company's front-end technical reference since 2020. Neighboring portfolios cannot truthfully claim these.

## Operating Context

Visitors arrive from a recommendation, a résumé link or a LinkedIn profile, skim on a phone or laptop, and decide whether to reach out. Reading is short-session and scan-first.

## Capabilities and Constraints

- Bilingual: English (`en`) and Brazilian Portuguese (`br`). All user-facing text, including metadata, lives in `dictionaries/en.json` and `dictionaries/br.json`.
- Routes: `/` (home with case files and skills band), `/work` (experience list), `/blog` (placeholder).
- Contact: a drawer with a zod-validated form that opens a mailto. Messages go to Renan's inbox.
- Keyboard shortcuts H, W and B navigate home, work and blog.
- Stack is already set: Next.js 16 (App Router, next-intl), React 19, Tailwind CSS 4, Radix UI primitives, vaul drawer, zod.

## Brand Commitments

- Name: Renan Garcia.
- Tone: first person, direct, technical, no hype. Copy sets the voice; keep claims to what the existing copy states.

## Evidence on Hand

- Work history and bullet points with named projects in `dictionaries/en.json` (`work.experiences`) and `dictionaries/br.json`.
- Case files on home: Rock in Rio purchase flow (Ingresso.com, 2022), observa2018 (FGV DAPP, 2018), product discovery (Ingresso.com).
- No testimonials, customer logos, metrics beyond the existing copy, or photography. Do not invent any.
- The blog has no posts yet. Do not design it as a content-driven listing.

## Product Principles

- Scannable proof beats decoration: a visitor should find the work and the contact path within one screen.
- Concrete over claimed: named launches and tools carry the argument, not adjectives.
- The contact path is always reachable; it is the site's primary action.
- Both languages are first-class; neither is a translation afterthought.
