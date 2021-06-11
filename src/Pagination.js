import axios from "axios";
import { useState, useEffect } from "react";

const Pagination = ({ setItems }) => {
  const [counter, setCounter] = useState(0);

  useEffect(
    (count) => {
      axios({
        method: "post",
        url: "http://localhost:3001/getmoreanime",
        data: {
          offset: counter,
        },
      }).then((response) => {
        setItems(response.data.data);
      });
    },
    [counter, setItems]
  );

  const handleClick = (type) => {
    switch (type) {
      case "previous":
        setCounter(counter - 20);
        break;
      case "next":
        setCounter(counter + 20);
        break;
      default:
        break;
    }
  };

  return (
    <div className="page">
      <button
        onClick={() => {
          handleClick("previous");
        }}
      >
        Previous
      </button>
      <button
        onClick={() => {
          handleClick("next");
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
