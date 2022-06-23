---
postName: Canister State：容器状态
---
## Canister State：容器状态
### 中文释义
**容器状态**指的是在某一个特定时间点一个[容器](canisters)里包含的所有状态。一个容器的状态分为用户状态和系统状态。用户状态是一个[WebAssembly](../W/webassembly)的模块副本。系统状态指的是[互联网计算机](../I/ic)代表容器维持的辅助状态，譬如这个容器的算力分配，[cycles](cycles)的余额，输入和输出的队列，以及其他的元数据。一个容器跟自己的系统状态的交互方式要么是隐含的，譬如消耗cycles的时候，要么是通过系统API来完成，譬如发送消息的时候。
### Wiki Definition
A **canister state** is the entire state of a [canister](canisters) at a given point in time. A canister’s state is divided into user state and system state. The user state is a [WebAssembly](../W/webassembly) module instance and the system state is the auxiliary state maintained by the [Internet Computer](../I/ic) on behalf of the canister, such as its compute allocation, balance of [cycles](cycles), input and output queues, and other metadata. A canister interacts with its own system state either implicitly, such as when consuming cycles, or through the System API, such as when sending messages. [English definition link](https://wiki.internetcomputer.org/wiki/Glossary#canister_state)

---
[返回词汇目录](../glossary)