---
title: Component
tags:
  - glossary
  - systems
---

# Component

A distinct part within a [[glossary/system|system]] that performs specific functions and interacts with other components. Components may themselves be systems (subsystems) or atomic (irreducible).

## Formal Definitions

**Mobus & Kalton (2015)**:
> "All systems contain components that internally operate (behave) to produce the process that the system entails. Components may themselves be systems, or atomic, i.e., irreducible."

*(Principles of Systems Science, Section 3.4.2.1.2.6)*

The formal definition uses set notation with fuzzy membership:
> "C is a set of components and their 'type' along with membership functions in the event the set is fuzzy, that is, the components may have partial inclusion."

*(Section 4.3, Eq. 4.2)*

**Bunge (1979)**:
> "The A-composition of σ at a given time t is the set of its A-parts at t: C_A(σ, t) = {x ∈ A | x ⊂ σ}"

*(A World of Systems, Definition 1.2, Chapter 1)*

## Synthesis

Mobus emphasizes recursive decomposition — components can be further decomposed into subsystems or identified as atomic primitives. Bunge provides a time-parameterized set-theoretic definition, acknowledging that composition can change. Both treat components as the building blocks of system structure, but Mobus explicitly allows hierarchical nesting.

## Key Insight

The choice of what counts as a component depends on the level of analysis. The same entity might be a component at one level and a system at another.

## Explore Further

- [[reflections/a system's components must be listed before inquiring about its environment and structure|Components must be listed first]] — Bunge's methodological order
- [[reflections/analytical kinematics looks at links among components of a system|Analytical kinematics]] — Component linkage analysis
- [[reflections/black boxes are suitable models of system components, not systems|Black boxes model components]] — Component vs system modeling
- [[reflections/a system's degree of integration depends on connections or links among a systems components relative to disintegrating actions of the environment|Integration through connectivity]] — How components bind systems together

## Related Concepts

- [[glossary/system|System]] — the whole that components compose
- [[glossary/subsystem|Subsystem]] — a component that is itself a system
- [[glossary/structure|Structure]] — how components are organized
