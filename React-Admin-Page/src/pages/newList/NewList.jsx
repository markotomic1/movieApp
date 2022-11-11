import { useEffect, useState } from "react";
import "./newList.css";
import { useNavigate } from "react-router-dom";
import { getMovies } from "../../context/movieContext/apiCalls";
import { useContext } from "react";
import { MoviesContext } from "../../context/movieContext/MovieContext";
import { ListContext } from "../../context/listContext/ListContext";
import { createList } from "../../context/listContext/apiCalls";

function NewProduct() {
  const [list, setList] = useState(null);
  const navigate = useNavigate();

  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MoviesContext);

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };
  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list, dispatch);
    navigate("/lists");
  };

  return (
    <div className='newProduct'>
      <h2 className='productTitle'>New List</h2>
      <form className='newProductForm'>
        <div className='formlLeft'>
          <div className='newProductItem'>
            <label>Title</label>
            <input
              type='text'
              placeholder='Dexter'
              name='title'
              onChange={handleChange}
            />
          </div>
          <div className='newProductItem'>
            <label>Genre</label>
            <input
              type='text'
              placeholder='action'
              name='genre'
              onChange={handleChange}
            />
          </div>

          <div className='newProductItem'>
            <label>Type</label>
            <select name='type' id='type' onChange={handleChange}>
              <option value=''>Type</option>
              <option value='movie'>Movie</option>
              <option value='series'>Series</option>
            </select>
          </div>
        </div>
        <div className='formRight'>
          <div className='newProductItem'>
            <label>Content</label>
            <select
              multiple
              name='content'
              id='type'
              onChange={handleSelect}
              style={{ height: "240px" }}
            >
              {movies.map((movie) => (
                <option value={movie._id} key={movie._id}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>
          <button className='newProductButton' onClick={handleSubmit}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewProduct;
