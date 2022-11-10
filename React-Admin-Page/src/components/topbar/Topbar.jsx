import "./topbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>Admin</span>
        </div>
        <div className='topRight'>
          <div className='topbarIcons'>
            <NotificationsNoneIcon />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIcons'>
            <LanguageIcon />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIcons'>
            <SettingsOutlinedIcon />
          </div>
          <img
            src='https://cdn.pixabay.com/photo/2016/12/26/18/33/logo-1932539__340.png'
            alt=''
            className='topAvatar'
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
