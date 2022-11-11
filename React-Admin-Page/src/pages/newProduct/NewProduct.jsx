import { useState } from "react";
import "./newProduct.css";
import storage from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createMovie } from "../../context/movieContext/apiCalls";
import { useContext } from "react";
import { MoviesContext } from "../../context/movieContext/MovieContext";

function NewProduct() {
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);
  const { dispatch } = useContext(MoviesContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };
  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const storageRef = ref(storage, `/items/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, item.file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setMovie((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };
  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: img, label: "img" },
      { file: imgTitle, label: "imgTitle" },
      { file: imgSm, label: "imgSm" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch);
  };
  console.log(movie);
  return (
    <div className='newProduct'>
      <h2 className='productTitle'>New Movie</h2>
      <form className='newProductForm'>
        <div className='newProductItem'>
          <label>Image</label>
          <input
            type='file'
            id='img'
            name='img'
            onChange={(e) => setImg(e.target.files[0])}
          />
        </div>
        <div className='newProductItem'>
          <label>Title Image</label>
          <input
            type='file'
            id='imgTitle'
            name='imgTitle'
            onChange={(e) => setImgTitle(e.target.files[0])}
          />
        </div>
        <div className='newProductItem'>
          <label>Thumbnail Image</label>
          <input
            type='file'
            id='imgSmall'
            name='imgSmall'
            onChange={(e) => setImgSm(e.target.files[0])}
          />
        </div>

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
          <label>Desc</label>
          <input
            type='text'
            placeholder='desc'
            name='desc'
            onChange={handleChange}
          />
        </div>
        <div className='newProductItem'>
          <label>Year</label>
          <input
            type='text'
            placeholder='1999'
            name='year'
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
          <label>Duration</label>
          <input
            type='text'
            placeholder='1h'
            name='duration'
            onChange={handleChange}
          />
        </div>
        <div className='newProductItem'>
          <label>Limit</label>
          <input
            type='text'
            placeholder='18'
            name='limit'
            onChange={handleChange}
          />
        </div>
        <div className='newProductItem'>
          <label>is Series</label>
          <select name='isSeries' id='isSeries' onChange={handleChange}>
            <option value='false'>no</option>
            <option value='true'>yes</option>
          </select>
        </div>
        <div className='newProductItem'>
          <label>Trailer</label>
          <input
            type='file'
            placeholder=''
            name='trailer'
            onChange={(e) => setTrailer(e.target.files[0])}
          />
        </div>
        <div className='newProductItem'>
          <label>Video</label>
          <input
            type='file'
            placeholder=''
            name='video'
            onChange={(e) => setVideo(e.target.files[0])}
          />
        </div>
        {uploaded === 5 ? (
          <button className='newPorductButton' onClick={handleSubmit}>
            Create
          </button>
        ) : (
          <button className='newPorductButton' onClick={handleUpload}>
            Upload
          </button>
        )}
      </form>
    </div>
  );
}

export default NewProduct;
