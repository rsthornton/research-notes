---
title: Spike
tags:
  - glossary
  - neuromorphics
---

# Spike

A discrete event carrying information in [[glossary/spiking-neural-network|spiking neural networks]] — the fundamental unit of [[glossary/flow|flow]] in [[glossary/neuromorphics|neuromorphic]] systems.

Unlike continuous activations in conventional neural networks, spikes are binary events occurring at specific times. Information is encoded in spike timing, frequency, and patterns across populations of [[glossary/neuron|neurons]].

## Systems Connection

Spikes are the [[glossary/flow|flows]] in neural [[glossary/system|systems]]. They are discrete, asynchronous, and sparse — most neurons are silent most of the time. This sparsity enables [[glossary/event-driven-processing|event-driven processing]]: computation only happens when spikes arrive, dramatically reducing energy consumption compared to continuous processing.

## Encoding Schemes

- **Rate coding** — information in spike frequency
- **[[glossary/temporal-coding|Temporal coding]]** — information in precise spike timing
- **Population coding** — information in patterns across neurons

## See Also

- [[glossary/neuromorphics|Neuromorphics]] — parent domain
- [[glossary/neuron|Neuron]] — what generates spikes
- [[glossary/temporal-coding|Temporal Coding]] — exploiting spike timing
- [[glossary/event-driven-processing|Event-Driven Processing]] — paradigm spikes enable

