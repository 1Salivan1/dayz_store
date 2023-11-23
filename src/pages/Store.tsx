import React, { useEffect, ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import ProductCard from "../components/ProductCard";
import "../style/store.css";
import OrderWindow from "../components/OrderWindow";
import { fetchProducts } from "../store/productSlice";

interface IItem {
  id: number;
  image: string;
  name: string;
  type: string;
  quantity: number;
  price: number;
  user: string;
}

function Store() {
  const products = useAppSelector((state) => state.products);
  const [input, setInput] = useState<string>("");
  const [currentData, setCurrentData] = useState<IItem[]>(products);
  const [orderInfo, setOrderInfo] = useState<IItem[]>([]);
  const [orderWindowActive, setOrderWindowActive] = useState<boolean>(false);
  const [byName, setByName] = useState<string | null>(null);
  const [byPrice, setByPrice] = useState<string | null>(null);
  const [byQuantity, setByQuantity] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setCurrentData(products);
  }, [products]);

  // Сортировка товаров с помощью select
  const selectSort = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "all") {
      setCurrentData(products);
    } else if (e.target.value.toLowerCase() === "build") {
      setCurrentData(products.filter((e) => e.type === "build"));
    } else if (e.target.value.toLowerCase() === "weapon") {
      setCurrentData(products.filter((e) => e.type === "weapon"));
    } else if (e.target.value.toLowerCase() === "food") {
      setCurrentData(products.filter((e) => e.type === "food"));
    } else if (e.target.value.toLowerCase() === "transport") {
      setCurrentData(products.filter((e) => e.type === "transport"));
    }
  };

  // Сортировка по названию
  const sortByName = () => {
    const data = [...currentData];
    setByPrice(null);
    setByQuantity(null);
    if (byName === null) {
      setByName("a-z");
      data.sort((a, b) => a.name.localeCompare(b.name));
      setCurrentData(data);
    } else if (byName === "a-z") {
      setByName("z-a");
      data.sort((a, b) => b.name.localeCompare(a.name));
      setCurrentData(data);
    } else if (byName === "z-a") {
      setByName("a-z");
      data.sort((a, b) => a.name.localeCompare(b.name));
      setCurrentData(data);
    }
    console.log(byName);
  };

  // Сортировка по цене
  const sortByPrice = () => {
    const data = [...currentData];
    setByQuantity(null);
    setByName(null);
    if (byPrice === null) {
      setByPrice("high");
      data.sort((a, b) => a.price - b.price);
      setCurrentData(data);
    } else if (byPrice === "high") {
      setByPrice("low");
      data.sort((a, b) => b.price - a.price);
      setCurrentData(data);
    } else {
      setByPrice("high");
      data.sort((a, b) => a.price - b.price);
      setCurrentData(data);
    }
  };

  // Сортрировка по количеству
  const sortByQuantity = () => {
    const data = [...currentData];
    setByPrice(null);
    setByName(null);
    if (byQuantity === null) {
      setByQuantity("high");
      data.sort((a, b) => a.quantity - b.quantity);
      setCurrentData(data);
    } else if (byQuantity === "high") {
      setByQuantity("low");
      data.sort((a, b) => b.quantity - a.quantity);
      setCurrentData(data);
    } else {
      setByQuantity("high");
      data.sort((a, b) => a.quantity - b.quantity);
      setCurrentData(data);
    }
  };

  const handleBuy = (value: IItem[]) => {
    setOrderInfo(value);
  };

  const handleOrderWindow = () => {
    setOrderWindowActive(!orderWindowActive);
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
            <p className="sort-by-name sort-item" onClick={() => sortByName()}>
              По названию
            </p>
            <p
              className={`sort-by-price sort-item ${
                byQuantity === "high"
                  ? "by-top"
                  : byQuantity === "low"
                  ? "by-down"
                  : ""
              }`}
              onClick={sortByQuantity}
            >
              По количеству
            </p>
            <p
              className={`sort-by-price sort-item ${
                byPrice === "high"
                  ? "by-top"
                  : byPrice === "low"
                  ? "by-down"
                  : ""
              }`}
              onClick={() => sortByPrice()}
            >
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
                handleBuy={handleBuy}
                handleOrderWindow={handleOrderWindow}
              />
            ))}
          {orderInfo.map((item) => (
            <OrderWindow
              img={item.image}
              name={item.name}
              user={item.user}
              price={item.price}
              quantity={item.quantity}
              active={orderWindowActive}
              handleOrderWindow={handleOrderWindow}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Store;
