"use client";

import { use, useEffect, useState } from "react";

export default function Table(){
  const [tableList, setTableList] = useState([]);
  async function fetchTable() {
    const res = await fetch('http://localhost:3000/api/tables');
    const data = await res.json();
    setTableList(data);
  }
  const [tableName, setTableName] = useState('');
  const [tableLocation, setTableLocation] = useState('');
  const [tableId, setTableId] = useState(null);
  useEffect(() => {
    fetchTable();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!tableId){
      const newTable = {
        name: tableName,
        location: tableLocation,
        
      };
      const res = await fetch('http://localhost:3000/api/tables', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTable)
      });
      const result = await res.json();
      if (result.status == 'success') {
        handleReset();
        await fetchTable();
      }

    }else{
      const updatedTable = {
        name:tableName,
        location:tableLocation,
      }
      const res = await fetch(`http://localhost:3000/api/tables/${tableId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTable)
        });
        const result = await res.json();
        if (result.status == 'success') {
          handleReset();
          await fetchTable();
        }
    }
  }
  const handleUpdate = (table) => {
    setTableId(table._id);
    setTableName(table.name);
    setTableLocation(table.location);
  }
  const handleReset = () => {
    setTableId(null);
    setTableName('');
    setTableLocation('');
  }
  return(
          <div className="content">
    <div className="row">

      <div className="col-md-8">
        <div className="card shadow mb-4">
          <div className="card-body">
            <h4 className="card-title mb-3">Danh sách bàn</h4>
            <div className="table-responsive">
              <table className="table table-bordered align-middle">
                <thead className="table-dark">
                  <tr>
                    <th>STT</th>
                    <th>Tên bàn</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {tableList.map((table,index) => (
                  <tr key={table._id}>
                    <td>{index + 1}</td>
                    <td>{table.name}-{table.location}</td>
                    <td>
                      <button className="btn btn-warning btn-sm" onClick={(e)=>handleUpdate(table)}>Sửa</button>
                      <button className="btn btn-danger btn-sm">Xóa</button>
                    </td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>


      <div className="col-md-4">
        <div className="card shadow">
          <div className="card-body">
            <h4 className="card-title mb-3">{tableId ?"Sửa":"Thêm"} bàn</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="tableName" className="form-label">Tên bàn</label>
                <input
                  type="text"
                  className="form-control"
                  id="tableName"
                  placeholder="Ví dụ: Bàn số 1"
                  required
                  onChange={(e)=>setTableName(e.target.value)}
                  value={tableName}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="tableLocation" className="form-label">Vị trí bàn</label>
                <input
                  type="text"
                  className="form-control"
                  id="tableLocation"
                  placeholder="Ví dụ: T01"
                  required
                  onChange={(e)=>setTableLocation(e.target.value)}
                  value={tableLocation}
                />
              </div>
              <button type="submit" className="btn btn-dark">Lưu thay đổi</button>
              <button type="button" className="btn btn-outline-secondary" onClick={handleReset}>
                Hủy
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}