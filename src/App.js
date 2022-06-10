import './App.css';
import React, { Component } from 'react';
import PageNav from './components/PageNav';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      matchType: '',
      startDT: '',
      endDT: '',
      matchLocation: '',
      tournamentName: '',
      comments: '',
      team1Name: '',
      team2Name: '',
      team1HA: '',
      team2HA: '',
      tableData: [],
    };

    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.submit = this.submit.bind(this);
    this.newResponse = this.newResponse.bind(this);
  }

  submit() {
    const {
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
    } = this.state;

    let data = [
      `${team1Name} (${team1HA})`,
      `${team2Name} (${team2HA})`,
      matchType,
      tournamentName,
      startDT,
      endDT,
      matchLocation,
      comments,
    ];

    this.state.tableData.push(data);
    console.log(data);
    console.log(this.state.tableData);

    this.setState({
      page: this.state.page + 1,
      matchType: '',
      startDT: '',
      endDT: '',
      matchLocation: '',
      tournamentName: '',
      comments: '',
      team1Name: '',
      team2Name: '',
      team1HA: '',
      team2HA: '',
    });
  }

  newResponse() {
    this.setState({ page: 1 });
  }

  nextPage(e) {
    this.setState(() => {
      if (this.state.page === 3) {
        return;
      } else {
        return { page: this.state.page + 1 };
      }
    });
  }

  prevPage(e) {
    this.setState(() => {
      if (this.state.page === 1) {
        return;
      } else {
        return { page: this.state.page - 1 };
      }
    });
  }

  handleInput = (inputName) => (e) => {
    this.setState({
      [inputName]: e.target.value,
    });
  };

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
      tableData,
    } = this.state;

    return (
      <div className="app">
        <h1 className="appHeading">Football Match List</h1>

        <div className="formPages">
          <PageNav
            page={page}
            matchType={matchType}
            startDT={startDT}
            endDT={endDT}
            matchLocation={matchLocation}
            tournamentName={tournamentName}
            comments={comments}
            team1HA={team1HA}
            team1Name={team1Name}
            team2HA={team2HA}
            team2Name={team2Name}
            handleInput={this.handleInput}
            tableData={tableData}
            nextPage={this.nextPage}
            prevPage={this.prevPage}
            submit={this.submit}
            newResponse={this.newResponse}
          />
        </div>
      </div>
    );
  }
}

export default App;
