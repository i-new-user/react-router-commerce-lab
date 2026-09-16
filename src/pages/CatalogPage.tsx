import styled from "styled-components"
import { Link, useSearchParams } from "react-router"
import { products } from "../data/products"
import type { ProductCategory } from "../types/product"

type CategoryFilter = ProductCategory | 'all'

const categoryOptions: {
    value: CategoryFilter,
    label: string}[] = [

    { value: 'all', label: 'Все товары' },
    { value: 'electronics', label: 'Электроника' },
    { value: 'accessories', label: 'Аксессуары' },
    { value: 'home', label: 'Для дома' },
]

const isProductCategory = (value: string | null): value is ProductCategory => {
    return(
        value === 'electronics' || value === 'accessories' || value === 'home'
    )
}


const priceFormatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
})

export const CatalogPage = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const categoryParam = searchParams.get('category')

    const selectedCategory: CategoryFilter = isProductCategory(categoryParam) ? categoryParam : 'all'

    const filteredProducts = selectedCategory === 'all' ? products : products.filter( (product) => product.categoryId === selectedCategory)

    const handleCategoryChange = (category: CategoryFilter) => {
        if(category === 'all'){
            setSearchParams({})
            return
        }
        setSearchParams({category})
    }

  return (
    <Page>
        <Title>Каталог</Title>

        <FilterList aria-label="Фильтр по категории">
            {categoryOptions.map((option) => (
                <FilterButton
                    key={option.value}
                    type="button"
                    aria-pressed={selectedCategory === option.value}
                    onClick={() => handleCategoryChange(option.value)}
                    >
                    {option.label}
                </FilterButton>
            ))}
        </FilterList>

      <ProductGrid>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id}>
            <Category>{product.category}</Category>
            <ProductName>{product.name}</ProductName>
            <Description>{product.description}</Description>
            <Price>{priceFormatter.format(product.price)}</Price>
            <ProductLink to={String(product.id)}>Подробнее</ProductLink>
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

const FilterList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 32px;
`

const FilterButton = styled.button`
  padding: 10px 16px;

  color: #3730a3;
  font: inherit;
  font-weight: 700;

  background-color: #eef2ff;
  border: 1px solid #c7d2fe;
  border-radius: 999px;
  cursor: pointer;

  &:hover {
    background-color: #e0e7ff;
  }

  &[aria-pressed='true'] {
    color: #ffffff;
    background-color: #4f46e5;
    border-color: #4f46e5;
  }

  &:focus-visible {
    outline: 3px solid rgb(79 70 229 / 35%);
    outline-offset: 3px;
  }
`