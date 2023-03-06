import styles from "../styles/Home.module.css"
import { useMoralisQuery, useMoralis } from "react-moralis"
import NFTBox from "../components/NFTBox"
import networkMapping from "../constants/networkMapping.json"
import GET_ACTIVE_ITEMS from "../constants/subgraphQueries"
import { useQuery } from "@apollo/client"

export default function Home() {
    const { chainId, isWeb3Enabled } = useMoralis()
    const chainString = chainId ? parseInt(chainId).toString() : null
    const marketplaceAddress = chainId ? networkMapping[chainString].NftMarketplace[0] : null

    const { loading, error, data: listedNfts } = useQuery(GET_ACTIVE_ITEMS)

    return (
        <div className="container mx-auto">
            <h1 className="py-4 px-4 font-bold text-2xl">Recently Listed</h1>
            <div className="flex flex-wrap">
                {isWeb3Enabled ? (
                    loading || !listedNfts ? (
                        <div>Loading...</div>
                    ) : (
                        listedNfts.activeItems.map((nft) => {
                            const { price, nftAddress, tokenId, seller } = nft
                            return marketplaceAddress ? (
                                <NFTBox
                                    price={price}
                                    nftAddress={nftAddress}
                                    tokenId={tokenId}
                                    marketplaceAddress={marketplaceAddress}
                                    seller={seller}
                                    key={`${nftAddress}${tokenId}`}
                                />
                            ) : (
                                <div>Network error, please switch to a supported network. </div>
                            )
                        })
                    )
                ) : (
                    <div>Web3 Currently Not Enabled</div>
                )}
            </div>
        </div>
    )
}

/**
 * 这段代码是一个 React 函数组件，它通过使用 React hooks（useMoralisQuery 和 useMoralis）
 * 和 Apollo 客户端的 useQuery hook 来查询并显示最近上架的 NFT。

该组件首先通过 useMoralis hook 获取当前网络的 ID（chainId）和是否已启用 Web3 状态
（isWeb3Enabled），然后通过 networkMapping JSON 对象获取 NFT Marketplace 的地址。

接着，它使用 useQuery hook 从 GraphQL 子图查询中获取最近上架的 NFT，这个查询定义在 
../constants/subgraphQueries.js 文件中。如果数据正在加载或者查询出现错误，它会显示“Loading…”
或者错误信息。如果查询成功，它会遍历并显示查询结果中的每个 NFT，将其作为 NFTBox 组件的 props 
进行渲染。

如果当前 Web3 未启用或网络不被支持，组件将显示“Web3 当前未启用”或“网络错误，请切换到支持的网络”
等提示信息。

最后，组件使用 Tailwind CSS 库提供的一些预定义样式来设置页面外观，其中 styles.Home.module.css 
包含了一些局部样式。
 */
