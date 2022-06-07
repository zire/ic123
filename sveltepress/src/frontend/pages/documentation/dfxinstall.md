---
postName: dfx安装
---

# IC开发环境搭建
要进行互联网计算机的开发，首先你需要下载Dfinity Canister smart contract SDK，这个SDK称之为 `dfx`
目前dfx支持linux或macOS 12.*极其之后的版本。

## Mac/Linux安装
通过终端输入如下命令，即可安装dfx，如果下载途中提示是否继续下载，请输入y即可。
```
    sh -ci "$(curl -fsSL https://smartcontracts.org/install.sh)"
```
## Windows安装使用
dfx原生并不支持Windows系统，不过你可以通过在Windows子系统安装linux（WSL）的方式，运行dfx

### 1. 安装WSL
要安装linux的WSL子系统，首先请确认正在使用的是windows10（2004或更高）或windows11系统。
现在，可以在管理员 PowerShell 或 Windows 命令提示符中输入此命令，然后重启计算机来安装运行适用于 Linux 的 Windows 子系统 (WSL) 所需的全部内容。
```
    wsl --install
```
此命令将启用所需的可选组件，下载最新的 Linux 内核，将 WSL 2 设置为默认值，并安装 Linux 发行版（默认安装 Ubuntu，请参阅下文更改此设置）。

首次启动新安装的 Linux 发行版时，将打开一个控制台窗口，要求你等待将文件解压缩并存储到计算机上。 未来的所有启动时间应不到一秒。

### 2. WSL版本支持
理论上来说，WSL 1 和 WSL 2 都支持运行dfx，不过我们更加推荐使用WSL 2 作为开发环境。你可以通过[比较WSL1和WSL2](https://docs.microsoft.com/zh-cn/windows/wsl/compare-versions)了解他们的区别

### 3. 安装linux子系统
下载最新包：
[适用于 x64 计算机的 WSL2 Linux 内核更新包](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)

运行上一步中下载的更新包。 （双击以运行 - 系统将提示你提供提升的权限，选择“是”以批准此安装。）

安装完成后，请继续执行下一步 - 在安装新的 Linux 分发时，将 WSL 2 设置为默认版本。 （如果希望将新的 Linux 安装设置为 WSL 1，请跳过此步骤。）

打开 PowerShell，然后在安装新的 Linux 发行版时运行以下命令，将 WSL 2 设置为默认版本：
```
    wsl --set-default-version 2
```
### 安装dfx
当你安装完成WSL子系统后，你可以通过powershell或者uBuntu.exe 打开子系统终端。之后通过如下命令安装dfx
```
    sh -ci "$(curl -fsSL https://smartcontracts.org/install.sh)"
```
## 升级到最新
如果再厨师安装后，有新版本SDK客供下载，您应该尽快安装更新的版本，以便获得最新的修复以及更多的功能。你可以使用`dfx upgrade`命令，将您昂钱的安装版本与最新版本进行比较。如果有更新版本的d`dfx`可用，该命令将会自动下载并安装最新版本。

## 卸载
安装 SDK 时，安装脚本会将所需的二进制文件放在本地目录中并创建缓存。您可以通过运行文件夹`uninstall`中的脚本从本地计算机中删除 SDK 二进制文件和缓存.cache
例如
```
    ~/.cache/dfinity/uninstall.sh
```