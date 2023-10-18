import React from "react";
import "../style/OrderWindow.css";

interface IProps {
  img: string;
  name: string;
  user: string;
  price: number;
  quantity: number;
  active: boolean;
  handleOrderWindow: () => void;
}

function OrderWindow(props: IProps) {
  const [rangeValue, setRangeValue] = React.useState<string>("1");

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(e.target.value);
  };
  return (
    <div
      className={props.active ? "order-window-active" : "order-window-disable"}
    >
      <div
        className="order-window-overlay"
        onClick={(e) => {
          e.stopPropagation();
          props.handleOrderWindow();
        }}
      ></div>
      <div className="order-window">
        <div className="order-window-close">
          <button
            className="close-button"
            onClick={() => props.handleOrderWindow()}
          >
            &#215;
          </button>
        </div>
        <div className="content-wrapper">
          <div className="order-window__top-content">
            <img src={props.img} alt="img" className="top-img" />
            <h1 className="top-header">{props.name}</h1>
          </div>
          <div className="order-window__middle-content">
            <p className="seller">Продавец: {props.user}</p>
            <p className="price">Цена за штуку: {props.price}</p>
            <p className="quantity">Количество: {props.quantity}</p>
            <div className="order-input">
              <input
                type="range"
                min="1"
                max={props.quantity}
                value={rangeValue}
                onChange={handleRangeChange}
                className="quantity-range"
              />
              <p>{rangeValue}</p>
            </div>
          </div>
          <div className="order-window__bottom-content">
            <p className="final-price">
              К оплате: {props.price * Number(rangeValue)}$
            </p>
            <button className="bottom-button">Купить</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderWindow;
