import React from 'react';
import '../../asset/CSS/Main.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useSelector } from 'react-redux';
const Menu = () => {
  const Username = useSelector(state => state.Username);
  console.log('a', Username);
  return (
    <div>
      <div className="TopHeader">
        <div className="Container">
          <div className="Hotline">
            <i className="fa fa-phone" />Hotline:
              <a href="tel:0352343938"> 0352343938</a>
          </div>
          <div className="GioHang">
            <i className="fa fa-shopping-cart" />
            <a href="#"><Link to="/GioHang"><b>Giỏ Hàng</b></Link></a>
          </div>
          <div className="Login">
            {
              Username ? <ul><p>Xin chào bạn <span style={{ color: 'red', fontWeight: 'bold' }}>{Username}</span> ! <Link to="/Logout">Đăng Xuất </Link></p></ul> : <ul>
                <li><Link to="/Login"><i className="fa fa-unlock-alt" />Đăng Nhập </Link></li>
                <li><Link to="/DangKy"><i className="fa fa-user-plus" />Đăng Ký </Link></li>
              </ul>
            }
          </div>
        </div>
      </div>
      <div className="Header">
        <div className="Container" >
          <div className="widget-head">
            Shop Vườn Cây Việt Phạm Jin <br />
            <span>Mãi Mãi Bất Tử</span>
          </div>
          <div className="TimKiem">
            <input type="text" id="TimKiem" placeholder="Tìm Kiếm" />
            <input type="button" defaultValue="Tìm Kiếm" />
          </div>
        </div>
      </div>
      <div className="khoimenuc1">
        <ul className="menu">
          <li className="item1"><Link to="/">Trang chủ </Link></li>
          <li className="item1"><a href="GioiThieu.html">Giới thiệu</a></li>
          <li className="item1"><a href="CayCanh.html">Cây cảnh</a>
            <ul className="menuc2">
              <li className="item2"><a href="#">Cây cảnh để bàn</a></li>
              <li className="item2"><a href="#">Cây thủy sinh</a></li>
              <li className="item2"><a href="#">Terrarium</a></li>
              <li className="item2"><a href="#">Sen đá, xương rồng</a></li>
              <li className="item2"><a href="#">Cây chậu treo</a></li>
              <li className="item2"><a href="#">Cây cảnh nội thất</a></li>
              <li className="item2"><a href="#">Cây cảnh ngoại thất</a></li>
              <li className="item2"><a href="#">Cây Bon </a></li>
              <li className="item2"><a href="#">Cây cảnh để bàn</a></li>
              <li className="item2"><a href="#">Cây cảnh để bàn</a></li>
              <li className="item2"><a href="#">Cây cảnh để bàn</a></li>
            </ul>
          </li>
          <li className="item1"><a href="#">Chậu cảnh</a>
            <ul className="menuc2">
              <li className="item2"><a href="#">Chậu Đất Nung</a></li>
              <li className="item2"><a href="#">Chậu Đá Đất Mài Xi Măng</a></li>
              <li className="item2"><a href="#">Chậu Men Sứ</a></li>
              <li className="item2"><a href="#">Chậu Bon Sai</a></li>
              <li className="item2"><a href="#">Chậu Xi Măng</a></li>
              <li className="item2"><a href="#">Chậu Thủy Tinh</a></li>
            </ul>
          </li>
          <li className="item1"><a href="#">Phụ kiện cây cảnh</a>
            <ul className="menuc2">
              <li className="item2"><a href="#">Đất Trồng Phân Bón</a></li>
              <li className="item2"><a href="#">Dung Dịch Thủy Tinh</a></li>
              <li className="item2"><a href="#">Dụng Cụ Làm Vườn</a></li>
              <li className="item2"><a href="#">Vật Trang Trí Tiểu Cảnh</a></li>
            </ul>
          </li>
          <li className="item1"><a href="DichVu.html">Dịch vụ</a></li>
          <li className="item1"><a href="#">Blog-Tin tức</a>
            <ul className="menuc2">
              <li className="item2"><a href="#">Kiến Thức Cây Cảnh</a></li>
              <li className="item2"><a href="#">Video</a></li>
            </ul>
          </li>
          <li className="item1"><a href="#">Hỗ trợ</a>
            <ul className="menuc2">
              <li className="item2"><a href="HuongDanMuaHang.html">Hướng Dẫn Mua Hàng</a></li>
              <li className="item2"><a href="#">Chính Sách Đổi, Trả Hàng</a></li>
            </ul>
          </li>
          <li className="item1"><a href="LienHe.html">Liên hệ</a></li>
          <li className="item1"><a href="KhuyenMai.html"> Khuyến mãi </a></li>
        </ul>
      </div>
    </div>

  );
}
export default Menu;
