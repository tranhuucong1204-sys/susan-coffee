export default function Login(){
    return(
            <main
      className="container mt-5 pt-5 d-flex justify-content-center align-items-center"
      style={{minHeight: 70+"vh"}}
    >
      <div className="col-md-6 col-lg-4">
        <div className="card shadow">
          <div className="card-body">
            <h3 className="text-center mb-4">Đăng nhập</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Số điện thoại</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Nhập số điện thoại"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">Mật khẩu</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Nhập mật khẩu"
                  required
                />
              </div>
              <button type="submit" className="btn btn-dark w-100">
                Đăng nhập
              </button>
            </form>
            <p className="text-center mt-3">
              Chưa có tài khoản? <a href="#" className="text-dark">Đăng ký ngay</a>
            </p>
          </div>
        </div>
      </div>
    </main>
    )
}