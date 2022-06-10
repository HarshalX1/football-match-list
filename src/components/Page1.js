import React, { Component } from 'react';

class Page1 extends Component {
  render() {
    const { matchType, handleInput, nextPage, prevPage } = this.props;

    return (
      <div>
        <h2 className="formHeading">Page 1</h2>
        <div className="fieldsDiv">
          <label>Match Type</label>
          <select
            name="matchType"
            className="selectField"
            onChange={handleInput('matchType')}
            value={matchType}
          >
            <option className="optionText">Choose Your Match Type</option>
            <option className="optionText" value="Friendly">
              Friendly
            </option>
            <option className="optionText" value="Tournament">
              Tournament
            </option>
          </select>
        </div>
        <div className="btnsDiv">
          <button
            className="secondaryBtn"
            onClick={(e) => {
              e.preventDefault();
              prevPage();
            }}
          >
            Back
          </button>
          <button
            className="primaryBtn"
            onClick={(e) => {
              e.preventDefault();
              nextPage();
            }}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default Page1;
