import { Route, Routes } from 'react-router-dom'
import { Dashboard, Order } from '../pages'

const CustomRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Dashboard />}/>
    <Route path='/order' element={<Order />}/>
   </Routes>
  )
}

export default CustomRoutes