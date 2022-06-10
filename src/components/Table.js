import React, { Component } from 'react';

class Table extends Component {
  componentDidMount() {
    const { tableData } = this.props;
    let html = tableData
      .map((item) => {
        return `<tr>${item
          .map((data) => {
            return `<td><div style="overflow-y: auto; height: 100px; width:100%; font-size: 1.5rem;">${data}</div></td>`;
          })
          .join('')}</tr>`;
      })
      .join('');

    document.querySelector('tbody').innerHTML = html;
  }
  render() {
    return (
      <div className="tableDiv">
        <table className="dataTable">
          <thead>
            <tr>
              <th>Team 1</th>
              <th>Team 2</th>
              <th>Match Type</th>
              <th>Tournament Name</th>
              <th>Start Date & Time</th>
              <th>End Date & Time</th>
              <th>Location</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>

        <button
          className="primaryBtn"
          onClick={(e) => {
            e.preventDefault();
            this.props.newResponse();
          }}
        >
          Fill Another Response
        </button>
      </div>
    );
  }
}

export default Table;
