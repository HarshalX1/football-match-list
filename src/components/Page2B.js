import React, { Component } from 'react';

class Page2B extends Component {
  render() {
    const {
      startDT,
      endDT,
      matchLocation,
      tournamentName,
      comments,
      handleInput,
      nextPage,
      prevPage,
    } = this.props;
    return (
      <div className="page2">
        <h2 className="formHeading">Page 2</h2>
        <label>Start Date and Time</label>
        <input
          className="textField"
          type="datetime-local"
          name="startDT"
          value={startDT}
          onChange={handleInput('startDT')}
        />

        <label>End Date and Time</label>
        <input
          className="textField"
          type="datetime-local"
          name="endDT"
          value={endDT}
          onChange={handleInput('endDT')}
        />

        <label>Match Location</label>
        <input
          className="textField"
          type="text"
          name="matchLocation"
          value={matchLocation}
          onChange={handleInput('matchLocation')}
          placeholder="Match Location"
        />

        <label>Tournament Name</label>
        <input
          className="textField"
          type="text"
          name="tournamentName"
          value={tournamentName}
          placeholder="Tournament Name"
          onChange={handleInput('tournamentName')}
        />

        <label>Comments</label>
        <textarea
          className="textFieldCom"
          name="comments"
          value={comments}
          placeholder="Write your comments here"
          onChange={handleInput('comments')}
        />

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

export default Page2B;
