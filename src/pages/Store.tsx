import CardProduct from "../components/CardProduct";

function Store() {
  return (
    <div className="wrapper">
      <div className="store">
        <div className="store-search">
          <input type="text" className="store-search__input" />
          <select className="store-search__select" name="" id="">
            <option value="build">Стройматериалы</option>
            <option value="gun">Оружие</option>
            <option value="food">Еда</option>
            <option value="transport">Транспорт</option>
          </select>
        </div>
        <div className="store-offers">
          <CardProduct />
        </div>
      </div>
    </div>
  );
}

export default Store;
