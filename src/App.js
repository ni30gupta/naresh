import React from "react";

function App() {
  const [product, setProduct] = React.useState({});
  const [sample, setSample] = React.useState({
    name: "",
    price: 0,
    shippedTo: "",
    stock: false,
  });

  function changeName(e) {
    setSample({ ...sample, name: e.target.value });
  }
  function changePrice(e) {
    setSample({ ...sample, price: e.target.value });
  }
  function changeCity(e) {
    setSample({ ...sample, shippedTo: e.target.value });
  }
  function changeStock(e) {
    setSample({ ...sample, stock: e.target.value });
  }

  function Register() {
    setProduct(sample);
  }
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-4">
          <h3>Register Products</h3>
          <dl>
            <dt className="pt-2">Name</dt>
            <dt>
              <input
                onChange={changeName}
                className="form-control"
                type="text"
              />
            </dt>
            <dt className="pt-2">Price</dt>
            <dt>
              <input
                onChange={changePrice}
                className="form-control"
                type="number"
              />
            </dt>
            <dt className="pt-2">Shipped To</dt>
            <dt>
              <select onChange={changeCity} className="form-select">
                <option>Delhi</option>
                <option>Goa</option>
              </select>
            </dt>
            <dt className="pt-2">Stock</dt>
            <dd className="form-switch">
              <input
                onChange={changeStock}
                className="pt-2"
                type="checkbox"
                className="form-check-input"
              />
              Available
            </dd>
          </dl>
          <button onClick={Register} className="btn btn-success w-100">
            Register
          </button>
        </div>
        <div className="col-5">
          <h2>Product Details</h2>
          <dl>
            <dt>Name</dt>
            <dd>{product.name}</dd>
            <dt>Price</dt>
            <dd>{product.price}</dd>
            <dt>Shipped to </dt>
            <dd>{product.shippedTo}</dd>
            <dt>Stock</dt>
            <dd>{product.stock ? "Available" : "Not Available"}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default App;
