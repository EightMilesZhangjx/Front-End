import { gql } from "@apollo/client"

const GET_ACTIVE_ITEMS = gql`
    {
        activeItems(first: 5) {
            id
            buyer
            seller
            nftAddress
            tokenId
            price
        }
    }
`
export default GET_ACTIVE_ITEMS

/**
 * 这是一个使用@apollo/client库创建GraphQL查询的例子，它定义了一个名为GET_ACTIVE_ITEMS的查询模板。

查询模板使用GraphQL语法定义了一个名为activeItems的查询，该查询将返回前5个满足特定条件的活动项目
（active items），这些项目尚未被购买（buyer字段为“0x00000000”）。

该查询将返回项目的id、buyer、seller、nftAddress、tokenId和price字段。

查询模板可以在@apollo/client的useQuery钩子中使用，以从GraphQL API获取数据。
 */
