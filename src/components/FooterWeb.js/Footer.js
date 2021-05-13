const Footer = () =>{
    return(
        <div>
                <div className="BackToTop">
                    <i className="fa fa-angle-double-up" />
                </div>
                <div className="Footer">
                    <div className="Container">
                    <div className="_Cot">
                        <h2 className="Content-Tieu-De">Về Chúng Tôi</h2>
                        <img src="IMG/logo.png" alt="" width="100px" />
                        <span><strong>Shop Vườn Cây Việt</strong> là thương hiệu dẫn đầu trong lĩnh vực sản xuất &amp; cung cấp các loại Cây phong thủy, cây văn phòng, sen đá, xương rồng &amp; tiểu cảnh Terrarium cao cấp trang trí nội thất.
                        <br />
                        <strong>Shop Vườn Cây Việt</strong> luôn cố gắng tạo ra những sản phẩm đẹp, độc đáo và khác biệt hoàn toàn so với thị trường. Chúng tôi biến sản phẩm thành những tác phẩm nghệ thuật với tất cả niềm đam mê và tâm huyết của mình... để đáp ứng mọi nhu cầu của khách hàng.</span>
                    </div>
                    <div className="_Cot">
                        <h2 className="Content-Tieu-De">Trợ Gíup</h2>
                        <ul>
                        <li><a href="HuongDanMuaHang.html">Hướng Dẫn Mua Hàng</a></li>
                        <li><a href="#">Hướng Dẫn Thanh Toán</a></li>
                        <li><a href="#">Tài Khoản Giao Dịch</a></li>
                        <li><a href="#">Địa Chỉ Shop</a></li>
                        <li><a href="#">Chính Sách Đổi Trả Hàng</a></li>
                        </ul>
                    </div>
                    <div className="_Cot">
                        <h2 className="Content-Tieu-De">Kết Nối Với Chúng Tôi</h2>
                        <ul>
                        <li><a href="#"><i className="fab fa-facebook-square" /> Facebook</a></li>
                        <li><a href="#">Google</a></li>
                        <li><a href="#">Zalo</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="Copyright">
                    <div className="Container">
                        <b>Copyright © 2020 PHAMJIN.COM</b>
                    </div>
                    </div>
                </div></div>

    );
}
export default Footer;