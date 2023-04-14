import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import { IProduct } from './types/product'
import { addProduct, deleteProduct, getAllProduct, updateProduct } from './api/product'
import ProductDetailPage from './pages/ProductDetail'
import ProductManagementPage from './pages/admin/ProductManagement'
import AddProductPage from './pages/admin/AddProduct'
import UpdateProductPage from './pages/admin/UpdateProduct'
import Login from './pages/admin/Signin'
import Register from './pages/admin/Signup'

function App() {
  const [products, setProducts] = useState<IProduct[]>([])
  useEffect(() => {
      getAllProduct().then(({data}) => setProducts(data))
  },[])
  const onHandleRemove = (id: number) => {
    deleteProduct(id).then(() => setProducts(products.filter((item: IProduct) => item.id !== id)))
  }
  const onHandleAdd = (product: IProduct) => {
    addProduct(product).then(() => getAllProduct().then(({data}) => setProducts(data)))
  }
  const onHandleUpdate = (product: IProduct) => {
    updateProduct(product).then(() => getAllProduct().then(({data}) => setProducts(data)))
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/'>
            <Route index element={<HomePage/>}/>
            <Route path='products' element={<ProductPage products={products}/>}/>
            <Route path='products/:id' element={<ProductDetailPage/>}/>
        </Route>
        <Route path='/admin'>
          <Route index element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='products'>
          <Route index element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
            <Route path=':id/update' element={<UpdateProductPage onUpdate={onHandleUpdate} products={products} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
