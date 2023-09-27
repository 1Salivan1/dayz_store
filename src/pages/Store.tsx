import React, { useEffect, ChangeEvent } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
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
        setCurrentData(response.data);
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

          <select className="store-search__select" name="" id="">
            <option value="all">По названию</option>
            <option value="quantity">По количеству</option>
            <option value="cost">По цене</option>
          </select>
        </div>
        <div className="store-offers">
          <div className="sort">
            <p className="sort-by-name sort-item">По названию</p>
            <p className="sort-by-count sort-item">По количеству</p>
            <p className="sort-by-price sort-item">По цене</p>
          </div>
          {currentData
            .filter((el) => {
              return input.toLowerCase() === ""
                ? el
                : el.name.toLowerCase().includes(input.toLowerCase());
            })
            .map((item) => (
              <ProductCard
                id={item.id}
                image={item.image}
                name={item.name}
                type={item.type}
                quantity={item.quantity}
                price={item.price}
                user={item.user}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Store;
