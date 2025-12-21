---
title: Subsystem
tags:
  - glossary
  - systems
---

# Subsystem

A [[glossary/component|component]] inside a [[glossary/system|system]] that is itself a system — with its own [[glossary/boundary|boundaries]], components, and behaviors. Systems nest within systems.

## Formal Definitions

**Mobus & Kalton (2015)**:
> "Components of a system that are not multisets or atomic components... may themselves be subsystems, that is, having sufficient complexity to warrant further deconstruction."

*(Principles of Systems Science, Section 4.3, Eq. 4.3)*

The recursive definition:
> "c_{i,j,l} = {S_{i,j,l+1} if component is complex; a if component is atomic}"

This establishes a tree structure where each level of organization contains either decomposable subsystems or atomic primitives.

**Bunge (1979)**:
Bunge defines subsystems relationally through the ancestry relation, which forms a strict partial order. Every system of interest (SOI) is embedded in a larger supra-system, and this relationship inverts to define subsystems.

*(A World of Systems, Chapter 1)*

## Synthesis

Mobus treats subsystems as complex components requiring further decomposition, establishing a recursive hierarchy with indexed levels. Bunge emphasizes the mathematical ordering of subsystem-system relationships through strict partial order, ensuring well-defined hierarchies without circular dependencies.

## Key Insight

Subsystem decomposition is analytical, not ontological. The "right" level of decomposition depends on the question being asked. A cell is a subsystem of an organ, which is a subsystem of an organism — but each can be studied as a system in its own right.

## Explore Further

- [[reflections/the universe is the supersystem of all other systems, and a system composed of subsystems|Universe as supersystem]] — Hierarchical nesting at cosmic scale
- [[reflections/dynamical models involve change mechanisms - subsystems or processes whose properties, when changed, effect changes in other properties of the same system|Subsystems as change mechanisms]] — How subsystems drive system dynamics

## Related Concepts

- [[glossary/system|System]] — the level above
- [[glossary/component|Component]] — the general category (subsystems are complex components)
- [[glossary/boundary|Boundary]] — each subsystem has its own
