import "./newUser.css";

function NewUser() {
  return (
    <div className='newUser'>
      <h1 className='newUserTitle'>New User</h1>
      <form className='newUserForm'>
        <div className='newUserItem'>
          <label>Username</label>
          <input type='text' placeholder='john' />
        </div>
        <div className='newUserItem'>
          <label>Full Name</label>
          <input type='text' placeholder='john smit' />
        </div>
        <div className='newUserItem'>
          <label>Email</label>
          <input type='email' placeholder='john@gmail.com' />
        </div>
        <div className='newUserItem'>
          <label>Password</label>
          <input type='password' placeholder='password' />
        </div>
        <div className='newUserItem'>
          <label>Phone</label>
          <input type='text' placeholder='+847565878' />
        </div>
        <div className='newUserItem'>
          <label>Adress</label>
          <input type='text' placeholder='New York USA' />
        </div>
        <div className='newUserItem'>
          <label>Gender</label>
          <div className='newUserGender'>
            <input type='radio' name='gender' id='Male' value='Male' />
            <label for='Male'>Male</label>
            <input type='radio' name='gender' id='Female' value='Female' />
            <label for='Female'>Female</label>
          </div>
        </div>
        <div className='newUserItem'>
          <label>Active</label>
          <select name='active' id='active' className='newUserSelect'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <button className='newUserButton'>Create</button>
      </form>
    </div>
  );
}

export default NewUser;
