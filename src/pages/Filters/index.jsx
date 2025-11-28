import "./filter.css";

function Filter({ search, setSearch, price, setPrice }) {
  const handleClear = () => {
    setSearch(" ");
    setPrice(" ");
  };
  // console.log(search, price);

  return (
    <div className="filters">
      <div className="filters_header">
        <span>Filters</span>
        <i onClick={handleClear}></i>
      </div>
      <div className="filters_search">
        <span>Product Name / Brand</span>
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="filters_price">
        <span>Price</span>
        <div className="high_low_filter">
          <input
            type="radio"
            id="highLow"
            name="price"
            value={"highLow"}
            checked={price === "highLow"}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <label htmlFor="highlow">High to Low</label>
        </div>
        <div className="high_low_filter">
          <input
            type="radio"
            id="lowHigh"
            name="price"
            value={"lowHigh"}
            checked={price === "lowHigh"}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <label htmlFor="lowhigh">Low to High</label>
        </div>
      </div>
    </div>
  );
}
export default Filter;
