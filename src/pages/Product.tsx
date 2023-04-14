import React, { useState, useEffect } from 'react'
import { Row, Col, Card } from 'antd'
import {Link} from 'react-router-dom'
import { IProduct } from '../types/product'

interface IProps {
    products: IProduct[]
}

const ProductPage = (props: IProps) => {

    const [data, setData] = useState<IProduct[]>([])
    
    useEffect(() => {
        setData(props.products)
    }, [props])
    

    return (
        <div>
            <h1>ProductPage</h1>
            <Row gutter={[16, 16]}>
                {data.map((item) => (
                    <Col key={item.id} span={6}>
                        <Link to={`/products/${item.id}`}>
                        <Card.Meta title={item.name} description={item.price} />
                        </Link>
                    </Col>
                ))}
                </Row>


        </div>
    )
}

export default ProductPage
