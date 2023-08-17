import React from "react";
import axios from "axios";
import "./App.scss";

import AddCar from "./components/AddCar";
import CarTable from "./components/CarTable";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api/cars")
      .then((response) => {
        this.setState({
          cars: response.data.data,
        });
      })
      .catch((e) => console.log("Error : ", e));
  }

  handleAddTodo = (value) => {
    axios
      .post("/api/todos", { text: value })
      .then(() => {
        this.setState({
          todos: [...this.state.todos, { text: value }],
        });
      })
      .catch((e) => console.log("Error : ", e));
  };

  handleAddCar = (value) => {
    axios
      .post("/api/cars", value)
      .then(() => {
        this.setState({
          todos: [...this.state.todos, { text: value }],
        });
      })
      .catch((e) => console.log("Error : ", e));
  };

  render() {
    return (
      <div className="App container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-8 offset-md-2">
              <h1>Cars</h1>
              <div className="todo-app">
                <CarTable cars={this.cars} />
                <AddCar handleAddCar={this.handleAddCar} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
