import React from "react";

export default class StateClassComponent_23Assignment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oldData: {
        Name: "",
        Price: 0,
        City: "",
        Stock: false,
      },
      newData: {},
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStockChange = this.handleStockChange.bind(this);
    this.HandleRegisterClick = this.HandleRegisterClick.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      oldData: { ...this.state.oldData, Name: event.target.value },
    });
  }

  handlePriceChange(event) {
    this.setState({
      oldData: { ...this.state.oldData, Price: event.target.value },
    });
  }

  handleCityChange(event) {
    this.setState({
      oldData: { ...this.state.oldData, City: event.target.value },
    });
  }

  handleStockChange(event) {
    this.setState({
      Name: this.state.Name,
      Price: this.state.Price,
      City: this.state.City,
      Stock: event.target.checked,
    });
  }

  //   HandleRegisterClick() {
  //     this.setState({
  //       Name: this.state.Name,
  //       Price: this.state.Price,
  //       City: this.state.City,
  //       Stock: this.state.Stock,
  //     });
  //   }

  HandleRegisterClick() {
    this.setState({
      newData: this.state.oldData,
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <h3>Register Products</h3>

            <dl>
              <dt>Name</dt>
              <dd>
                <input
                  type="text"
                  onKeyUp={this.handleNameChange}
                  className="form-control"
                />
              </dd>
              <dt>Price</dt>
              <dd>
                <input
                  type="text"
                  onKeyUp={this.handlePriceChange}
                  className="form-control"
                />
              </dd>
              <dt>Shipped to </dt>
              <dd>
                <select
                  onChange={this.handleCityChange}
                  className="form-select"
                >
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                </select>
              </dd>
              <dt>Stock</dt>
              <dd className="form-switch">
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={this.handleStockChange}
                />
                Available
              </dd>
            </dl>
            <button
              onClick={this.HandleRegisterClick}
              className="btn btn-primary"
            >
              Register
            </button>
          </div>
          <div className="col-9">
            <h2>Product Details</h2>

            <dl>
              <dt>Name</dt>
              <dd>{this.state.newData.Name}</dd>
              <dt>Price</dt>
              <dd>{this.state.newData.Price}</dd>
              <dt>Shipped to </dt>
              <dd>{this.state.newData.City}</dd>
              <dt>Stock</dt>
              <dd>
                {this.state.newData.Stock ? "Available" : "Not Available"}
              </dd>
            </dl>
          </div>
        </div>
      </div>
    );
  }
}
