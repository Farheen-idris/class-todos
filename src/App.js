import React, { Component } from "react";
import Todos from "./Todos";
import Header from "./Header";
import Input from "./Input";
import { v4 as uuidv4 } from "uuid";
import { Route, BrowserRouter as Routers } from "react-router-dom";
import About from "./About";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: uuidv4(),
          item: "having breakfast",
          completed: false,
        },
        {
          id: uuidv4(),
          item: "having meal",
          completed: true,
        },
        {
          id: uuidv4(),
          item: "going to bed",
          completed: false,
        },
      ],
    };
  }
  complete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  delete = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };
  addtodo = (text) => {
    const newtodo = { id: uuidv4(), item: text, completed: false };
    this.setState({
      todos: [...this.state.todos, newtodo],
    });
  };

  render() {
    return (
      <Routers>
        <div className="container">
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <Input addtodo={this.addtodo} />
                <Todos
                  todos={this.state.todos}
                  complete={this.complete}
                  delete={this.delete}
                />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </Routers>
    );
  }
}
