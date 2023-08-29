import "./card.css";

const Card = ({ id, title, currency, price, photo }) => {
  return (
    <>
      <div className="main-card">
        <span>Номер: {id}</span>
        <span>Название: {title}</span>
        <div className="photo-card">
          {photo.map((item, i) => (
            <img key={i} src={item.src} style={{ height: 100, width: 100 }} alt="item"/>
          ))}
        </div>
        <div className="price-card">
          <span>Цена: {price}</span>
          <p>{currency}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
