import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SearchStyle from "../SearchBtn/SearchBtn.module.scss";
import searchData from "../BodyProfile/dataSearch";
import { Link } from "react-router-dom";

const SearchBtn = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const handleClick = (e) => {
    const value = e.target.value;
    setQuery(value);
    findFilter(value);
  };

  const findFilter = (query) => {
    if (!query) {
      setResult([]);
      return;
    }

    const filtred = searchData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setResult(filtred);
  };

  return (
    <div className={SearchStyle.search_bar}>
      <SearchIcon />
      <input
        onChange={handleClick}
        className={SearchStyle.search_anything}
        type="text"
        placeholder="Search in account"
      />
      {result.length > 0 && (
        <div className={SearchStyle.search_results} key={result.id}>
          {result.map((result) => (
            <Link
              key={result.id}
              to={result.link}
              className={SearchStyle.result_item}
            >
              {result.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBtn;
