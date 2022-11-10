import "./widgetSmall.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function WidgetSmall() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/api/users?new=true",
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjk4MWNkMjYzYWM3ZWEyZDVhNmNiNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODA4ODMwNSwiZXhwIjoxNjY4NTIwMzA1fQ.Ajra6QB053PhVkQh8utMlkwlWI54VnWzQ9cplLzIZoU",
            },
          }
        );
        setNewUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewUsers();
  }, []);
  console.log(newUsers);
  return (
    <div className='widgetSmall'>
      <span className='widgetSmallTitle'>New Join Memebers</span>
      <ul className='widgetSmallList'>
        {newUsers.map((user) => (
          <li className='widgetSmallListItem' key={user._id}>
            <img
              src={
                user.profilePic ||
                "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              }
              alt=''
              className='widgetSmallImage'
            />
            <div className='widgetSmallUser'>
              <span className='widgetSmallUsername'>{user.username}</span>
              <span className='widgetSMallUserTitle'>Engineer</span>
            </div>
            <button className='widgetSmallButton'>
              <VisibilityIcon className='widgetSmIcons' />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WidgetSmall;
