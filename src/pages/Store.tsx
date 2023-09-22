import React, { useEffect } from "react";
import axios from "axios";
import CardProduct from "../components/CardProduct";
import "../style/store.css";

interface IItem {
  id: number;
  image: string;
  name: string;
  type: string;
  quantity: number;
  price: number;
  user: string;
}
const url: string = "https://6478b240362560649a2e4a2c.mockapi.io/Goods";

function Store() {
  const [goods, setGoods] = React.useState<IItem[]>([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setGoods(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных");
      });
    console.log(goods);
  });

  return (
    <div className="wrapper">
      <div className="store">
        <div className="store-search">
          <input type="text" className="store-search__input" />
          <select className="store-search__select" name="" id="">
            <option value="build">Стройматериалы</option>
            <option value="gun">Оружие</option>
            <option value="food">Еда</option>
            <option value="transport">Транспорт</option>
          </select>
        </div>
        <div className="store-offers">
          {goods.map((item) => (
            <CardProduct
              id={item.id}
              image={item.image}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              type={item.type}
              user={item.user}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Store;
