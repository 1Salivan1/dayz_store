import "../style/ProductCard.css";

interface IItem {
  id: number;
  image: string;
  name: string;
  type: string;
  quantity: number;
  price: number;
  user: string;
}

interface IProductCardProps {
  id: number;
  image: string;
  name: string;
  quantity: number;
  price: number;
  type: string;
  user: string;
  handleBuy: (value: IItem[]) => void;
  handleOrderWindow: () => void;
}

function ProductCard(props: IProductCardProps) {
  return (
    <div className="card">
      <img src={props.image} alt="" className="card-img" />
      <h2 className="card-header">{props.name}</h2>
      <p className="card-quantity card-item">x {props.quantity}</p>
      <p className="card-price card-item">{props.price}$</p>
      <p className="card-user card-item">{props.user}</p>
      <div className="button-block">
        <button
          className="card-button"
          onClick={() => {
            props.handleBuy([props]);
            props.handleOrderWindow();
          }}
        >
          Купить
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
