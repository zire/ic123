---
postName: Canister Signature：容器签名
---
## Canister Signature：容器签名
### 中文释义
**容器签名**使用一种基于[**认证的变量**](certifiedvariables)的签名方案。它的公钥包括一个[容器ID](canisteridentifier)加上一段助记词（每个[容器](canisters)可以拥有多个公钥）。签名是一种证书，证明容器有把签署过的消息放在自己状态树里的某一个具体的位置。细节请见互联网计算机界面标准。
### Wiki Definition
A **canister signature** uses a signature scheme based on [certified variables](certifiedvariables). Public “keys” include a [canister id](canisteridentifier) plus a seed (so that every [canister](canisters) has many public keys); signatures are certificates that prove that the canister has put the signed message at a specific place in its state tree. Details in the The Internet Computer Interface Specification.[英文原版链接](https://wiki.internetcomputer.org/wiki/Glossary#canister_signature)

---
[返回词汇目录](../glossary)