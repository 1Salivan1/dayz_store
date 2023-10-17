interface IProps {
  img: string;
  name: string;
  user: string;
  price: number;
  quantity: number;
}

function OrderWindow() {
  return (
    <div className="order-window">
      <div className="order-window__top-content">
        <img src="" alt="img" className="top-img" />
        <h1 className="top-header"></h1>
      </div>
      <div className="order-window__middle-content">
        <p className="seller">Продавец:</p>
        <p className="price">Цена за штуку:</p>
        <p className="quantity">Количество:</p>
        <input type="range" className="quantity-range" />
      </div>
      <div className="order-window__bottom-content">
        <p className="final-price">К оплате: </p>
        <button className="bottom-button">Купить</button>
      </div>
    </div>
  );
}

export default OrderWindow;
