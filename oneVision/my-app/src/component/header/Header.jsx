import HeaderMobile from "./header-mobile/HeaderMobile"
import { useWindowSize } from "../../hooks/useWindowSize/useWindowSize"

const Header = () => {
  const size = useWindowSize() 
   
  return (
    <>
      {size ?  <div >Header</div> : <HeaderMobile />}
    </>
  )

}
export default Header ;