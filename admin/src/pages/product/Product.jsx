import { Link } from "react-router-dom"
import Chart from "../../components/chart/Chart"
import "./product.css"
import { productData } from "../../dummyData"
import { Publish } from "@material-ui/icons"

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="sales" title="Sales Performance" grid/> 
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img 
              className="productInfoImg"
              src="https://cdn.eraspace.com/pub/media/catalog/product/x/i/xiaomi_mi_11_midnight_gray_1_1.jpg" 
              alt="" />
            <span className="productName">Xiaomi Redmi Note 10</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">4123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">yes</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Xiaomi 10 Lite" />
            <label>In Stock</label>
            <select name="inStcok" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img 
                src="https://cdn.eraspace.com/pub/media/catalog/product/x/i/xiaomi_mi_11_midnight_gray_1_1.jpg" 
                alt="" 
                className="productUploadImg" />
                <label for="file">
                  <Publish/>
                </label>
                <input type="file" id="file" style={{display: "none"}} />
            </div>
            <button className="productButton">Update </button>
          </div>
        </form>
      </div>
    </div>
  )
}
