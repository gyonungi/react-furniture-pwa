import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCatalog } from "../redux/catalogSlice";
import "../App.css"
import Card from "./Card/card";
const Section = ({ itemCatalog }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const catalogs = useSelector((state) => state.catalog.items);

  useEffect(() => {
    dispatch(fetchCatalog());
  }, []);

  let result = [];

  for (let i = 0; i < catalogs?.sections?.length; i++) {
    let res = {};
    res["title"] = catalogs?.sections[i]?.title;
    let arr = [];
    catalogs?.sections[i]?.items.forEach((item) => {
      for (let j = 0; j < itemCatalog.length; j++) {
        if (item == itemCatalog[j].id) {
          arr.push(itemCatalog[j]);
        }
      }
      res["arr"] = arr;
    });
    result.push(res);
  }

  const ar = result.find((item) => item.title.includes(params.title));

  return (
    <>
      <h1>{params.title}</h1>
      <div className="card">
        {ar?.arr?.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
    <hr />
    <hr />
    </>
  );
};

export default Section;
