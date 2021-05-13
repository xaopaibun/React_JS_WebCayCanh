import React from 'react';
import '../../asset/CSS/Main.css';
import SanPham from './SanPham';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Box = () => {
  const dulieucaycanh = useSelector(state => state.dulieucaycanh);
  const dispatch = useDispatch();
  const AccessToken = useSelector(state =>state.AccessToken)
  
  React.useEffect(() => {
    axios.defaults.headers.common['Authorization'] = AccessToken;
    axios.get('http://localhost:5000/getdata/1').then(function (response) {
      dispatch({ type: 'DanhSachCayCanh', data: response.data });
    })
      .catch(function (error) {
        // handle error
        console.log('Loi ' + error);
      });
  }, []);

  return (

    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {
        dulieucaycanh && dulieucaycanh.map(val => (<SanPham key={val.id.toString()} item={val} id={val.id} name={val.name} gia={val.Gia} img={val.img} />))
      }
      

      <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Thông Báo</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Bạn đã thêm vào giỏ thành công
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Hủy bỏ</button>
              <Link to="/GioHang" data-dismiss="modal" className="btn btn-primary">Ok</Link>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}

export default Box;