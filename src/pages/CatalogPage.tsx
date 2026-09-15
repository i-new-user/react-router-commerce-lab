import styled from "styled-components"
import { Link } from "react-router"
import { products } from "../data/products"


const priceFormatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
})

export const CatalogPage = () => {
  return (
    <Page>
      <Title>Каталог</Title>

      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <Category>{product.category}</Category>
            <ProductName>{product.name}</ProductName>
            <Description>{product.description}</Description>
            <Price>{priceFormatter.format(product.price)}</Price>
            <ProductLink to={`/catalog/${product.id}`}>Подробнее</ProductLink>
          </ProductCard>
        ))}
      </ProductGrid>
    </Page>
  )
}

const Page = styled.main`
  width: min(100% - 32px, 1200px);
  margin: 0 auto;
  padding: 48px 0;
`

const Title = styled.h1`
  margin: 0 0 32px;
  color: #111827;
`

const ProductGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
`

const ProductCard = styled.article`
  display: flex;
  flex-direction: column;
  padding: 24px;

  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgb(15 23 42 / 6%);
`

const Category = styled.p`
  margin: 0 0 8px;

  color: #6366f1;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
`

const ProductName = styled.h2`
  margin: 0 0 12px;

  color: #111827;
  font-size: 21px;
`

const Description = styled.p`
  margin: 0 0 24px;

  color: #4b5563;
  line-height: 1.6;
`

const Price = styled.p`
  margin: auto 0 16px;

  color: #111827;
  font-size: 20px;
  font-weight: 800;
`

const ProductLink = styled(Link)`
  display: inline-flex;
  align-self: flex-start;
  padding: 10px 16px;

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