import { useState } from "react";
import "./newProduct.css";

function NewProduct() {
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };
  console.log(img);
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
        <button className='newPorductButton'>Create</button>
      </form>
    </div>
  );
}

export default NewProduct;
