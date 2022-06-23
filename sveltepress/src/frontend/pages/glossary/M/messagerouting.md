---
postName: Message Routing：消息路由
---
## Message Routing：消息路由

The **message routing** layer receives [batches](../B/batch) from the [consensus](../C/consensus) layer and inducts them into the [induction pool](../I/inductionpool). Message routing then schedules a set of [canisters](../C/canisters) to execute messages from their [input queues](../I/inputqueue).<br>

After [messages](messages) have been executed, the message routing layer takes any messages produced in the execution round from the output queues and puts those messages into the outgoing streams to be consumed by canisters on other [subnets](../S/subnet).

[英文原版链接](https://wiki.internetcomputer.org/wiki/Glossary)

---
[返回词汇目录](../glossary)