import type {LoaderFunctionArgs} from 'react-router'
import { products } from '../data/products'

export const productLoader = ({params}: LoaderFunctionArgs) => {
    const productId = Number(params.productId)
    const isValidProductId = Number.isInteger(productId) && productId > 0

    if(!isValidProductId) return null

    const product = products.find((product) => product.id === productId)
    return product ?? null
}