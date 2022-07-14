---
postName: WebAssembly：WebAssembly
---
## WebAssembly：WebAssembly

**WebAssembly** （简称Wasm）是一种运行在现代网络浏览器中的新型代码。它设计的目的不是为了手写代码而是为诸如 C、C++和 Rust 等低级源语言提供一个高效的编译目标。对于网络平台而言，这具有巨大的意义 - 这为客户端 app 提供了一种在网络平台以接近本地速度的方式运行多种语言编写的代码的方式；在这之前，客户端 app 是不可能做到的。Wasm是由 Google、Microsoft、Mozilla、Apple 等几家大公司合作发起的一个关于面向 Web的通用二进制和文本格式的项目。WebAssembly于2019年12月5日得到W3C的推荐，与HTML，CSS 和 JavaScript 一起，成为Web的第四种语言。

Wasm是一个可移植、体积小、加载快并且兼容 Web 的全新格式。它 是一种新的字节码格式，旨在成为高级语言的编译目标，目前可以使用 C、C++、Rust、Go、Java、C#等编译器来创建 wasm 模块。该模块以二进制的格式发送到浏览器，并在专有虚拟机上执行，与 JavaScript 虚拟机共享内存和线程等资源。Wasm 模块总是与 JavaScript “胶水” 代码一起使用，在必要的时候可以执行一些有用的操作。Wasm 可以看做是对 JavaScript 的加强，弥补 JavaScript 在执行效率上的缺陷。WebAssembly 强制使用静态类型，在语法上完全脱离 JavaScript，同时具有沙盒化的执行环境，安全性更好。

---
[返回词汇目录](../glossary)