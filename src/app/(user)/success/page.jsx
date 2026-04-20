export default function Success(){
    return(
    <main
      className="container mt-5 pt-5 d-flex justify-content-center align-items-center"
      style={{ minHeight: '70vh' }}
    >
      <div className="col-md-8 col-lg-6">
        <div className="alert alert-success text-center shadow-lg p-4">
          <h2 className="mb-3">🎉 Đặt hàng thành công!</h2>
          <p>Cảm ơn bạn đã đặt hàng tại <strong>Susan Coffee</strong>.</p>
          <p>
            Đơn hàng của bạn đang được xử lý và sẽ được phục vụ tại bàn bạn đã
            chọn.
          </p>
          <a href="index.html" className="btn btn-dark mt-3">Quay lại Menu</a>
        </div>
      </div>
    </main>
    )
}