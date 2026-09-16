import styled from "styled-components";
import { Link, useLocation, useNavigate, useParams } from "react-router";
import { products } from "../data/products";

import type { CartNavigationState } from "../types/navigation";

const Page = styled.main`
  width: min(100% - 32px, 960px);
  margin: 0 auto;
  padding: 48px 0;
`

const BackLink = styled(Link)`
  display: inline-flex;
  margin-bottom: 24px;

  color: #4338ca;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 3px solid rgb(79 70 229 / 35%);
    outline-offset: 4px;
    border-radius: 4px;
  }
`

const ProductCard = styled.article`
  padding: 32px;

  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  box-shadow: 0 12px 32px rgb(15 23 42 / 8%);
`

const Category = styled.p`
  margin: 0 0 8px;

  color: #6366f1;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
`

const Title = styled.h1`
  margin: 0 0 16px;

  color: #111827;
`

const Description = styled.p`
  margin: 0 0 24px;

  color: #4b5563;
  line-height: 1.7;
`

const Price = styled.p`
  margin: 0;

  color: #111827;
  font-size: 24px;
  font-weight: 800;
`
const BuyButton = styled.button`
  margin-top: 24px;
  padding: 12px 20px;

  color: #ffffff;
  font: inherit;
  font-weight: 700;

  background-color: #4f46e5;
  border: 0;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #4338ca;
  }

  &:focus-visible {
    outline: 3px solid rgb(79 70 229 / 35%);
    outline-offset: 3px;
  }
`




export const ProductPage = () => {

  const { productId } = useParams<{ productId: string }>()
  const location = useLocation()
  const navigate = useNavigate()

  const numericProductId = Number(productId)

  const isProductIdValid =
    productId !== undefined &&
    Number.isInteger(numericProductId) &&
    numericProductId > 0

  const product = isProductIdValid
    ? products.find((item) => item.id === numericProductId)
    : undefined

  if (!product) {
    return (
      <Page>
        <Title>Товар не найден</Title>

        <BackLink to='..'>
          Вернуться в каталог
        </BackLink>
      </Page>
    )
  }

  const handleBuyNow = () => {
    const state: CartNavigationState = {
      productId: product.id,
      from: `${location.pathname}${location.search}${location.hash}`
    }
    navigate('/cart', {state})
  }

  const formattedPrice = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  }).format(product.price)

  return (
    <Page>
      <BackLink to="..">
        ← Вернуться в каталог
      </BackLink>

      <ProductCard>
        <Category>{product.category}</Category>
        <Title>{product.name}</Title>
        <Description>{product.description}</Description>
        <Price>{formattedPrice}</Price>
        <BuyButton type="button" onClick={handleBuyNow}>
          Купить сейчас
        </BuyButton>
      </ProductCard>
    </Page>
  )
}