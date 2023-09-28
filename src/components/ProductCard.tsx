import { table } from "console";
import "../style/ProductCard.css";

interface IProductCardProps {
  id: number;
  image: string;
  name: string;
  quantity: number;
  price: number;
  type: string;
  user: string;
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
        <button className="card-button">Купить</button>
      </div>
    </div>
  );
}

export default ProductCard;
