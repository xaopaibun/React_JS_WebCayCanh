import '../../asset/CSS/Main.css';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
const Login_ = () => {
    const history = useHistory();
    const [ThongBao, setThongBao] = React.useState('');
    const [Username, setUsername] = React.useState('');
    const [Password, setPassword] = React.useState('');
    const isChangeUsername = val => setUsername(val.target.value);
    const isChangePassword = val => setPassword(val.target.value);
    const dispatch = useDispatch();
    const submit = () => {
        let dulieu = { username: Username, password: Password }
        axios.post('http://localhost:5000/login', dulieu).then(function (response) {
           
            //response.data.AccessToken ?  history.push("/") : {}
            
           
                setThongBao('Bạn đã đăng nhập thành công. Hệ thống sẽ chuyển hướng sau 3s !');
           
            setTimeout(() =>{
                dispatch({ type: 'AccessToken', AccessToken: response.data.AccessToken, Username: response.data.Username });
                history.push("/");
            }, 3000);
                
            
        }).catch(function (error) {
            setThongBao('Bạn đã nhập sai tài khoản hoặc mật khẩu rồi !');
        });
    }
    const responseFacebook = (response) => {
        console.log(response);
    }
    const responseGoogle = (response) => {
        console.log(response);
    }

    return (
        <div>
            <div className="container">
                {
                    ThongBao !== '' ? <div className="alert alert-warning text-center" role="alert">
                       {ThongBao}
                    </div> : <div></div>
                }
                <div className="row">
                    <div className="col-lg-6" style={{ margin: 'auto' }}>
                        <div className="form-group">
                            <input type="email" onChange={(val) => isChangeUsername(val)} className="form-control input" name="email" id aria-describedby="emailHelpId" placeholder="Nhập email" />
                        </div>
                        <div className="form-group">
                            <input type="password" onChange={(val) => isChangePassword(val)} className="form-control input" name="password" id placeholder="Nhập Mật Khẩu" />
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" defaultValue="checkedValue" defaultChecked />
                                    Ghi Nhớ Đăng Nhập
                                </label>
                        </div>

                        <input name="submit" style={{ width: '100%' }} className="btn btn-success submit" type="submit" onClick={() => submit()} value="Đăng Nhập" />
                        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 20, marginBottom: 20 }}>
                            <FacebookLogin
                                appId="456503322104710"
                                onClick={() => responseFacebook()}
                                style={{ width: '100%' }}
                                icon="fa-facebook"
                            />
                            <GoogleLogin
                                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"

                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}

                            />
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
}
export default Login_;