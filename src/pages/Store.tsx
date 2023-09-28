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
      })
      .finally(() => console.log("currentData"));
  }, [url]);

  // Поиск товаров через инпут
  const filteredGoods = goods.filter((item) =>
    item.name.toLowerCase().includes(input.toLowerCase())
  );

  // Сортировка товаров с помощью select
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

  const sortByName = () => {
    if (currentData.length > 0) {
      currentData.sort((x, y) => x.name.localeCompare(y.name));
      setCurrentData([...currentData]);
    }
  };

  const sortByQuantity = () => {
    if (currentData.length > 0) {
      currentData.sort((x, y) => y.quantity - x.quantity);
      setCurrentData([...currentData]);
    }
  };

  const sortByPrice = () => {
    if (currentData.length > 0) {
      currentData.sort((x, y) => x.price - y.price);
      setCurrentData([...currentData]);
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
          <div className="sort">
            <p className="sort-by-name sort-item" onClick={sortByName}>
              По названию
            </p>
            <p className="sort-by-count sort-item" onClick={sortByQuantity}>
              По количеству
            </p>
            <p className="sort-by-price sort-item" onClick={sortByPrice}>
              По цене
            </p>
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
                key={item.id}
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
