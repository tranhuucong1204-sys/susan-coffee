export default function Layout({children}){
    return(
  
<html lang="vi">
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Susan Coffee - Trang chủ</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="/css/style.css" />
  </head>
  <body>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="index.html">Susan Coffee</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="cart.html">Giỏ hàng</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="login.html">Đăng nhập</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="register.html">Đăng ký</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

{children}


    <footer className="bg-dark text-white text-center py-3 mt-auto">
      <p>Susan Coffee - 123 Đường ABC, TP.HCM</p>
      <p>Hotline: 0123 456 789 | Email: susancoffee@gmail.com</p>
      <p>&copy; 2026 Susan Coffee. All rights reserved.</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>

    )
}
