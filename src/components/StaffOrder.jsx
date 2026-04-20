"use client"

import { useEffect, useState } from "react";

export default function StaffOrder(){
    const [cart, setCart] = useState([]);
    useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
    }, []);
      const total = cart.reduce(
    (sum, product) => sum + (product.price * product.quantity),
    0
  );
    const handleRemoveAll = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };
  const handleOrder = async () => {
    // Giả bộ đã được thanh toán online
    const order = {
      name: "Tên Khách", // lấy từ thông tin đăng nhập
      table_id: inputTable, // id bàn khách chọn
      order_items: cart, // danh sách sản phẩm trong giỏ
      total: total, // tổng thành tiền của đơn hàng
    };
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
        <div>
            <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>Món</th>
                      <th>SL</th>
                      <th>Giá</th>
                      <th>Tổng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((p) => (
                    <tr key={p._id}>
                      <td>{p.name}</td>
                      <td>{p.quantity}</td>
                      <td>{p.price.toLocaleString()}đ</td>
                      <td>{(p.price * p.quantity).toLocaleString('vi-VN')}đ</td>
                    </tr>
                    ))}
                  </tbody>
                </table>
                <hr />
                <h5 className="text-end">Tổng cộng: 105.000đ</h5>
                <div className="d-flex mt-3 justify-content-between">
                  <button className="btn btn-outline-danger" onClick={handleRemoveAll}>Hủy hóa đơn</button>
                  <button className="btn btn-success w-50" onClick={handleOrder}>Thanh toán</button>      
        </div>
        </div>
    )
}