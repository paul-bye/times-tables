import React, { Component } from 'react';

class Checkbox extends Component {
  render() {
    return (
        <li>
          <input onChange={this.props.handleCheckChildElement} type="checkbox" checked={this.props.isChecked} value={this.props.value} /> {this.props.value}
        </li>
    )
  }
}

class CheckboxList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numbers: [...Array(11).keys()].map((n) => {
        return {
          key: n.toString(),
          value: n + 2,
          isChecked: false
        }
      }),
      allChecked: false
    }
  }

  handleCheckChildElement = (event) => {
    let numbers = this.state.numbers;
    numbers.forEach(number => {
      if (number.value === Number(event.target.value)) {
        number.isChecked = event.target.checked
      }
    });
    this.setState({
      numbers: numbers,
      allChecked: numbers.filter(n => !n.isChecked).length === 0
    });
    this.props.selectionChanged(numbers.filter(n => n.isChecked).map(n => n.value));
  };

  handleCheckAll = () => {
    let numbers = this.state.numbers;
    let select = !this.state.allChecked;

    numbers.forEach(number => {
      number.isChecked = select;
    });
    this.setState({
      numbers: numbers,
      allChecked: select
    });
    this.props.selectionChanged(numbers.filter(n => n.isChecked).map(n => n.value));
  };

  render() {
    return (
        <ul className="list-unstyled mt-3 mb-4">
          <Checkbox handleCheckChildElement={this.handleCheckAll} isChecked={this.state.allChecked} value={'All'} key='all' />
          {this.state.numbers.map((number) => <Checkbox handleCheckChildElement={this.handleCheckChildElement} {...number} />)}
        </ul>
    );
  }
}

export default CheckboxList;
