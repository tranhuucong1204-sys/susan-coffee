import Link from "next/link";
import { children } from "react";

export default function Layout ({children}){
    return(
<html lang="vi">
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Susan Coffee - POS Quầy</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="/css/style.css" />
  </head>
  <body>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="index.html">Susan Coffee / POS</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link className="nav-link active" href="/staff">Tạo đơn mới</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/staff/order">Quản lý đơn</Link>
        </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="profile.html">Xin chào, Cường</a>
            </li>
            <li className="nav-item"><a className="nav-link" href="#">Đăng xuất</a></li>
          </ul>
        </div>
      </div>
    </nav>


{children}

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>

    )
}