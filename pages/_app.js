import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"
import Header from "../components/Header"
import Head from "next/head"
import { NotificationProvider } from "web3uikit"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: process.env.NEXT_PUBLIC_SUBGRAPH_URL,
})

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>NFT Marketplace</title>
                <meta name="description" content="NFT Marketplace" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MoralisProvider initializeOnMount={false}>
                <ApolloProvider client={client}>
                    <NotificationProvider>
                        <Header />
                        <Component {...pageProps} />
                    </NotificationProvider>
                </ApolloProvider>
            </MoralisProvider>
        </div>
    )
}

export default MyApp

/**
 * 这段代码是一个 Next.js 应用程序的入口文件，它设置了一些应用程序的全局配置，包括：

引入全局的 CSS 样式文件；
引入 MoralisProvider 组件，该组件提供了与 Moralis 后端的连接，可以在应用程序中使用 
Moralis SDK 来管理用户、数据和文件等；
引入 ApolloProvider 组件，该组件提供了一个 Apollo 客户端，可以用于发起 GraphQL 查询和变更请求；
引入 NotificationProvider 组件，该组件提供了一种轻量级的通知系统，可以用于在应用程序中显示
各种类型的通知消息；
引入 Header 组件，该组件是应用程序的顶部导航栏；
使用 Next.js 的特殊语法，定义了一个名为 MyApp 的函数组件，并将其作为默认导出；
MyApp 组件接收两个 props，即 Component 和 pageProps，其中 Component 是当前页面的 React 
组件，pageProps 是 Next.js 传递给该组件的一些额外属性；
MyApp 组件使用了 React 的 JSX 语法，将 Head 组件作为应用程序的头部，设置了网页的标题、描述和图标；
MyApp 组件将所有子组件包裹在 MoralisProvider、ApolloProvider 和 NotificationProvider 中，
使得这些子组件都能够使用 Moralis SDK、Apollo 客户端和通知系统。
 */
