function CardProduct() {
  return (
    <div className="card">
      <div className="card-top">
        <img className="card-img" src="" alt="" />
      </div>
      <div className="card-bottom">
        <h2 className="card-header">Название</h2>
        <p className="card-quantity">В наличии:</p>
        <p className="card-price-for-one">Цена за штуку:</p>
        <button>Купить</button>
      </div>
    </div>
  );
}

export default CardProduct;
