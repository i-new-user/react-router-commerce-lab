import styled from 'styled-components'
import {
  Link,
  useLocation,
  useNavigate,
} from 'react-router'
import { products } from '../data/products'
import type { CartNavigationState } from '../types/navigation'

const priceFormatter = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  maximumFractionDigits: 0,
})

const isCartNavigationState = (
  value: unknown
): value is CartNavigationState => {
  return (
    typeof value === 'object' &&
    value !== null &&
    'productId' in value &&
    typeof value.productId === 'number' &&
    'from' in value &&
    typeof value.from === 'string'
  )
}

export const CartPage = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const navigationState = isCartNavigationState(location.state)
    ? location.state
    : null

  const selectedProduct = navigationState
    ? products.find(
        (product) =>
          product.id === navigationState.productId,
      )
    : undefined

  if (!navigationState || !selectedProduct) {
    return (
      <Page>
        <Title>Корзина</Title>

        <EmptyPanel>
          <Text>Корзина пока пуста.</Text>

          <CatalogLink to="/catalog">
            Перейти в каталог
          </CatalogLink>
        </EmptyPanel>
      </Page>
    )
  }

  const handleBack = () => {
    navigate(-1)
  }

  const formattedPrice = priceFormatter.format(
    selectedProduct.price,
  )

  return (
    <Page>
      <Title>Корзина</Title>

      <CartPanel>
        <ProductName>{selectedProduct.name}</ProductName>
        <Text>{selectedProduct.description}</Text>
        <Price>{formattedPrice}</Price>

        <Source>
          Источник перехода: {navigationState.from}
        </Source>

        <BackButton
          type="button"
          onClick={handleBack}
        >
          ← Вернуться назад
        </BackButton>
      </CartPanel>
    </Page>
  )
}

const Page = styled.main`
  width: min(100% - 32px, 960px);
  margin: 0 auto;
  padding: 48px 0;
`

const Title = styled.h1`
  margin: 0 0 32px;
  color: #111827;
`

const CartPanel = styled.section`
  padding: 32px;

  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  box-shadow: 0 12px 32px rgb(15 23 42 / 8%);
`

const EmptyPanel = styled(CartPanel)``

const ProductName = styled.h2`
  margin: 0 0 12px;
  color: #111827;
`

const Text = styled.p`
  margin: 0 0 20px;
  color: #4b5563;
  line-height: 1.6;
`

const Price = styled.p`
  margin: 0 0 16px;

  color: #111827;
  font-size: 24px;
  font-weight: 800;
`

const Source = styled.p`
  margin: 0 0 24px;
  color: #6b7280;
  font-size: 14px;
`

const BackButton = styled.button`
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

const CatalogLink = styled(Link)`
  display: inline-flex;
  padding: 12px 20px;

  color: #ffffff;
  font-weight: 700;
  text-decoration: none;

  background-color: #4f46e5;
  border-radius: 8px;

  &:hover {
    background-color: #4338ca;
  }

  &:focus-visible {
    outline: 3px solid rgb(79 70 229 / 35%);
    outline-offset: 3px;
  }
`