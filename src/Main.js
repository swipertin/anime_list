import { TextField } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";

const Main = ({ setItems }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    event.preventDefault();
  };

  const handleSearch = (event) => {
    axios({
      method: "post",
      url: "http://localhost:3001/searchAnime",
      data: {
        searchTerm,
      },
    }).then(function (response) {
      console.log(response);
      setItems(response.data.data);
    });
    event.preventDefault();
  };

  return (
    <div className="main">
      <form onSubmit={handleSearch}>
        <TextField
          id="outline-basic"
          variant="outlined"
          color="secondary"
          fullWidth
          value={searchTerm}
          label="Search"
          onChange={handleChange}
        ></TextField>
      </form>
    </div>
  );
};

export default Main;
