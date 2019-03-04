import React, { Component } from 'react';

class Options extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "order": "ordered"
    }
  }

  onOrderChanged = (event) => {
    this.setState({
      "order": event.currentTarget.value
    });
    this.props.selectionChanged({"order": event.currentTarget.value});
  };

  render() {
    return (
        <form>
          <div className="form-group">
            <label>Order</label>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="order" value="ordered" checked={this.state.order === 'ordered'} onChange={this.onOrderChanged}/>
              <label className="form-check-label">Ordered</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="order" value="random" checked={this.state.order === 'random'} onChange={this.onOrderChanged}/>
              <label className="form-check-label">Random</label>
            </div>
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-primary printButton" onClick={() => window.print()}>Print</button>
          </div>
        </form>
    )
  }
}

export default Options;
