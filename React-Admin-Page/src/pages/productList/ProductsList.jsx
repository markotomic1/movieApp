import { DataGrid } from "@mui/x-data-grid";
import "./productList.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { MoviesContext } from "../../context/movieContext/MovieContext";
import { useEffect } from "react";
import { deleteMovie, getMovies } from "../../context/movieContext/apiCalls";

function ProductsList() {
  const [data, setData] = useState(productRows);
  const { movies, dispatch } = useContext(MoviesContext);

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);
  const handleDelete = (id) => {
    deleteMovie(id, dispatch);
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "movie",
      headerName: "Movie name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='productListItem'>
            <img src={params.row.img} alt='' className='productListImg' />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "year", headerName: "Year", width: 100 },
    { field: "limit", headerName: "Limit", width: 80 },
    { field: "isSeries", headerName: "IsSeries", width: 100 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <Link
              to={{
                pathname: "/product/" + params.row._id,
              }}
              state={{ movies: params.row }}
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
        rows={movies}
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

export default ProductsList;
