import Footer from "../FooterWeb.js/Footer";
import Menu from "../MenuWeb/Menu";
import Login_ from "./Login";

const Login = () =>{
    return(
        <div>
            <Menu />
           
            <div style={{height: 'auto'}} >
                <Login_ />
            </div>
            <Footer/>
        </div>
    );
}
export default Login;