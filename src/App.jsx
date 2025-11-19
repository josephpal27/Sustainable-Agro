import { Outlet } from "react-router-dom"
import Header from "./components/header/Header"
import MyNavbar from "./components/navbar/Navbar"
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";

const App = () => {
  return (
    <>
      <Header/>
      <MyNavbar/>
      <Outlet />
      <ScrollToTop/>
    </>
  )
}

export default App
