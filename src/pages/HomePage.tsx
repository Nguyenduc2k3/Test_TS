//  import React, { useEffect, useState } from "react";
//  import { Link } from "react-router-dom";
//  import { Card, Col, Row } from "antd";
//  import { IProduct } from "../types/product";
//  import { getAllProduct } from "../api/product";

//  const { Meta } = Card;

//  const HomePage = () => {
//      const [products, setProducts] = useState<IProduct[]>([]);

//      useEffect(() => {
//          getAllProduct().then(({ data }) => setProducts(data));
//      }, []);

//      return (
//          <div style={{ padding: "20px" }}>
//             <h1>HomePage</h1>
//              <Row gutter={[16, 16]}>
//                  {products.map((product) => (
//                      <Col span={6} key={product.id}>
//                          <Link to={`/products/${product.id}`}>
//                                  <Meta title={product.name} description={`$${product.price}`} />
//                          </Link>
//                      </Col>
//                  ))}
//              </Row>
//          </div>
//      );
//  };

//  export default HomePage;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "antd";
import { IProduct } from "../types/product";
import { getAllProduct } from "../api/product";
import "./homepage.css"
import { Breadcrumb, Layout, Menu, theme } from "antd";

const { Meta } = Card;
const { Header, Content, Footer } = Layout;
const { Item } = Menu;
type Props = {};

const HomePage = (props: Props) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getAllProduct().then(({ data }) => setProducts(data));
  }, []);
  const {
    token: { colorBgContainer }
  } = theme.useToken();
  return (
    <div className="layoutClient__container">
      <Layout className="layout">
        <Header>
          <div className="LogoClient"></div>
          <Menu>
            <Item key={"home"}>
              <Link to={"/"}>Home</Link>
            </Item>
            <Item key={"products"}>
              <Link to={"/products"}>Products</Link>
            </Item>
            <Item key={"signin"}>
              <Link to={"/admin"}>Login</Link>
            </Item>
            <Item key={"signup"}>
              <Link to={"/admin/register"}>Signup</Link>
            </Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div
            className="site-layout-content"
            style={{ background: colorBgContainer }}
          >
            <Row gutter={[16, 16]}>
              {products.map((product) => (
                <Col span={6} key={product.id}>
                  <Link to={`/products/${product.id}`}>
                    <Meta
                      title={product.name}
                      description={`$${product.price}`}
                    />
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <div className="footer-layout">DucNT</div>
        </Footer>
      </Layout>
    </div>
  );
};

export default HomePage;
