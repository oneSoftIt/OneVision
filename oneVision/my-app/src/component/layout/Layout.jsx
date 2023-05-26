import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from "./Layout.module.scss"

const Layout = ({ children })=> {

  return (
    <div>
        <Header />
          {children}
        <Footer />
    </div>
  )
}

export default Layout;