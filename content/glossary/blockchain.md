---
title: Blockchain
tags:
  - glossary
  - cryptoeconomics
---

# Blockchain

A distributed ledger where [[glossary/state|state]] is stored as a chain of cryptographically linked blocks — the foundational data structure of [[glossary/cryptoeconomics|cryptoeconomic]] systems.

Each block contains transactions (state transitions), a timestamp, and a [[glossary/hash|hash]] of the previous block. This chain structure makes history tamper-evident: altering any past block invalidates all subsequent hashes.

## Systems Connection

A blockchain is a [[glossary/system|system]] for maintaining shared [[glossary/state|state]] across distributed [[glossary/component|components]] ([[glossary/node|nodes]]). Its [[glossary/structure|structure]] — the append-only chain — enforces the [[glossary/boundary|boundary]] of valid history. No single component can unilaterally modify state; [[glossary/consensus-mechanism|consensus]] among components is required.

## Key Properties

- **Immutability** — past state cannot be changed without detection
- **Transparency** — all participants can verify state
- **[[glossary/decentralization|Decentralization]]** — no single point of control

## See Also

- [[glossary/cryptoeconomics|Cryptoeconomics]] — parent domain
- [[glossary/consensus-mechanism|Consensus Mechanism]] — how blocks are agreed upon
- [[glossary/node|Node]] — participants maintaining the chain
- [[glossary/hash|Hash]] — cryptographic links between blocks

