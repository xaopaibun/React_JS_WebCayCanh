import Footer from "../FooterWeb.js/Footer";
import Menu from "../MenuWeb/Menu";
import DangKy_ from "./DangKy";

const DangKy = () =>{
    return(
        <div>
            <Menu />
            
            
            <div className='container'>
                <div className="alert alert-success text-center" role="alert">
                   Đăng Ký Tài Khoản
                </div>
            </div>
            <div style={{height: '280px'}} >
            <DangKy_ />
            </div>
            <Footer/>
        </div>
    );
}
export default DangKy;