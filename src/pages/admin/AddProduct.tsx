import React from 'react';
import { useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button, Checkbox, Form, Input } from 'antd';

const AddProductPage = (props) => {
    const navigate = useNavigate();
    const onFinish = (values: any) => {
        props.onAdd(values);
        navigate('/admin/products')
        alert("Thêm thành công!!")
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 800, margin: '0 auto' }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Add New Product
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddProductPage