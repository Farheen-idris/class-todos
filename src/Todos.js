import React, { Component } from "react";
import Todoitem from "./Todoitem";

export default class Todos extends Component {
  render() {
    console.log(this.props.todos);
    return (
      <div>
        <p>
          {this.props.todos.map((todo) => (
            <Todoitem
              todo={todo}
              key={todo.id}
              complete={this.props.complete}
              delete={this.props.delete}
            />
          ))}
        </p>
      </div>
    );
  }
}
