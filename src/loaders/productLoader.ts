import {data} from 'react-router'
import type {LoaderFunctionArgs} from 'react-router'
import { products } from '../data/products'

export const productLoader = ({params}: LoaderFunctionArgs) => {
    const productId = Number(params.productId)
    const isValidProductId = Number.isInteger(productId) && productId > 0

    if(!isValidProductId){
        throw data('Некорректный идентификатор товара', { status: 404 })
    }

    const product = products.find((product) => product.id === productId)
    if(!product){
        throw data('Товар не найден', {status: 404})
    }
    return product 
}