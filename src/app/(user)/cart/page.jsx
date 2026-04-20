"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function Cart(){
    const [cart, setCart] = useState([]);
    const [tablelist, setTableList] = useState([]);
    useEffect(() => {
      setCart(JSON.parse(localStorage.getItem("cart") || "[]"));


      async function fetchTables() {
      const res = await fetch('http://localhost:3000/api/tables');
      const tables = await res.json();
      setTableList(tables);
      }
      fetchTables();

    }, []);
    const handleQuantity = (id, value) => {
      const newCart = [...cart];
      const index = newCart.findIndex((p) => p._id === id);
      newCart[index].quantity = Number(value);
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
    const handleRemove = (id) => {
      const newCart = [...cart];
      const index = newCart.findIndex((p) => p._id === id);
      newCart.splice(index, 1);
            setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
    const total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
    const handleRemoveAll = () => {
      setCart([]);
      localStorage.removeItem("cart");
    }
    const [inputTable, setInputTable] = useState("");
    const router = useRouter();
    const handleOrder = async () => {
      // giả bộ được thanh toán rồi
      const order = {
        name: 'Tên khách hàng', //lấy từ thông tin đăng nhập
        table_id: inputTable,
        order_items: cart,
        total: total,
      }
      const res = await fetch('http://localhost:3000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      });
      const result = await res.json();
      if(result.code == 'success'){
        handleRemoveAll();
        router.push('/success');
      }else{
        alert("Lỗi rồi ní!");
      }
    }
    return(
    <main className="container mt-5 pt-5">
      <h1 className="text-center mb-4">Giỏ hàng của bạn</h1>
      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead className="table-dark">
            <tr>
              <th>Sản phẩm</th>
              <th>Số lượng</th>
              <th>Giá</th>
              <th>Tổng</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
              {cart.map((product) => (
                <tr key={product._id}>
                  <td>{product.name}</td>
                  <td>
                    <input 
                      type="number" 
                      className="form-control" 
                      value={product.quantity} 
                      min="1" onChange={(e)=>handleQuantity(product._id, e.target.value)}/>
                  </td>
                  <td>{product.price.toLocaleString('vi-VN')}đ</td>
                  <td>{(product.quantity * product.price).toLocaleString('vi-VN')}đ</td>
                  <td>
                    <button className="btn btn-danger btn-sm">Xóa</button>
                  </td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={3}>Tổng tiền</th>
              <th>{total.toLocaleString('vi-VN')}đ</th>
              <th>
                <button className="btn btn-danger btn-sm" onClick={handleRemoveAll}>Xóa hết</button>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="row mt-4">
        <div className="col-md-6 offset-md-6">
          <label htmlFor="tableSelect" className="form-label">Chọn vị trí bàn:</label>
          <select className="form-select" id="tableSelect"   onChange={(e) => setInputTable(e.target.value)} defaultValue={-1}>
            <option value={-1} disabled>-- Vui lòng chọn bàn --</option>
              {tablelist.map((t) => (
                <option key={t._id} value={t._id}>{t.name}({t.location})</option>
              ))}
          </select>
        </div>
      </div>


      <div className="d-flex justify-content-end mt-3">

        <button className="btn btn-success" onClick={handleOrder}>Thanh toán</button>
      </div>
    </main> 
    )
}
