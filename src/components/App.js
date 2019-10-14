import React, { Component } from 'react';
import CheckboxList from './CheckboxList';
import Options from './Options';
import './App.css';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

class Problem extends Component {
  render() {
    return (
        <div className="problem">{this.props.a} x {this.props.b} = </div>
    )
  }
}

class Config extends Component {

  constructor(props) {
    super(props);
    this.state = {
      aSelection: [],
      bSelection: [],
      order: "ordered"
    }
  }

  setASelection = (selection) => {
    this.setState({aSelection : selection});
    this.props.optionsChanged({
      'aSelection': selection,
      'bSelection': this.state.bSelection,
      'order': this.state.order,
      'excludeDuplicates': this.state.excludeDuplicates
    });
  };

  setBSelection = (selection) => {
    this.setState({bSelection : selection});
    this.props.optionsChanged({
      'aSelection': this.state.aSelection,
      'bSelection': selection,
      'order': this.state.order,
      'excludeDuplicates': this.state.excludeDuplicates
    });
  };

  setOptions = (options) => {
    this.setState({
      'order': options.order,
      'excludeDuplicates': options.excludeDuplicates
    });
    this.props.optionsChanged({
      'aSelection': this.state.aSelection,
      'bSelection': this.state.bSelection,
      'order': options.order,
      'excludeDuplicates': options.excludeDuplicates
    });
  };

  render() {
    return (
        <div className="options card-deck mb-3 text-center">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Left numbers</h4>
            </div>
            <div className="card-body">
              <CheckboxList selectionChanged={this.setASelection}/>
            </div>
          </div>
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Right numbers</h4>
            </div>
            <div className="card-body">
              <CheckboxList selectionChanged={this.setBSelection}/>
            </div>
          </div>
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Options</h4>
            </div>
            <div className="card-body">
             <Options selectionChanged={this.setOptions}/>
            </div>
          </div>
        </div>
    );
  }
}



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      problems: []
    }
  }

  optionsChanged = (options) => {
    console.log(options);
    let problems = [];
    let n = 0;
    options.aSelection.forEach(a => {
      options.bSelection.forEach(b => {
        problems.push({
          'a': a,
          'b': b,
          'n': n++
        });
      })
    });

    if (options.excludeDuplicates) {
      console.log("Excluding");
      problems = problems.reduce((acc, curr) => {
        if (acc.find(el => {
          return (el.a === curr.a && el.b === curr.b) || (el.b === curr.a && el.a === curr.b);
        })) {
          return [...acc];
        } else {
          return [...acc, curr];
        }

      }, []);
    }

    if (options.order === 'random') {
      shuffleArray(problems);
    }

    this.setState({
      'problems': problems
    })
  };


  render() {
    return (
      <div className="App container">
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Times Tables</h1>
          <p className="instructions">Select the numbers you would like to appear on the left side of the problems and those you would like the appear on the right.</p>
          <p className="instructions">Choose if you would like the problems listed in order or random, then click print.</p>
        </div>
        <Config optionsChanged={this.optionsChanged}/>
        <div className="problems">
          {this.state.problems.map((problem) => <Problem a={problem.a} b={problem.b} key={problem.n}/>)}
        </div>
      </div>
    );
  }
}

export default App;
