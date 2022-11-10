import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { data } from "../../dummyData";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useMemo } from "react";
function Home() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/users/stats", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjk4MWNkMjYzYWM3ZWEyZDVhNmNiNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODA4ODMwNSwiZXhwIjoxNjY4NTIwMzA1fQ.Ajra6QB053PhVkQh8utMlkwlWI54VnWzQ9cplLzIZoU",
          },
        });
        const statsList = res.data.sort((a, b) => a._id - b._id);
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New user": item.total },
          ])
        );
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
  }, [MONTHS]);
  //console.log(userStats);
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={userStats} title='User Analytics' grid dataKey='New user' />
      <div className='homeWidgets'>
        <WidgetSmall />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Home;
