import moment from "moment";
import { useHistory } from "react-router-dom";

// this is for the items onClick
// gives more in-depth info
const ItemInfo = (props) => {
  let history = useHistory();

  const item = history.location.item;

  return (
    <div className="info">
      {console.log(item)}
      <div className="info2">
        <img src={item.attributes?.posterImage?.small} alt="" />
        <div className="details">
          <span className="detail">{item.attributes.titles.en}</span>
          <br />
          <span className="detail">
            <em>Episode Count: </em>{item.attributes.episodeCount}
          </span>
          <br />
          <span className="detail">Type: {item.attributes.showType}</span>
          <br />
          <span className="detail">
            <em>Premier Date - Last Day Aired: </em>{" "}
            {moment(item.attributes.startDate).format("MM/YYYY")} -{" "}
            {moment(item.attributes.endDate).format("MM/YYYY")}
          </span>
          <br />
          <span className="detail">
            <em>Rating: </em>{item.attributes.ageRating}
          </span>
          <br />
          <span className="detail">
            <em>Description: </em>
            {item.attributes.description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
