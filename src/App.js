import { createContext, useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/card";
import Header from "./components/header/header";
import { Route, Routes } from "react-router";
import Section from "./components/section";

export const SearchContext = createContext("");

function App() {
  const [itemShop, setItemShop] = useState([]);
  const [catalog, setCatalog] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const res = await fetch("https://moscow.fargospc.ru/test/json/");
      const data = await res.json();
      setItemShop(data.elements);
      setCatalog(data.sections);
    } catch (err) {
      console.error(err);
    }
  }

  const objectToArray = (data) => {
    return Object.keys(data).map((key) => {
      return {
        id: key,
        ...data[key],
      };
    });
  };

  let itemCatalog = objectToArray(itemShop);
  const elementCatalog = itemCatalog
    .filter((item) => {
      if (item.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
    })
    .map((item) => {
      return <Card key={item.id} {...item} />;
    });
  return (
    <div className="wrapper">
      <div className="container">
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <Header catalog={catalog} />
          <Routes>
            <Route
              path="/section/:title"
              element={<Section itemCatalog={itemCatalog} />}
            />
          </Routes>
          <h1>Вся продукция</h1>
          <div className="main">
            <div className="card">{elementCatalog}</div>
          </div>
        </SearchContext.Provider>
      </div>
    </div>
  );
}

export default App;
