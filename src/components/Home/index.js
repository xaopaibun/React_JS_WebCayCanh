import Footer from "../FooterWeb.js/Footer";
import Menu from "../MenuWeb/Menu";
import Them from "./Backend/Them";
import Sua from "./Backend/Sua";
import Box from "./Box";
import { useSelector } from "react-redux";
import Pagination from "./PhanTrang";


const Home = () =>{
    const active = useSelector(state => state.active);
    return(
        <div>
            <Menu/>
            <Them/>
            {
                active === true ?  <Sua/> : <div />
            }
            <div className="container">
                <Box />
                <Pagination />
            </div>
            
            <Footer/>
        </div>
    );
}
export default Home;