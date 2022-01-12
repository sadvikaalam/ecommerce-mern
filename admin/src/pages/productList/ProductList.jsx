import "./productList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutlined } from '@material-ui/icons';
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { 
      field: 'id', 
      headerName: 'ID', 
      width: 120 
    },
    { 
      field: 'name', 
      headerName: 'Product', 
      width: 200,
      renderCell : (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        )
      }
    },
    { 
      field: 'stock', 
      headerName: 'Stock', 
      width: 200 
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
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
            <DeleteOutlined className="productListDelete" onClick={() => handleDelete(params.row.id)}/>
          </>
        );
      }
    },
  ];
  return (
    <div className="productList" style={{ height: 400, width: '100%' }}>
      <DataGrid 
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}
