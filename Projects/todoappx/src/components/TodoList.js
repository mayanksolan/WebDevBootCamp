import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewTodo } from "../actions";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      todoText: ""
    };
  }

  todoListRender() {
    return this.props.selectedBucket === null ||
      this.props.selectedBucket === "-1" ||
      this.props.selectedBucket === "0" ? (
      <div></div>
    ) : (
      this.props.bucket
        .filter(
          bucketItem => bucketItem.num.toString() === this.props.selectedBucket
        )[0]
        .todoList.map(item => (
          <div className="todo_item_style" key={item.num}>
            <span>
              <input type="checkbox"></input>
            </span>
            {item.item}
          </div>
        ))
    );
  }
  onChangeHandler = e => {
    //console.log(e.target.value);
    this.setState({
      todoText: e.target.value
    });
  };

  onFormSubmit = e => {
    //console.log(this.state.todoText);
    e.preventDefault();
    // todo make sure we call callback from parent component
    this.props.addNewTodo(this.state.todoText);
  };

  render() {
    //console.log(this.props);
    return (
      <div>
        <div className="todo_style">{this.todoListRender()}</div>
        <form onSubmit={this.onFormSubmit} id="add_text_style">
          <input
            type="text"
            className="newtodo_style"
            value={this.state.todoText}
            placeholder="Add a new Todo"
            onChange={this.onChangeHandler}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state);
  return {
    bucket: state.bucket.slice(2),
    selectedBucket: state.selectedBucket
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewTodo: todoText => {
      dispatch(addNewTodo(todoText));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
