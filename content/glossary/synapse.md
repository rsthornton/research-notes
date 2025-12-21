---
title: Synapse
tags:
  - glossary
  - neuromorphics
---

# Synapse

The connection between [[glossary/neuron|neurons]] — where signals are transmitted and learning occurs through weight modification.

Synapses have weights that determine how strongly a presynaptic [[glossary/spike|spike]] influences the postsynaptic [[glossary/neuron|neuron]]. [[glossary/synaptic-plasticity|Plasticity]] rules modify these weights based on activity, implementing learning.

## Systems Connection

Synapses are the [[glossary/interface|interfaces]] between neural [[glossary/component|components]]. They mediate [[glossary/flow|flows]] (signals) and store [[glossary/state|state]] (weights). The pattern of synaptic connections defines network [[glossary/structure|structure]]; the weights encode learned information. In [[glossary/neuromorphic-hardware|neuromorphic hardware]], [[glossary/memristor|memristors]] implement synaptic function.

## Key Properties

- **Weight** — connection strength (excitatory or inhibitory)
- **Delay** — time for signal to traverse
- **Plasticity** — ability to change through learning

## See Also

- [[glossary/neuromorphics|Neuromorphics]] — parent domain
- [[glossary/neuron|Neuron]] — what synapses connect
- [[glossary/synaptic-plasticity|Synaptic Plasticity]] — how synapses learn
- [[glossary/memristor|Memristor]] — hardware synapse implementation

