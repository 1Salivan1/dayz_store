interface ICardProductProps {
  id: number;
  image: string;
  name: string;
  quantity: number;
  price: number;
  type: string;
  user: string;
}

function CardProduct(props: ICardProductProps) {
  return (
    <div className="card">
      <div className="card-top">
        <img className="card-img" src={props.image} alt="" />
      </div>
      <div className="card-bottom">
        <h2 className="card-header">{props.name}</h2>
        <p className="card-quantity">В наличии: {props.quantity}</p>
        <p className="card-price-for-one">Цена за штуку: {props.price}</p>
        <p className="card-seller">Продавец: {props.user}</p>
        <button>Купить</button>
      </div>
    </div>
  );
}

export default CardProduct;
