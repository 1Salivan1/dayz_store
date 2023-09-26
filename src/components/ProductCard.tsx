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
      <div className="card-info card-item">
        <img src={props.image} alt="" className="card-img" />
        <h2 className="card-header">{props.name}</h2>
      </div>
      <div className="cadr-right">
        <div className="card-paragraph">
          <p className="card-quantity text-item">{props.quantity}</p>
          <p className="card-price text-item">{props.price}</p>
          <p className="card-user text-item">{props.user}</p>
          <div>
            <button>Купить</button>
          </div>
        </div>
      </div>
    </div>
    // <tr className="card">
    //   <td className="card-img-block">
    //     <img src={props.image} alt={props.name} className="card-img" />
    //   </td>
    //   <td className="card-name">
    //     <h2>{props.name}</h2>
    //   </td>
    //   <td className="card-quantity">{props.quantity}</td>
    //   <td className="card-price">{props.price}</td>
    //   <td className="card-user">{props.user}</td>
    //   <td>
    //     <button>Купить</button>
    //   </td>
    // </tr>
  );
}

export default ProductCard;
