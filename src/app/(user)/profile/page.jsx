export default function Profile(){
    return(
            <main className="container mt-5 pt-5">
      <h1 className="text-center mb-4">Hồ sơ cá nhân</h1>
      <div className="row">

        <div className="col-md-6 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h4 className="mb-3">Thông tin cá nhân</h4>
              <form>
                <div className="mb-3">
                  <label htmlFor="fullname" className="form-label">Họ và tên</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullname"
                    value="Nguyễn Văn A"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value="nguyenvana@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Số điện thoại</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    value="0123456789"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Địa chỉ</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    value="123 Đường ABC, TP.HCM"
                  />
                </div>
                <button type="submit" className="btn btn-dark">
                  Cập nhật thông tin
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h4 className="mb-3">Đơn hàng đã đặt</h4>
              <div className="table-responsive">
                <table className="table table-bordered align-middle">
                  <thead className="table-dark">
                    <tr>
                      <th>Mã đơn</th>
                      <th>Sản phẩm</th>
                      <th>Ngày đặt</th>
                      <th>Trạng thái</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#DH001</td>
                      <td>Cà phê sữa x2</td>
                      <td>20/03/2026</td>
                      <td><span className="badge bg-success">Hoàn thành</span></td>
                    </tr>
                    <tr>
                      <td>#DH002</td>
                      <td>Latte x1, Trà đào x1</td>
                      <td>22/03/2026</td>
                      <td>
                        <span className="badge bg-warning text-dark"
                          >Đang xử lý</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td>#DH003</td>
                      <td>Cà phê dừa x1</td>
                      <td>23/03/2026</td>
                      <td>
                        <span className="badge bg-info text-dark"
                          >Đang chuẩn bị</span
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button className="btn btn-dark mt-2">Xem chi tiết đơn hàng</button>
            </div>
          </div>
        </div>
      </div>
    </main>
    )
}