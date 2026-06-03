# OptFi Investment Program Content Plan

Status: draft
Last updated: 2026-06-03
Source plan: `../optfi/roadmaps/investment-strategy-and-defi-master-plan.md`

## Purpose

This file tracks the public-safe website content required by the OptFi investment strategy and DeFi master plan. It is intentionally separate from private runtime documentation. Public content must explain method, discipline, and proof gates without exposing private telemetry, credentials, strategy parameters, or unproven return claims.

## Current Delivery Status

- Content backlog exists for every phase in the investment master plan.
- First P0 local-first cost journal draft exists at `/journal/local-first-hosting`.
- First P0 proof-before-capital journal draft exists at `/journal/proof-before-capital`.
- Journal index exists at `/journal`.
- First P4 DeFi source-freshness journal draft exists at `/journal/defi-source-timestamp`.
- The latest website deliverable is the P1 stale-scorecard contract article; the next content need is the single-green-backtest caution article after the scorecard matrix refresh.

## Content Definition Of Done

- Article or page exists in the website repo.
- Copy has no performance guarantee and no personalized investment advice.
- Copy states whether the subject is research, shadow, manual micro-test, or live canary.
- Any numbers are either public-source examples or sanitized reviewed summaries.
- Website build passes with `npm run build`.
- Article is linked from the appropriate public surface when ready.

## Planned Articles

| Phase | Working title | Primary page type | Status |
| --- | --- | --- | --- |
| `P0` | Why OptFi Stays Local-First Until Proof Pays For Hosting | Journal | drafted at `/journal/local-first-hosting` |
| `P0` | What Counts As Proof Before A Crypto Strategy Gets Capital | Journal | drafted at `/journal/proof-before-capital` |
| `P1` | Fresh Evidence Beats Backtest Optimism | Journal | drafted |
| `P1` | Why A Single Green Backtest Is Not Permission To Trade | Journal | planned |
| `P2` | The Case For Low-Turnover Trend Following In Crypto | Journal | planned |
| `P2` | Shadow Trading Is Not Trading, And That Is The Point | Journal | planned |
| `P2` | Why The First Real Trade Should Be Boring And Tiny | Journal | planned |
| `P3` | Core Accumulation Is Not Tactical Alpha | Journal | planned |
| `P3` | Dip Buying As A Cash Deployment Policy, Not A Trading Hack | Journal | planned |
| `P4` | Why DeFi APY Needs A Source Timestamp | Journal | drafted at `/journal/defi-source-timestamp` |
| `P4` | Stablecoin Lending, Liquid Staking, And Fixed Yield: The Boring DeFi Shortlist | Journal | planned |
| `P4` | Why High LP APY Is Usually A Risk Signal | Journal | planned |
| `P5` | A DeFi Test Deposit Should Start As Accounting, Not Automation | Journal | planned |
| `P5` | The Hidden Work Behind One DeFi Yield Position | Journal | planned |
| `P5` | What A Tiny DeFi Test Position Taught Us | Journal | planned |
| `P6` | A DeFi Preflight Is A Risk Checklist In Code | Journal | planned |
| `P6` | Why Wallet Signing Policy Matters More Than Yield | Journal | planned |
| `P6` | Designing DeFi UI So Risk Cannot Hide Behind APY | Journal | planned |
| `P7` | What Had To Be True Before OptFi Automated One DeFi Transaction | Journal | planned |
| `P7` | The First DeFi Canary Review | Journal | planned |
| `P8` | How OptFi Decides Not To Scale | Journal | planned |
| `P8` | When Hosting A Trading System Is Worth Paying For | Journal | planned |

## Suggested Public Navigation

- Add a journal index once at least three articles are ready.
- Keep `/status` for current public state.
- Keep `/transparency` for sanitized method and review updates.
- Link technical deep-dives from docs pages only after public-safety review.

## Public-Safety Checklist

- [ ] No raw private telemetry.
- [ ] No exchange account details.
- [ ] No private strategy thresholds unless intentionally disclosed.
- [ ] No promise that the system makes money.
- [ ] No wording that implies investment advice.
- [ ] Clear distinction between research, shadow, manual test, canary, and scale.
- [ ] Sources linked for external claims.
