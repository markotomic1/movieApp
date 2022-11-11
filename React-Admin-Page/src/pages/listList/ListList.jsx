import { DataGrid } from "@mui/x-data-grid";
import "./listList.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { ListContext } from "../../context/listContext/ListContext";
import { deleteList, getLists } from "../../context/listContext/apiCalls";

function ListList() {
  const [data, setData] = useState(productRows);
  const { lists, dispatch } = useContext(ListContext);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);
  const handleDelete = (id) => {
    deleteList(id, dispatch);
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 220 },

    { field: "title", headerName: "Title", width: 200 },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "type", headerName: "Type", width: 80 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <Link
              to={{
                pathname: "/list/" + params.row._id,
              }}
              state={{ lists: params.row }}
            >
              <button className='productListEdit'>Edit</button>
            </Link>
            <DeleteIcon
              className='productListDelete'
              onClick={() => handleDelete(params.row._id)}
            />
          </div>
        );
      },
    },
  ];
  return (
    <div className='productsList'>
      <DataGrid
        rows={lists}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(r) => r._id}
      />
    </div>
  );
}

export default ListList;
