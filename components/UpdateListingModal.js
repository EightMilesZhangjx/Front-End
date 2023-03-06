import { Modal, Input, useNotification } from "web3uikit"
import { useState } from "react"
import { useWeb3Contract } from "react-moralis"
import nftMarketplaceAbi from "../constants/NftMarketplace.json"
import { ethers } from "ethers"

export default function UpdateListingModal({
    nftAddress,
    tokenId,
    isVisible,
    marketplaceAddress,
    onClose,
}) {
    const dispatch = useNotification()

    const [priceToUpdateListingWith, setPriceToUpdateListingWith] = useState(0)

    const handleUpdateListingSuccess = () => {
        dispatch({
            type: "success",
            message: "listing updated",
            title: "Listing updated - please refresh (and move blocks)",
            position: "topR",
        })
        onClose && onClose()
        setPriceToUpdateListingWith("0")
    }

    const { runContractFunction: updateListing } = useWeb3Contract({
        abi: nftMarketplaceAbi,
        contractAddress: marketplaceAddress,
        functionName: "updateListing",
        params: {
            nftAddress: nftAddress,
            tokenId: tokenId,
            newPrice: ethers.utils.parseEther(priceToUpdateListingWith || "0"),
        },
    })

    return (
        <Modal
            isVisible={isVisible}
            onCancel={onClose}
            onCloseButtonPressed={onClose}
            onOk={() => {
                updateListing({
                    onError: (error) => {
                        console.log(error)
                    },
                    onSuccess: () => handleUpdateListingSuccess(),
                })
            }}
        >
            <Input
                label="Update listing price in L1 Currency (ETH)"
                name="New listing price"
                type="number"
                onChange={(event) => {
                    setPriceToUpdateListingWith(event.target.value)
                }}
            />
        </Modal>
    )
}

/**
 * 这段代码定义了一个名为 UpdateListingModal 的 React 组件，该组件用于显示更新市场交易所上
 * 某个非同质化代币（NFT）的价格。它引入了一些 web3 相关的 UI 库和工具，包括：

Modal：模态框组件，用于显示更新价格的输入框。
Input：表单输入组件，用于输入新的价格。
useNotification：自定义 hook，用于在页面上显示通知消息。
useState：React 自带的 hook，用于在组件中定义 state。
除此之外，该组件还引入了一些 web3 相关的库和工具，包括：

useWeb3Contract：自定义 hook，用于在 React 组件中管理智能合约实例。
ethers：一个 Ethereum 开发工具包，提供了一些有用的函数和类，可以方便地进行以太坊开发。
该组件的主要逻辑是，在用户输入新的价格后，调用市场交易所智能合约的 updateListing 函数，将更新后
的价格提交到区块链上。如果更新成功，将显示一条成功的通知消息，并关闭模态框。如果更新失败，将在
控制台中打印出错误信息。
 */
