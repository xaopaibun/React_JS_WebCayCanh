import React from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
const Pagination = () => {
    const [page, setpage] = React.useState(0);
    const dispatch = useDispatch();
    React.useEffect(() => {
        axios.get('http://localhost:5000/getpage').then(function (response) {
          setpage(Math.ceil(response.data[0] / 4))

        })
            .catch(function (error) {

                console.log('Loi ' + error);
            });
    }, []);
    const callApi = (page) => {
        axios.get('http://localhost:5000/getdata/' + page).then(function (response) {
            dispatch({ type: 'DanhSachCayCanh', data: response.data });
        })
            .catch(function (error) {
                console.log('Loi ' + error);
            });
    }
    let items = [];
    for (let number = 1; number <= page; number++) {
        items.push(number);
    }
    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <button type="button" className="page-link" onClick={() => {
                            page > 1 ? setpage(page - 1) : setpage(2);
                            callApi(page);
                        }} aria-label="Previous">
                            <span aria-hidden="true">«</span>
                            <span className="sr-only">Previous</span>
                        </button>
                    </li>
                   {items.map((val) =>{
                       return(
                        <li key = {val.toString()} className="page-item"><button type="button" class="btn page-link" onClick={() => callApi(val)}>{val}</button></li>
                       );
                   })}
                   
                    <li className="page-item">
                        <button type="button" className="page-link" onClick={() => {
                            setpage(page + 1);
                            callApi(page);
                        }} aria-label="Next">
                            <span aria-hidden="true">»</span>
                            <span className="sr-only">Next</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Pagination;