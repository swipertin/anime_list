import { Card, CardMedia, CardContent } from "@material-ui/core";
import { useHistory } from "react-router-dom";

//this is the item
const Item = ({ item, ItemInfo }) => {
  let history = useHistory();

  function handleClick() {
    history.push({ pathname: "/iteminfo", item: item });
  }
  return (
    <div className="card">
      <Card onClick={handleClick}>
        <CardContent className="cardContent">
          {item.attributes.titles.en || item.attributes.titles.en_jp}
        </CardContent>
        <CardMedia component="img" image={item.attributes.posterImage?.small} />
      </Card>
    </div>
  );
};

export default Item;
