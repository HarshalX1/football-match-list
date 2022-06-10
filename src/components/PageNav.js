import React, { Component } from 'react';
import Page1 from './Page1';
import Page2A from './Page2A';
import Page2B from './Page2B';
import Page3 from './Page3';
import Table from './Table';

class PageNav extends Component {
  render() {
    const {
      page,
      matchLocation,
      matchType,
      team1HA,
      team2HA,
      team1Name,
      team2Name,
      startDT,
      endDT,
      tournamentName,
      comments,
      handleInput,
      nextPage,
      prevPage,
      submit,
      tableData,
      newResponse,
    } = this.props;

    if (page === 1) {
      return (
        <Page1
          matchType={matchType}
          handleInput={handleInput}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      );
    } else if (page === 2 && matchType === 'Friendly') {
      return (
        <Page2A
          startDT={startDT}
          endDT={endDT}
          matchLocation={matchLocation}
          comments={comments}
          handleInput={handleInput}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      );
    } else if (page === 2 && matchType === 'Tournament') {
      return (
        <Page2B
          startDT={startDT}
          endDT={endDT}
          matchLocation={matchLocation}
          tournamentName={tournamentName}
          comments={comments}
          handleInput={handleInput}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      );
    } else if (page === 3) {
      return (
        <Page3
          team1HA={team1HA}
          team1Name={team1Name}
          team2HA={team2HA}
          team2Name={team2Name}
          handleInput={handleInput}
          nextPage={nextPage}
          prevPage={prevPage}
          submit={submit}
        />
      );
    } else if (page === 4) {
      return <Table tableData={tableData} newResponse={newResponse} />;
    } else {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h2 className="formHeading">
            Please go back and select your Match Type
          </h2>
          <button
            className="secondaryBtn"
            onClick={(e) => {
              e.preventDefault();
              prevPage();
            }}
          >
            Back
          </button>
        </div>
      );
    }
  }
}

export default PageNav;
