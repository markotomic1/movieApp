import "./widgetSmall.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
function WidgetSmall() {
  return (
    <div className='widgetSmall'>
      <span className='widgetSmallTitle'>New Join Memebers</span>
      <ul className='widgetSmallList'>
        <li className='widgetSmallListItem'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='widgetSmallImage'
          />
          <div className='widgetSmallUser'>
            <span className='widgetSmallUsername'>Anna Keller</span>
            <span className='widgetSMallUserTitle'>Engineer</span>
          </div>
          <button className='widgetSmallButton'>
            <VisibilityIcon className='widgetSmIcons' />
            Display
          </button>
        </li>
        <li className='widgetSmallListItem'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='widgetSmallImage'
          />
          <div className='widgetSmallUser'>
            <span className='widgetSmallUsername'>Anna Keller</span>
            <span className='widgetSMallUserTitle'>Engineer</span>
          </div>
          <button className='widgetSmallButton'>
            <VisibilityIcon className='widgetSmIcons' />
            Display
          </button>
        </li>
        <li className='widgetSmallListItem'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='widgetSmallImage'
          />
          <div className='widgetSmallUser'>
            <span className='widgetSmallUsername'>Anna Keller</span>
            <span className='widgetSMallUserTitle'>Engineer</span>
          </div>
          <button className='widgetSmallButton'>
            <VisibilityIcon className='widgetSmIcons' />
            Display
          </button>
        </li>
        <li className='widgetSmallListItem'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='widgetSmallImage'
          />
          <div className='widgetSmallUser'>
            <span className='widgetSmallUsername'>Anna Keller</span>
            <span className='widgetSMallUserTitle'>Engineer</span>
          </div>
          <button className='widgetSmallButton'>
            <VisibilityIcon className='widgetSmIcons' />
            Display
          </button>
        </li>
        <li className='widgetSmallListItem'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='widgetSmallImage'
          />
          <div className='widgetSmallUser'>
            <span className='widgetSmallUsername'>Anna Keller</span>
            <span className='widgetSMallUserTitle'>Engineer</span>
          </div>
          <button className='widgetSmallButton'>
            <VisibilityIcon className='widgetSmIcons' />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSmall;
