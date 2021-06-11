import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Main from "./Main";
import Item from "./Item";
import ItemList from "./ItemList";
import NavBar from "./Nav";
import Pagination from "./Pagination";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ItemInfo from "./ItemInfo";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/getanime")
      .then(function (response) {
        console.log(response);
        console.log(response.data.data);
        setItems(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <NavBar setItems={setItems} />
        <Route exact path="/home">
          <Main setItems={setItems} />
          <ItemList items={items} ItemInfo={ItemInfo} Item={Item} />
          <Pagination setItems={setItems} />
        </Route>
        <Route exact path="/iteminfo">
          <ItemInfo />
        </Route>
      </div>
    </Router>
  );
};

export default App;
