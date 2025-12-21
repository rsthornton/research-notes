---
title: Hash
tags:
  - glossary
  - cryptoeconomics
---

# Hash

A cryptographic function that maps arbitrary data to a fixed-size fingerprint — the cryptographic primitive enabling [[glossary/blockchain|blockchain]] integrity.

Hash functions are deterministic (same input → same output), one-way (cannot reverse), and collision-resistant (hard to find two inputs with the same hash). Common algorithms include SHA-256 (Bitcoin) and Keccak-256 (Ethereum).

## Systems Connection

Hashes create the causal links in [[glossary/blockchain|blockchain]] [[glossary/structure|structure]]. Each block contains the hash of its predecessor, forming a chain. This creates a [[glossary/feedback-loop|feedback]] mechanism: any modification to a past block changes its hash, which invalidates all subsequent blocks. The [[glossary/boundary|boundary]] of valid history is enforced cryptographically.

## Uses in Cryptoeconomics

- **Block linking** — chains blocks together
- **Transaction IDs** — unique identifiers for transactions
- **Merkle trees** — efficient verification of data inclusion
- **Proof of work** — mining puzzles based on hash difficulty

## See Also

- [[glossary/cryptoeconomics|Cryptoeconomics]] — parent domain
- [[glossary/blockchain|Blockchain]] — structure built from hashes
- [[glossary/consensus-mechanism|Consensus Mechanism]] — uses hashes for validation

