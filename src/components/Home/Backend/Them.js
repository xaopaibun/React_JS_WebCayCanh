import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
const Them = () => {
    const dispatch = useDispatch();
    const [Ten, setTen] = React.useState('');
    const [Linkimg, setLinkimg] = React.useState('');
    const [Gia, setGia] = React.useState();
    const isChangeTen = val => setTen(val.target.value);
    const isChangeLink = val => setLinkimg(val.target.value);
    const isChangeGia = val => setGia(val.target.value);
    const submit = () => {
        let dulieu = { id: parseInt(Math.random() * 100000), name: Ten, img: Linkimg, Gia: Gia }
        axios.post('http://localhost:5000/add', dulieu).then(function (response) {
           
                dispatch({ type: 'DuLieuThem', data: JSON.parse(response.config.data) });
                setTen('');
                setLinkimg('');
                setGia('');
            
            
           
        }).catch(function (error) {
            alert(error)
        });
        // axios.post('http://localhost:5000/send-mail', {mail : Ten}).then(function (response) {

        //     console.log(JSON.parse(response.config.data));
        // })
        //     .catch(function (error) {
        //         alert(error)
        //     });
    }
    return (
        <div >
            <div className="modal fade" id="modelId_Them" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Thêm cây cảnh</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container" style={{ margintop: 50 }}>

                                <div className="form-group">
                                    <input type="text" className="form-control" value={Ten} aria-describedby="helpId" onChange={(val) => isChangeTen(val)} placeholder="Nhập Tên Cây Cảnh" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" value={Linkimg} aria-describedby="helpId" onChange={(val) => isChangeLink(val)} placeholder="Nhập Link ảnh Cây" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" value={Gia} aria-describedby="helpId" onChange={(val) => isChangeGia(val)} placeholder="Nhập Gía" />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Hủy bỏ</button>
                            <button type="button" className="btn btn-info" data-dismiss="modal" onClick={() => submit()}>Thêm</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <button type="button" data-toggle="modal" data-target="#modelId_Them" className="btn btn-success" >Thêm dữ liệu</button>
            </div>
        </div>
    );
}
export default Them;