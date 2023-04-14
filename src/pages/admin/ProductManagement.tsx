import React from 'react';
import {Link} from 'react-router-dom'
import { Space, Table, Tag, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const ProductManagementPage = (props) => {
    /*
        {products:[{},{}]}
    */
    const data = props.products.map((product) => {
        return {
            key: product.id,
            name: product.name,
            price: product.price
        }
    })
    interface DataType {
        key: string;
        name: string;
        age: number;
        address: string;
        tags: string[];
    }
    
    const removeProduct = (id) => {
        const status = confirm("Bạn chắc chưa??");
        if(status) {
            props.onRemove(id)
            alert("Xoá thành công!!")
        }
    }
    const columns: ColumnsType<DataType> = [
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Product Price',
            dataIndex: 'price',
            key: 'price'
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                // console.log(record)

                < Space size="middle" >
                    <Button type="primary" onClick={() => removeProduct(record.key)}>Remove</Button>
                    <Button type="primary"><Link to={`/admin/products/${record.key}/update`}>Edit</Link>{" "}</Button>
                </Space >
            ),
        },
    ];
    return (
        <div>
            <h1>Quản lý sản phẩm</h1>
            <Space>
                <Button type="primary"><Link to="/admin/products/add">Add Product</Link></Button>
            </Space>
            <Table columns={columns} dataSource={data} />
        </div>
    );
}

export default ProductManagementPage