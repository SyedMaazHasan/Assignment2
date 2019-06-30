import React, { Component } from "react";
class ColumnComponent extends Component {
  state = {};
  computed = () => {};
  render() {
    console.log("inside col component=", this.props.col);

    return this.props.col.map(m => (
      <div
        class="col form-control"
        style={{
          margin: this.props.colSpacing
        }}
      >
        Box
      </div>
    ));
  }
}

export default ColumnComponent;
