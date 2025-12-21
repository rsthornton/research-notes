---
title: Interface
tags:
  - glossary
  - systems
---

# Interface

A connection point where a [[glossary/system|system]] meets its [[glossary/environment|environment]] or where [[glossary/component|components]] connect to each other. The locus of exchange and interaction.

## Formal Definitions

**Mobus & Kalton (2015)**:
> "The boundary B at level l is a tuple: B_{i,l} = ⟨P, I⟩ where P is the set of properties and I is the set of interfaces."

*(Principles of Systems Science, Section 4.3, Eq. 4.6)*

Interfaces mediate environment-system flows through bipartite graphs:
> "G is a bipartite flow graph where C' and C'' are subsets of components that receive inputs from source elements and send outputs to sink elements respectively."

*(Section 4.3, Eq. 4.5)*

**Bunge (1979)**:
Bunge captures interface implicitly through action relations between components and environment:
> "The A-environment of σ at time t is the set of all things... that act or are acted on by components of σ at t."

The symbol ⊳ denotes "acts upon" — interfaces are where these actions occur.

*(A World of Systems, Definition 1.2, Chapter 1)*

## Synthesis

Mobus explicitly defines interfaces as elements of the boundary that mediate [[glossary/flow|flows]] through source-sink connections. Bunge captures the concept through action relations (⊳) without naming it separately. Both agree that interfaces are where meaningful exchanges happen — not passive boundaries but active sites of interaction.

## Key Insight

Interfaces determine what can flow between system and environment. Well-designed interfaces enable necessary exchanges while maintaining system integrity. Poorly designed interfaces create bottlenecks or vulnerabilities.

## Related Concepts

- [[glossary/boundary|Boundary]] — contains the interfaces
- [[glossary/flow|Flow]] — what passes through interfaces
- [[glossary/environment|Environment]] — what's on the other side
