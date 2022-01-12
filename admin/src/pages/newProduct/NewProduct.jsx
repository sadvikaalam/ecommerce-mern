import { Publish } from "@material-ui/icons"
import "./newProduct.css"

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <div className="addProductImgContainer">
            <label for="file">
              <Publish className="addProductUpload"/>
            </label>
            <input type="file" id="file" style={{display: "none"}}/>
            <img
              className="addProductImg" 
              src="http://i01.appmifile.com/webfile/globalweb/K3S-blue.png" 
              alt="" />
          </div>
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Xiaomi 10 Lite" />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  )
}
