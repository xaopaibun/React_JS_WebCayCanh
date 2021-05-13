const initstate = {
    giohang: [],
    tongtien: 0,
    active: false
};

const reducers = (state = initstate, action) => {
    switch (action.type) {
        case 'Add_SanPham':
            if(state.giohang.find((val) => val.id == action.dulieu.id)){
                state.giohang.soluong = state.giohang.soluong +1;
            }
            else{
                return {...state, giohang: [...state.giohang, {...action.dulieu, soluong : 1}]}
            }
            return state;
        case 'XoaSanPhamGioHang':
            return { ...state, giohang: state.giohang.filter((item => item.id !== action.idxoa)) }
        case 'DanhSachCayCanh':
            return { ...state, dulieucaycanh: action.data }
        case 'Send_ID':
            return { ...state, dulieucaycanh: state.dulieucaycanh.filter((item => item.id !== action.id)) }
        case 'TongTienGioHang':
            return { ...state, tongtien: state.giohang.length > 0 ? state.giohang.reduce((accumulator, currentValue) => accumulator.Gia + currentValue.Gia) : 0 }
        case 'DuLieuThem':
            return { ...state, dulieucaycanh: [...state.dulieucaycanh, action.data] }
        case 'DuLieuCanSua':
            return { ...state, dulieucansua: action.dulieucansua, active: action.active }
        case 'AccessToken':
             return { ...state, AccessToken: action.AccessToken , Username : action.Username}
        case 'SuaDuLieu':
            const dulieu_update = action.dulieu_update; 
            var dulieu =  state.dulieucaycanh;          
            let index = state.dulieucaycanh.findIndex(item => item.id == dulieu_update.id);
             if (index !== -1) {
                dulieu[index] =  dulieu_update;
            }
            console.log(dulieu)
            return { ...state , dulieucaycanh : dulieu} // k cập nhật dữ liệu update
        default:
            return state;
    }
}

export default reducers;