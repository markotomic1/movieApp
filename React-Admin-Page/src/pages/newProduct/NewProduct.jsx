import "./newProduct.css";

function NewProduct() {
  return (
    <div className='newProduct'>
      <h2 className='productTitle'>New Product</h2>
      <form className='newProductForm'>
        <div className='newProductItem'>
          <label>Image</label>
          <input type='file' id='file' />
        </div>
        <div className='newProductItem'>
          <label>Name</label>
          <input type='text' placeholder='Apple Airpods' />
        </div>
        <div className='newProductItem'>
          <label>Stock</label>
          <input type='text' placeholder='123' />
        </div>
        <div className='newProductItem'>
          <label>Active</label>
          <select name='active' id='active'>
            <option value='yes'>yes</option>
            <option value='no'>no</option>
          </select>
        </div>
        <button className='newPorductButton'>Create</button>
      </form>
    </div>
  );
}

export default NewProduct;
