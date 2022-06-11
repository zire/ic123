---
postName: Canister State：容器状态
---
## Canister State：容器状态

A **canister state** is the entire state of a [canister](canisters) at a given point in time. A canister’s state is divided into user state and system state. The user state is a [WebAssembly](../W/webassembly) module instance and the system state is the auxiliary state maintained by the [Internet Computer](../I/ic) on behalf of the canister, such as its compute allocation, balance of [cycles](cycles), input and output queues, and other metadata. A canister interacts with its own system state either implicitly, such as when consuming cycles, or through the System API, such as when sending messages.

---
[返回词汇目录](../glossary)