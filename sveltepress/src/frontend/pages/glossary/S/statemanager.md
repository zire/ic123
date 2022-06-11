---
postName: State Manager：状态管理
---
## State Manager：状态管理

The **state manager** is responsible for

1 maintaining (multiple versions of) the replicated state the deterministic state machine implemented by [message routing](../M/messagerouting) and the [execution environment](../E/executionenvironment) operates on,<br>
2 converting back and forth between the replicated state and its canonical version (latter can be understood independent of the concrete implementation),<br>
3 obtaining certifications of parts of the canonical state, which allow other stakeholders such as other [subnets](../S/subnet) and/or users, to verify that some piece of state indeed originates from a valid subnetwork, and<br>
4 providing capabilities to sync the canonical state with other [replicas](../R/replica) in the same subnet so that replicas that have fallen behind can catch up.<br>

---
[返回词汇目录](../glossary)