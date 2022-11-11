import "./list.css";
import { Link } from "react-router-dom";
import PublishOutlinedIcon from "@mui/icons-material/PublishOutlined";
import { useLocation } from "react-router-dom";

const List = () => {
  const location = useLocation();
  const list = location.state?.lists;
  console.log(list);
  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'>List</h1>
        <Link to='/newList'>
          <button className='productAddButton'>Create</button>
        </Link>
      </div>
      <div className='productTop'>
        <div className='productTopRight'>
          <div className='productInfoTop'>
            <span className='productName'>{list?.title}</span>
          </div>
          <div className='productInfoBottom'>
            <div className='prodctInfoItem'>
              <span className='productInfoKey'>id:</span>
              <span className='productInfoValue'>{list?._id}</span>
            </div>
            <div className='prodctInfoItem'>
              <span className='productInfoKey'>genre:</span>
              <span className='productInfoValue'>{list?.genre}</span>
            </div>
            <div className='prodctInfoItem'>
              <span className='productInfoKey'>type:</span>
              <span className='productInfoValue'>{list?.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='productForm'>
          <div className='productFormLeft'>
            <label>List title</label>
            <input type='text' placeholder={list?.title} />
            <label>Type</label>
            <input type='text' placeholder={list?.type} />
            <label>Genre</label>
            <input type='text' placeholder={list?.genre} />
          </div>
          <div className='productFormRight'>
            <button className='productButton'>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default List;
