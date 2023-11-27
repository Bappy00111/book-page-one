import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'


function App() {


  return (
   <div className='max-w-[1240px] mx-auto'>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
   </div>
  )
}

export default App
