import "./user.css";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LocationSearchingOutlinedIcon from "@mui/icons-material/LocationSearchingOutlined";
import PublishOutlinedIcon from "@mui/icons-material/PublishOutlined";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className='user'>
      <div className='userTitleContainer'>
        <h1 className='userTitle'>Edit user</h1>
        <Link to='/newUser'>
          <button className='userAddButon'>Create</button>
        </Link>
      </div>
      <div className='userContainer'>
        <div className='userShow'>
          <div className='userShowTop'>
            <img
              src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt=''
              className='userShowImg'
            />
            <div className='userShowTopTitle'>
              <span className='userShowUsername'>Anna Becker</span>
              <span className='userShowUserTitle'>Software Engeneer</span>
            </div>
          </div>
          <div className='userShowBottom'>
            <span className='userShowTitle'>Account Details</span>
            <div className='userShowInfo'>
              <PermIdentityOutlinedIcon className='userShowIcon' />
              <span className='userShowInfoTitle'>annabeck99</span>
            </div>
            <div className='userShowInfo'>
              <CalendarTodayOutlinedIcon className='userShowIcon' />
              <span className='userShowInfoTitle'>10.12.1999</span>
            </div>
            <span className='userShowTitle'>Contact Details</span>
            <div className='userShowInfo'>
              <PhoneAndroidOutlinedIcon className='userShowIcon' />
              <span className='userShowInfoTitle'>+387 66 33 66</span>
            </div>
            <div className='userShowInfo'>
              <MailOutlineOutlinedIcon className='userShowIcon' />
              <span className='userShowInfoTitle'>annabeck99@gmail.com</span>
            </div>
            <div className='userShowInfo'>
              <LocationSearchingOutlinedIcon className='userShowIcon' />
              <span className='userShowInfoTitle'>New York USA</span>
            </div>
          </div>
        </div>
        <div className='userUpdate'>
          <span className='userUpdateTitle'>Edit</span>
          <form action='' className='userUpdateForm'>
            <div className='userUpdateLeft'>
              <div className='userUpdateItem'>
                <label>Username</label>
                <input
                  type='text'
                  placeholder='annabeck99'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Full Name</label>
                <input
                  type='text'
                  placeholder='Anna Becker'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Email</label>
                <input
                  type='text'
                  placeholder='annabeck99@gmail.com'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Phone</label>
                <input
                  type='text'
                  placeholder='+387 66 33 66'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Adress</label>
                <input
                  type='text'
                  placeholder='New York USA'
                  className='userUpdateInput'
                />
              </div>
            </div>
            <div className='userUpdateRight'>
              <div className='userUpdateUpload'>
                <img
                  src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                  alt=''
                  className='userUpdateImg'
                />
                <label htmlFor='file'>
                  <PublishOutlinedIcon className='userUpdateIcon' />
                </label>
                <input type='file' id='file' style={{ display: "none" }} />
              </div>
              <button className='userUpdatesButton'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
