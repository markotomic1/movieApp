import "./product.css";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import PublishOutlinedIcon from "@mui/icons-material/PublishOutlined";

const Product = () => {
  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'>Product</h1>
        <Link to='/newProduct'>
          <button className='productAddButton'>Create</button>
        </Link>
      </div>
      <div className='productTop'>
        <div className='productTopLeft'>
          <Chart data={productData} dataKey='Sales' title='Sales Performance' />
        </div>
        <div className='productTopRight'>
          <div className='productInfoTop'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1XRT1LaOjoWHT6-UE7-ECExUnq5rChTkp0A&usqp=CAU'
              alt=''
              className='productInfoImg'
            />
            <span className='productName'>Apple airpods</span>
          </div>
          <div className='productInfoBottom'>
            <div className='prodctInfoItem'>
              <span className='productInfoKey'>id:</span>
              <span className='productInfoValue'>123</span>
            </div>
            <div className='prodctInfoItem'>
              <span className='productInfoKey'>sales:</span>
              <span className='productInfoValue'>2000</span>
            </div>
            <div className='prodctInfoItem'>
              <span className='productInfoKey'>active:</span>
              <span className='productInfoValue'>yes</span>
            </div>
            <div className='prodctInfoItem'>
              <span className='productInfoKey'>in stock:</span>
              <span className='productInfoValue'>none</span>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='productForm'>
          <div className='productFormLeft'>
            <label>Product name</label>
            <input type='text' placeholder='Apple airpods' />
            <label>In Stock</label>
            <select name='inStock' id='idStock'>
              <option value='yes'>yes</option>
              <option value='no'>no</option>
            </select>
            <label>Active</label>
            <select name='active' id='active'>
              <option value='yes'>yes</option>
              <option value='no'>no</option>
            </select>
          </div>
          <div className='productFormRight'>
            <div className='productsUploads'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkrz961kAHKFwj4m48zFWWMbJQSUzvc_pZzA&usqp=CAU'
                alt=''
                className='productUploadImg'
              />
              <label for='file'>
                <PublishOutlinedIcon />
              </label>
              <input type='file' id='file' style={{ display: "none" }} />
            </div>
            <button className='productButton'>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
