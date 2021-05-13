import React from 'react';
import { useDispatch, } from 'react-redux';
import '../../asset/CSS/Main.css';
import axios from 'axios';
const SanPham = ({ name, gia, img, id, item }) => {
  const dispatch = useDispatch();
  function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
      x = x.replace(pattern, "$1.$2");
    return x;
  }
  const XoaSubmit = (id) => {
    axios.delete('http://localhost:5000/xoa/'+id) // đây
      .then(function (response) {
        dispatch({ type: 'Send_ID', id: id });
        alert(response.data.success);
      })
      .catch(function (error) {
       console.log(error)
      });
  }
  return (
    <div className="KhoiSanPham">
      <div className="card" style={{ width: '240px', height: 'auto', margin: 10 }}>
        <img className="card-img-top" src={img} alt="Card image cap" style={{ width: '100%', height: '250px' }}/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="Gia" style={{ color: 'red', fontWeight: 'bold' }}> {numberWithCommas(gia)} VND</p>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => dispatch({ type: 'Add_SanPham', dulieu: item })}><i className="fas fa-cart-plus"></i></button>
            <button type="button" className="btn btn-success" onClick={() => XoaSubmit(id)}><i className="far fa-trash-alt"></i></button>
            <button type="button" className="btn btn-info" data-toggle="modal" data-target="#modelId" onClick={() => dispatch({ type: 'DuLieuCanSua', dulieucansua: item, active: true })}><i className="fas fa-edit"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SanPham;