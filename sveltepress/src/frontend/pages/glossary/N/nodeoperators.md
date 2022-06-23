---
postName: Node Operators：节点操作者
---
## Node Operators：节点操作者

A **node operator** (NO) is a non-canister [principal](../P/principal) who has the authority to add/remove [nodes](node) to/from the [IC](../I/ic).<br>

[node providers](../N/nodeprovider) come in possession of Hardware Security Modules (HSM), and register the HSMs with the [NNS](nns). (The HSM registration process consists essentially in deriving an IC principal ID from the key stored on the HSM, and persisting that ID with the NNS.) NPs hand registered HSMs over to legal persons, who now gain the authority to physically “operate nodes” (aka install [replicas](../R/replica)). The caveat is that, as opposed to "regular" principals, where a great deal of care goes into making sure that one principal ID corresponds to only one person, HSMs can routinely exchange hands, hence many persons can act as the same NO principal at different times.

[英文原版链接](https://wiki.internetcomputer.org/wiki/Glossary)

---
[返回词汇目录](../glossary)