import { Link } from "react-router-dom";
import "./header.css";
import { useContext } from "react";
import { SearchContext } from "../../App";

const Header = ({ catalog }) => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  return (
    <header>
      <h1>Магазин мебели</h1>
      <div className="header">
        <section>
          {catalog?.map((item) => (
            <Link key={item.items} to={`/section/${item.title}`}>
              {item.title}
            </Link>
          ))}
        </section>
      </div>
      <div className="header-search">
        <h2>Поиск по запросу</h2>
        <svg
        className="icon"
        enableBackground="new 0 0 32 32"
        id="EditableLine"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="14"
          cy="14"
          fill="none"
          id="XMLID_42_"
          r="9"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          fill="none"
          id="XMLID_44_"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="27"
          x2="20.366"
          y1="27"
          y2="20.366"
        />
      </svg>
        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Поиск продукции" />
      </div>
    </header>
  );
};

export default Header;
