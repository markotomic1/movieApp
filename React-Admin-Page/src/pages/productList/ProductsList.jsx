import { DataGrid } from "@mui/x-data-grid";
import "./productList.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

function ProductsList() {
  const [data, setData] = useState(productRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='productListItem'>
            <img src={params.row.img} alt='' className='productListImg' />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/product/" + params.row.id}>
              <button className='productListEdit'>Edit</button>
            </Link>
            <DeleteIcon
              className='productListDelete'
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];
  return (
    <div className='productsList'>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default ProductsList;
