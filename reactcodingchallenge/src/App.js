import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ColumnComponent from "./components/ColumnComponent.jsx";
class App extends Component {
  state = {
    rows: [],
    col: [],
    rowMargin: "23px",
    colMargin: "2px"
  };

  rowChanged = e => {
    let temp = e.currentTarget.value;
    let arr = [];

    for (let i = 0; i < temp; i++) {
      console.log("inside");
      arr.push(i + 1);
    }

    this.setState({ rows: arr });
  };
  colChanged = e => {
    let temp = e.currentTarget.value;

    let arr = [temp];

    let breaks = arr[0].split(",");

    //converting to number
    for (var i = 0; i < breaks.length; i++) {
      breaks[i] = parseInt(breaks[i], 10) || 0;
    }
    this.setState({ col: breaks });
  };
  rowMarginChange = e => {
    const margin = e.currentTarget.value;
    this.setState({ rowMargin: margin });
  };
  colMarginChange = e => {
    const margin = e.currentTarget.value;
    this.setState({ colMargin: margin });
  };
  render() {
    return (
      <form>
        <div class="container form-control">
          <div class="row">
            <div class="col-6">
              <input
                class="form-control"
                id="NoOfRows"
                placeholder="no. of rows"
                onChange={this.rowChanged}
                style={{
                  margin: "2px"
                }}
              />
            </div>
            <div class="col-6">
              <input
                class="form-control"
                id="NoOfCol"
                placeholder="no. of col"
                onChange={this.colChanged}
                style={{
                  margin: "2px"
                }}
              />
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <input
                class="form-control"
                id="SpaceBetweenRows"
                placeholder="SpaceBetweenRows (in px)"
                onChange={this.rowMarginChange}
                style={{
                  margin: "2px"
                }}
              />
            </div>
            <div class="col-6">
              <input
                class="form-control"
                id="SpaceBetweenBoxes"
                placeholder="SpaceBetweenBoxes(in px)"
                onChange={this.colMarginChange}
                style={{
                  margin: "2px"
                }}
              />
            </div>
          </div>
          {this.state.rows.map(a => (
            <div
              class="row"
              style={{
                margin: this.state.rowMargin
              }}
            >
              <ColumnComponent
                col={Array.from(Array(this.state.col[a - 1]).keys()) || [0]}
                colSpacing={this.state.colMargin}
              />
            </div>
          ))}
        </div>
      </form>
    );
  }
}

export default App;
