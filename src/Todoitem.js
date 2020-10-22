import React, { Component } from "react";

export default class todoitem extends Component {
  getStyle = () => {
    return {
      background: "grey",
      borderBottom: "1px black solid",
      padding: "10px",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    const btnstyle = {
      float: "right",
      borderRadius: "50%",
      color: "white",
      cursor: "pointer",
      background: "red",
      padding: "5px 9px",
    };

    const { item, id } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          {" "}
          <input
            type="checkbox"
            onChange={this.props.complete.bind(this, id)}
          />
          {item}
          <button style={btnstyle} onClick={this.props.delete.bind(this, id)}>
            x
          </button>
        </p>
      </div>
    );
  }
}
