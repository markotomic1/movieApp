import "./sidebar.css";
import LineStyleOutlinedIcon from "@mui/icons-material/LineStyleOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MailIcon from "@mui/icons-material/Mail";
import ReportIcon from "@mui/icons-material/Report";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarList'>
            <Link to='/' className='link'>
              <li className='sidebarListItem'>
                <LineStyleOutlinedIcon className='sidebarIcon' />
                Home
              </li>
            </Link>
            <li className='sidebarListItem'>
              <TimelineOutlinedIcon className='sidebarIcon' />
              Analytics
            </li>
            <li className='sidebarListItem'>
              <TrendingUpIcon className='sidebarIcon' />
              Sales
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Quick menu</h3>
          <ul className='sidebarList'>
            <Link to='/users' className='link'>
              <li className='sidebarListItem'>
                <LineStyleOutlinedIcon className='sidebarIcon' />
                Users
              </li>
            </Link>
            <Link to='/products' className='link'>
              <li className='sidebarListItem'>
                <TimelineOutlinedIcon className='sidebarIcon' />
                Products
              </li>
            </Link>
            <li className='sidebarListItem'>
              <TrendingUpIcon className='sidebarIcon' />
              Transactions
            </li>
            <li className='sidebarListItem'>
              <TrendingUpIcon className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Notifications</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <MailIcon className='sidebarIcon' />
              Mail
            </li>
            <li className='sidebarListItem'>
              <TimelineOutlinedIcon className='sidebarIcon' />
              Feedback
            </li>
            <li className='sidebarListItem'>
              <MailIcon className='sidebarIcon' />
              Messages
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Staff</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <LineStyleOutlinedIcon className='sidebarIcon' />
              Manage
            </li>
            <li className='sidebarListItem'>
              <TimelineOutlinedIcon className='sidebarIcon' />
              Analytics
            </li>
            <li className='sidebarListItem'>
              <ReportIcon className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
