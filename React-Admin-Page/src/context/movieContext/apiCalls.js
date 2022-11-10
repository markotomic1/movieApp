import {
  deleteMoviesFailure,
  deleteMoviesStart,
  deleteMoviesSuccess,
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
} from "./MovieActions";
import axios from "axios";

export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get("http://localhost:8800/api/movies", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (error) {
    dispatch(getMoviesFailure());
  }
};
export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMoviesStart());
  try {
    await axios.delete("http://localhost:8800/api/movies/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteMoviesSuccess(id));
  } catch (error) {
    dispatch(deleteMoviesFailure());
  }
};
