import React, { Component } from 'react';

class Page3 extends Component {
  render() {
    const {
      team1HA,
      team1Name,
      team2HA,
      team2Name,
      handleInput,
      submit,
      prevPage,
    } = this.props;

    return (
      <div className="page3">
        <h2 className="formHeading">Page 3</h2>
        <div className="teamDiv">
          <label>Team 1 Name</label>
          <input
            className="textField"
            type="text"
            name="team1Name"
            value={team1Name}
            placeholder="Team 1 Name"
            onChange={handleInput('team1Name')}
          />
          <label>Home or Away</label>
          <select
            name="team1HA"
            className="selectField"
            value={team1HA}
            onChange={handleInput('team1HA')}
          >
            <option className="optionText">Choose Home or Away</option>
            <option className="optionText" value="Home">
              Home
            </option>
            <option className="optionText" value="Away">
              Away
            </option>
          </select>
        </div>

        <p className="vs">VS</p>

        <div className="teamDiv">
          <label>Team 2 Name</label>
          <input
            className="textField"
            type="text"
            name="team2Name"
            value={team2Name}
            placeholder="Team 2 Name"
            onChange={handleInput('team2Name')}
          />
          <label>Home or Away</label>
          <select
            name="team2HA"
            className="selectField"
            value={team2HA}
            onChange={handleInput('team2HA')}
          >
            <option className="optionText">Choose Home or Away</option>
            <option className="optionText" value="Home">
              Home
            </option>
            <option className="optionText" value="Away">
              Away
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
              submit();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Page3;
