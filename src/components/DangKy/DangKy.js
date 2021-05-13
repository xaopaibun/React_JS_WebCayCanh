import React from 'react';
import '../../asset/CSS/Main.css';
import axios from 'axios';
const DangKy_ = () => {
    const [gmail, setgmail] = React.useState('');
    const [pass, setpass] = React.useState('');
    const [sdt, setsdt] = React.useState('');
    const isChangegmail = val => setgmail(val.target.value);
    const isChangesdt = val => setsdt(val.target.value);
    const isChangepass = val => setpass(val.target.value);
   
    const onSubmitDangKy = () => {
        let dulieu = { gmail: gmail, pass: pass, sdt: sdt }
        axios.post('http://localhost:5000/dangky', dulieu).then(function (response) {
            setgmail('');
            setsdt('');
            setpass('');
            alert('Bạn đã đăng ký tài khoản thành công');
        }).catch(function (error) {
            // seterr(error)
            // alert(error);
            console.log(error);
            
        });
    }
    return (
        <div>
            <div className="container">
               
                <div className="row">
                    <div className="col-lg-6" style={{ margin: 'auto' }}>
                        {/* {
                            err !== '' ?  <div class="alert alert-danger" role="alert">
                            <strong>{err}</strong>
                        </div> : <div/>
                        }
                        */}
                            <div className="form-group">
                                <input type="email" value={gmail} onChange={(val) => isChangegmail(val)} className="form-control input" name="email" id aria-describedby="emailHelpId" placeholder="Nhập email" />
                            </div>
                            <div className="form-group">
                                <input type="text" value={sdt} onChange={(val) => isChangesdt(val)} className="form-control input" name="sdt" id placeholder="Nhập Số điện Thoại" />
                            </div>
                            <div className="form-group">
                                <input type="password" value={pass} onChange={(val) => isChangepass(val)} className="form-control input" name="pass" id placeholder="Nhập Mật Khẩu" />
                            </div>
                            <div className="form-group">
                                <input type="password" value={pass} onChange={(val) => isChangepass(val)} className="form-control input" name="pass" id placeholder="Nhập lại Mật Khẩu" />
                            </div>
                            <input name="submit" onClick={() => onSubmitDangKy()} className="btn btn-success" type="submit" />
                        
                    </div>
                </div>
            </div>

        </div>
    );
}
export default DangKy_;