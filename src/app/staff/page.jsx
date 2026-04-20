"use client"
import AddToCart from "@/components/AddToCart";
import StaffOrder from "@/components/StaffOrder";
import { useEffect, useState } from "react";

export default function Pos() {
  const [productList, setProductList] = useState([]);
  const [keyword, setKeyWord] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch('http://localhost:3000/api/products');
      const data = await res.json();
      setProductList(data);
    }
    fetchProduct();
  }, []);

  const filteredProductList = productList.filter((p) =>
    p.name.toLowerCase().includes(keyword.toLowerCase())
  );

  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProductList.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProductList.length / itemsPerPage);

  return (
    <main className="container-fluid mt-5 pt-4">
      <div className="row">
        <div className="col-sm-6 col-md-8">
          <div className="d-flex mb-3 justify-content-between">
            <h3 className="mb-0">Chọn món</h3>
            <form className="w-50" onSubmit={(e) => e.preventDefault()}>
              <input
                type="search"
                className="form-control"
                placeholder="Tìm món theo tên hoặc ID"
                onChange={(e) => {
                  setKeyWord(e.target.value);
                  setCurrentPage(1); // Reset về trang 1 khi tìm kiếm
                }}
              />
            </form>
          </div>

          <div className="row">
            {currentItems.map((p) => (
              <div key={p._id} className="col-sm-4 col-md-3 mb-3">
                <div className="card h-100">
                  <img src={`/img/${p.image}`} className="card-img-top" alt={p.name} />
                  <div className="card-body text-center">
                    <h6 className="card-title">{p.name}</h6>
                    <p>{p.price.toLocaleString()}đ</p>
                    <AddToCart product={p}>Thêm</AddToCart>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {}
          <nav className="d-flex mt-3">
            <ul className="pagination mx-auto">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => setCurrentPage((curr) => Math.max(1, curr - 1))}
                >
                  <span>&laquo;</span>
                </button>
              </li>

              {Array.from({ length: totalPages }, (_, i) => (
                <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                    {i + 1}
                  </button>
                </li>
              ))}

              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => setCurrentPage((curr) => Math.min(totalPages, curr + 1))}
                >
                  <span>&raquo;</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <div className="col-sm-6 col-md-4 border-start">
          <div className="d-flex mb-3 justify-content-between">
            <h3 className="mb-0">Khách hàng</h3>
            <div className="btn-group w-50">
              <div className="btn btn-dark w-50">Khách lẻ</div>
              <div className="btn btn-outline-dark w-50">Thành viên</div>
            </div>
          </div>

          <div className="mb-3">
            <form>
              <input
                type="search"
                className="form-control"
                placeholder="Nhập tên hoặc số điện thoại"
              />
            </form>
          </div>

          <div className="position-sticky" style={{ top: '75px' }}>
            <h3 className="mb-3">Hóa đơn</h3>
            <div className="card">
              <div className="card-body">
                <StaffOrder />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}