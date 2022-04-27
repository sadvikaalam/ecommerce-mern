import "./productList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutlined } from '@material-ui/icons';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getProducts } from "../../redux/apiCalls";
import { userRequest } from "../../redux/requestMethod";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);
  const [productItem, setProductItem] = useState({});
  const users = useSelector(state => state.currentUser);
  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch] )

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  }

  const getProductItem = async (id) => {
    try{
      const res = await userRequest.get(`/products/${id}`);
      setProductItem(res.data);
    }catch{}
  }
  console.log('users data : ', users);
  const columns = [
    { 
      field: '_id', 
      headerName: 'ID', 
      width: 200
    },
    { 
      field: 'name', 
      headerName: 'Product', 
      width: 200,
      renderCell : (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        )
      }
    },
    { 
      field: 'inStock', 
      headerName: 'Stock', 
      width: 200 
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell : (params) => {
        return(
          <>
            <Link to={"/product/"+params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlined className="productListDelete" onClick={() => getProductItem(params.row._id)}/>
          </>
        );
      }
    },
  ];
  console.log(products);
  return (
    <div className="productList" style={{ height: 400, width: '100%' }}>
      <DataGrid 
        rows={products}
        columns={columns}
        pageSize={8}
        getRowId={(row) => row._id}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}
