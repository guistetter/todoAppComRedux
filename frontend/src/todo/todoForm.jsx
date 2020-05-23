import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Grid from "../template/grid";

import IconButton from "../template/iconButton";
import { add, changeDescription, search, clear } from "./todoAcions";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  componentWillMount() {
    this.props.search();
  }

  keyHandler(e) {
    const { add, clear, search, description } = this.props;
    if (e.key === "Enter") {
      e.shiftKey ? search() : add(description);
    } else if (e.key === "Escape") {
      clear();
      //this.props.clear();
    }
  }
  render() {
    const { add, search, description } = this.props;
    return (
      <div role="form" className="todoForm">
        <div className="col-xs-12 col-sm-9 col-md-10">
          <input
            id="description"
            className="form-control"
            onChange={this.props.changeDescription}
            onKeyUp={this.keyHandler}
            placeholder="Adicione uma tarefa"
            value={this.props.description}
          ></input>
        </div>
        <div className="col-xs-12 col-sm-3 col-md-2">
          <IconButton
            style="primary"
            icon="plus"
            onClick={() => add(description)}
          ></IconButton>
          <IconButton style="info" icon="search" onClick={search}></IconButton>
          <IconButton
            style="default"
            icon="refresh"
            onClick={this.props.clear}
          ></IconButton>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ description: state.todo.description });

const mapDispacthToProps = dispatch =>
  bindActionCreators({ add, changeDescription, search, clear }, dispatch);

export default connect(mapStateToProps, mapDispacthToProps)(TodoForm);
/*Component Grid <Grid cols="12 9 10">
Com este component nao preciso escrever a linha abaixo:
<div className="col-xs-12 col-sm-9 col-md-10"></div>
*/
