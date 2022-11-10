import "./watch.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useLocation } from "react-router-dom";
const Watch = () => {
  const location = useLocation();
  const movie = location.state.movie;
  console.log(movie);
  return (
    <div className='watch'>
      <Link to='/'>
        <div className='back'>
          <ArrowBackIcon />
          Home
        </div>
      </Link>
      <video
        src='https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761
      '
        className='video'
        autoPlay
        progress='true'
        controls
        muted
      />
    </div>
  );
};

export default Watch;
