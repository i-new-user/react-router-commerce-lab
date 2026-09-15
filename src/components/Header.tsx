import styled from 'styled-components'
import { Link, NavLink } from 'react-router'

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

  width: 100%;
  padding: 16px 32px;

  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgb(15 23 42 / 6%);

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 16px 20px;
  }
`

const BrandLink = styled(Link)`
  flex-shrink: 0;

  color: #111827;
  font-size: 20px;
  font-weight: 800;
  line-height: 1;
  text-decoration: none;

  transition: color 150ms ease;

  &:hover {
    color: #4f46e5;
  }

  &:focus-visible {
    outline: 3px solid rgb(79 70 229 / 35%);
    outline-offset: 5px;
    border-radius: 4px;
  }
`

const Navigation = styled.nav`
  @media (max-width: 760px) {
    width: 100%;
    overflow-x: auto;
  }
`

const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  gap: 6px;

  margin: 0;
  padding: 0;

  list-style: none;

  @media (max-width: 760px) {
    width: max-content;
    padding-bottom: 4px;
  }
`

const NavigationItem = styled.li`
  margin: 0;
`

const NavigationLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;

  min-height: 40px;
  padding: 8px 12px;

  color: #4b5563;
  font-size: 15px;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;

  border-radius: 8px;

  transition:
    color 150ms ease,
    background-color 150ms ease;

  &:hover {
    color: #111827;
    background-color: #f3f4f6;
  }

  &.active {
    color: #4338ca;
    font-weight: 700;
    background-color: #eef2ff;
  }

  &:focus-visible {
    outline: 3px solid rgb(79 70 229 / 35%);
    outline-offset: 2px;
  }
`

export const Header = () => {
  return (
    <HeaderContainer>
      <BrandLink to="/">React Router Commerce</BrandLink>

      <Navigation aria-label="Основная навигация">
        <NavigationList>
          <NavigationItem>
            <NavigationLink to="/" end>
              Главная
            </NavigationLink>
          </NavigationItem>

          <NavigationItem>
            <NavigationLink to="/catalog">
              Каталог
            </NavigationLink>
          </NavigationItem>

          <NavigationItem>
            <NavigationLink to="/delivery">
              Доставка
            </NavigationLink>
          </NavigationItem>

          <NavigationItem>
            <NavigationLink to="/about">
              О магазине
            </NavigationLink>
          </NavigationItem>

          <NavigationItem>
            <NavigationLink to="/contacts">
              Контакты
            </NavigationLink>
          </NavigationItem>

          <NavigationItem>
            <NavigationLink to="/cart">
              Корзина
            </NavigationLink>
          </NavigationItem>
        </NavigationList>
      </Navigation>
    </HeaderContainer>
  )
}