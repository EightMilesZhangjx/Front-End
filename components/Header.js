/**
 * 这行代码使用了 ES6 的解构语法，从 web3uikit 库中导入 ConnectButton 组件。这个组件可以在你的
 *  React 应用中用于连接到以太坊区块链的钱包。ConnectButton 组件的使用方法类似于普通的 HTML 
 * 按钮.当用户单击 ConnectButton 时，它会打开一个钱包应用程序（例如 MetaMask 或 WalletConnect），
 * 并提示用户确认连接。一旦用户确认了连接，ConnectButton 组件将会显示用户的钱包地址，并提供一个菜单，
 * 用于执行其他与钱包相关的操作。注意，使用 ConnectButton 组件需要一个 web3 钱包库（例如 web3.js 
 * 或 ethers.js）来与以太坊交互，否则无法连接到以太坊网络。
 */
import { ConnectButton } from "web3uikit"
/**
 * 这行代码导入了 Next.js 库中的 Link 组件，用于在 Next.js 应用程序中实现客户端路由。使用 Link 组件，
 * 你可以在应用程序中创建一个链接，当用户单击链接时，应用程序将在客户端（浏览器）中加载新页面，
 * 而无需重新加载整个应用程序。这样可以显著提高应用程序的性能和响应速度。
 */
import Link from "next/link"

/**
 * 
 * 这行代码定义了一个名为 Header 的默认函数组件，它将在应用程序中作为默认导出使用。
 * 在 JavaScript 中，可以使用 export default 关键字来导出一个函数、对象、数组或变量，该导出项
 * 是模块的默认导出，如果一个模块中只有一个默认导出，那么可以使用 import 语句进行导入，而不需要
 * 使用花括号（{}）。

   在这个例子中，Header 组件是一个函数组件，它渲染了一个包含网站名称和导航链接的导航栏。由于该组件
   是模块的默认导出，因此可以在其他模块中使用 import Header from "./Header" 来导入该组件。注意，
   文件名字母的大小写要和导入路径匹配。
 */
export default function Header() {
    return (
        <nav className="p-5 border-b-2 flex flex-row justify-between items-center">
            <h1 className="py-4 px-4 font-bold text-3xl">NFT Marketplace</h1>
            <div className="flex flex-row items-center">
                <Link href="/">
                    <a className="mr-4 p-6">Home</a>
                </Link>
                <Link href="/sell-nft">
                    <a className="mr-4 p-6">Sell NFT</a>
                </Link>
                <ConnectButton moralisAuth={false} />
            </div>
        </nav>
    )
}
/**
 * 这段代码是一个React组件，用于渲染一个网站的导航栏。它包含一个标题（"NFT Marketplace"），以及
 * 三个链接：Home、Sell NFT和ConnectButton。在点击ConnectButton时，它会连接到一个web3钱包，
 * 以便用户可以交互与以太坊区块链的智能合约。

这个组件依赖于两个外部库：web3uikit和next/link。web3uikit是一个用于构建基于web3的用户界面的
React组件库，而next/link是Next.js框架中用于链接内部页面的组件。此外，该组件还包含一些样式类，
这些样式类是用于设计和布局导航栏的。
 */
