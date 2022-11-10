import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { data } from "../../dummyData";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import WidgetLg from "../../components/widgetLg/WidgetLg";
function Home() {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={data} title='User Analytics' grid dataKey='Active User' />
      <div className='homeWidgets'>
        <WidgetSmall />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Home;
