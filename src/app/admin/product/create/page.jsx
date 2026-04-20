export default function CreateProduct(){
    return(
            <div className="content">
      <div className="card shadow">
        <div className="card-body">
          <h4 className="card-title mb-4">Thêm  sản phẩm</h4>
          <form>
            <div className="mb-3">
              <label for="productName" className="form-label">Tên sản phẩm</label>
              <input
                type="text"
                className="form-control"
                id="productName"
                placeholder="Nhập tên sản phẩm"
                required
              />
            </div>
            <div className="row row-cols-2">
              <div className="mb-3">
                <label for="price" className="form-label">Giá (VNĐ)</label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  placeholder="Nhập giá sản phẩm"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="status" className="form-label">Trạng thái</label>
                <select className="form-select" id="status" required>
                  <option value="active">Đang bán</option>
                  <option value="inactive">Ngừng bán</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label for="image" className="form-label">Ảnh sản phẩm</label>
              <input
                type="file"
                className="form-control"
                id="image"
                accept="image/*"
              />
            </div>
            <button type="submit" className="btn btn-dark">Lưu sản phẩm</button>
            <a href="admin-products.html" className="btn btn-outline-secondary"
              >Hủy</a>
          </form>
        </div>
      </div>
    </div>
    )
}