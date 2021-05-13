import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './FooterWeb.js/Footer';
import Menu from './MenuWeb/Menu';

const GioHang = () => {
    function numberWithCommas(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1.$2");
        return x;
    }
    const dispatch = useDispatch();
    const dulieu = useSelector(state => state.giohang);
    const tongtien = useSelector(state => state.tongtien);
    const Xoa_Item = (id) => {
        dispatch({ type: 'XoaSanPhamGioHang', idxoa: id });
    }
    React.useEffect(() => {
        dispatch({ type: 'TongTienGioHang' });
    }, [dulieu])
    return (
        <div>
            <Menu />
            <div className="container">
                {
                    dulieu.length == 0 ?
                    <div style={{height: 'auto', marginTop: 50, marginBottom: 50}}>
                        <div className="alert alert-danger" role="alert">
                            Không có sản phẩm nào trong giỏ hàng !
                        </div>
                        </div>
                        :
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên cây cảnh</th>
                                    <th>Link IMG</th>
                                    <th>Gía</th>
                                    <th>Số Lượng</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dulieu && dulieu.map((val, index) => {

                                    return (
                                        <tr key={val.id.toString()}>
                                            <td>{index + 1}</td>
                                            <td>{val.name}</td>
                                            <td style={{ width: '20%' }}><img className="card-img-top" src={val.img} alt="Card image cap" /></td>
                                            <td>{numberWithCommas(val.Gia)}</td>
                                            <td>{val.soluong}</td>
                                            <td><button type="button" class="btn btn-primary btn-lg" onClick={() => Xoa_Item(val.id)}><i className="far fa-trash-alt"></i></button></td>
                                        </tr>
                                    );
                                })}
                                <tr>
                                    <td>Tổng tiền : </td>
                                    <td style={{ color: 'red', fontWeight: 'bold' }}>{numberWithCommas(tongtien)} VNĐ</td>
                                </tr>
                            </tbody>
                        </table>
                }
            </div>
            <Footer />
        </div>
    );
}
export default GioHang;

