import React from "react";
import '../asset/CSS/Main.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import GioHang from "../components/GioHang";
import DangKy from "../components/DangKy";

export default function Router_App() {
  return (
    <Router>
        <Switch>
        <Route path="/DangKy">
            <DangKy />
          </Route>
        <Route path="/GioHang">
            <GioHang />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      
    </Router>
  );
}
