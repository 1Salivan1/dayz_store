import React, { useEffect, ChangeEvent } from "react";
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
  const [input, setInput] = React.useState<string>("");
  const [currentData, setCurrentData] = React.useState<IItem[]>([]);

  // Загрузка данных с бека
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setGoods(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных");
      });
  }, [url]);

  // Поиск товаров через инпут
  const filteredGoods = goods.filter((item) =>
    item.name.toLowerCase().includes(input.toLowerCase())
  );

  const selectSort = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value == "all") {
      setCurrentData(goods);
    } else if (e.target.value.toLowerCase() == "build") {
      setCurrentData(goods.filter((e) => e.type == "build"));
    } else if (e.target.value.toLowerCase() == "weapon") {
      setCurrentData(goods.filter((e) => e.type == "weapon"));
    } else if (e.target.value.toLowerCase() == "food") {
      setCurrentData(goods.filter((e) => e.type == "food"));
    } else if (e.target.value.toLowerCase() == "transport") {
      setCurrentData(goods.filter((e) => e.type == "transport"));
    }
  };

  return (
    <div className="wrapper">
      <div className="store">
        <div className="store-search">
          <input
            type="text"
            placeholder="Найти"
            className="store-search__input"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <select
            className="store-search__select"
            onChange={selectSort}
            name=""
            id=""
          >
            <option value="all">Все</option>
            <option value="build">Стройматериалы</option>
            <option value="weapon">Оружие</option>
            <option value="food">Еда</option>
            <option value="transport">Транспорт</option>
          </select>
        </div>
        <div className="store-offers">
          {currentData
            .filter((el) => {
              return input.toLowerCase() === ""
                ? el
                : el.name.toLowerCase().includes(input.toLowerCase());
            })
            .map((item) => (
              <CardProduct
                key={item.id}
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
