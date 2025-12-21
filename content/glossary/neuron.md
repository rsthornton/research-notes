---
title: Neuron
tags:
  - glossary
  - neuromorphics
---

# Neuron

The fundamental [[glossary/component|component]] of neural [[glossary/system|systems]] — a processing unit that integrates inputs and produces discrete output events ([[glossary/spike|spikes]]).

In biological neurons, dendrites receive signals, the soma integrates them, and the axon transmits spikes when a threshold is crossed. Artificial neurons in [[glossary/neuromorphics|neuromorphic]] systems model this integrate-and-fire behavior at varying levels of biological fidelity.

## Systems Connection

A neuron is a [[glossary/component|component]] whose [[glossary/state|state]] (membrane potential) evolves based on input [[glossary/flow|flows]] (synaptic currents). When state crosses a threshold, it produces output (a [[glossary/spike|spike]]) and resets. This threshold behavior creates nonlinear dynamics that enable [[glossary/emergence|emergent]] computation in neural [[glossary/structure|networks]].

## Neuron Models

- **Leaky Integrate-and-Fire (LIF)** — simple, computationally efficient
- **Izhikevich** — captures diverse spiking patterns
- **Hodgkin-Huxley** — biophysically detailed

## See Also

- [[glossary/neuromorphics|Neuromorphics]] — parent domain
- [[glossary/spike|Spike]] — neuron output
- [[glossary/synapse|Synapse]] — connections between neurons
- [[glossary/spiking-neural-network|Spiking Neural Network]] — networks of neurons

