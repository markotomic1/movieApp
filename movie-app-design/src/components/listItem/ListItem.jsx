import "./listItem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState(null);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/api/movies/find/" + item,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjk4MWNkMjYzYWM3ZWEyZDVhNmNiNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODA4ODMwNSwiZXhwIjoxNjY4NTIwMzA1fQ.Ajra6QB053PhVkQh8utMlkwlWI54VnWzQ9cplLzIZoU",
            },
          }
        );
        setMovie(res.data);
        //console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link to={{ pathname: "/watch", state: { movie } }}>
      <div
        className='listItem'
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img alt='' />
        {isHovered && (
          <>
            <video loop muted autoPlay={true} />
            <div className='itemInfo'>
              <div className='icons'>
                <PlayArrowIcon className='icon' />
                <AddIcon className='icon' />
                <ThumbUpAltOutlinedIcon className='icon' />
                <ThumbDownOffAltOutlinedIcon className='icon' />
              </div>
              <div className='itemInfoTop'>
                <span></span>
                <span className='limit'>{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className='desc'>{movie.desc}</div>
              <div className='genre'>{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListItem;
