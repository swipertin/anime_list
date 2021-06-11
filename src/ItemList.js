// this populates the homepage
const ItemList = ({ items, Item }) => {
  return (
    <div className="itemListDiv">
      <div className="listItems">
        {items.map((item, index) => {
          return <Item item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
