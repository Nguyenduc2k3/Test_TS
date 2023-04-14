import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../api/product";
import { SmileOutlined } from '@ant-design/icons';
import { Card, Button, notification } from "antd";

const { Meta } = Card;

const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({id: 0, name: '', price: 0})

    useEffect(() => {
        getOneProduct(Number(id)).then(({ data }) => setProduct(data));
    }, [id]);

    const [api, contextHolder] = notification.useNotification();

    const openNotification = () => {
        api.open({
        message: 'Thông báo',
        description:
            'Bạn đã mua hàng thành công',
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
    };

    return (
        <div style={{ padding: "20px" }}>
            
                <Meta title={product.name}/>
                <p style={{ color:"red", fontSize: 18, fontWeight: "bold", marginTop: 16 }}>
                    {`Price: $${product.price}`}
                </p>
                {contextHolder}
                <Button type="primary" onClick={openNotification}>
                    Buy
                </Button>
           
        </div>
    );
};

export default ProductDetailPage;


