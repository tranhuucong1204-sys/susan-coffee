"use client"

import { useState, useEffect } from "react";

export default function Order(){
    const [orderList, setOrderList] = useState([]);
        async function fetchOrders() {
            const res = await fetch('http://localhost:3000/api/orders');
            const data = await res.json();
            setOrderList(data);
        }
    useEffect(() => {
        fetchOrders();
    }, []);
const handleConfirm = async (order) => {
const statusChangeList = {
  "don-moi": "dang-che-bien",
  "dang-che-bien": "cho-giao",
  "cho-giao": "hoan-thanh"
}
const res = await fetch(`http://localhost:3000/api/orders/${order._id}`, {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  "body": JSON.stringify({status: statusChangeList[order.status],
})
})
const data = await res.json();
if (data.status === "success") {
  await fetchOrders();
}
}

const handleCancel = async (order) => {
const res = await fetch(`http://localhost:3000/api/orders/${order._id}`, {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  "body": JSON.stringify({
    "status": "huy",
})
})
const data = await res.json();
if (data.status === "success") {
  await fetchOrders();
}
}
    return(
            <main className="container-fluid mt-5 pt-5">
      <h3 className="text-center mb-4">Danh sách đơn hàng tại quầy</h3>
      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead className="table-dark">
            <tr>
              <th>Mã đơn</th>
              <th>Bàn/Khách</th>
              <th>Sản phẩm</th>
              <th>Thời gian gọi</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((o) => (
              <tr key={o._id}>
                <td>#{o._id}</td>
                <td>{o.table_info.name} - {o.table_info.location}</td>
                <td>
                  {o.order_items.map((item) => (
                    <span key={item._id}>{item.name} x{item.quantity} </span>
                  ))}
                </td>
                <td>{new Date(o.created_at).toLocaleString('vi-VN')}</td>
                <td>
                  {
                    o.status=='don-moi' ?
                    (<span className="badge text-bg-primary">Đơn mới</span>):
                    o.status=='dang-che-bien' ?
                    (<span className="badge text-bg-warning">Đang chế biến</span>):
                    o.status=='cho-giao' ?
                    (<span className="badge text-bg-info">Chờ giao</span>):
                    o.status=='hoan-thanh' ?
                    (<span className="badge text-bg-success">Hoàn thành</span>):
                    (<span className="badge text-bg-danger">Đã hủy</span>)
                  }
                </td>
                <td>
                  {o.status != 'hoan-thanh' && o.status != 'huy' ? (
                    <>
                <button className="btn btn-success btn-sm" onClick={() => handleConfirm(o)}>Xác nhận</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleCancel(o)}>Hủy</button>
                    </>
                    ):""}
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
    )
}