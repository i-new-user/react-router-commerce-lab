import styled from "styled-components";
import { Outlet } from "react-router";
import { Header } from "../components/Header";



export const ShopLayout = () => {
  return (
    <Layout>
      <Header/>

      <Content>
        <Outlet/>
      </Content>

    </Layout>
  )
}



const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  flex: 1;
`