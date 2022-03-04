import React, { Component } from "react";

export default class ClassComponentLifecycle extends Component {
  constructor(props) {
    console.log('(1. Mounting) constructor');

    super();
    // this.counter = 0;
    this.state = {
      counter: 0,
      isMessageToLong: props.message.length > 100,
    };
    this.increment = this.increment.bind(this);
  }
  increment() {
    // this.counter++;
    // console.log(this.counter);
    this.setState({ counter: this.state.counter + 1 });
  }

  decrement = () => {
    // this.counter--;
    // console.log(this.counter);
    this.setState({ counter: this.state.counter - 1 });
  };

  static getDerivedStateFromProps(props, state) {
    console.log('(2. Mounting) (5. Updating) getDerivedStateFromProps');
    // console.log('props', props);
    // console.log('state', state);

    let counter = state.counter

    // if(counter > 9)
    //   counter = 9
    // else if( counter < 0)
    //   counter = 0

    return {
      ...state,
      counter,
      isMessageToLong: props.message.length > 100
    }
    
    // return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('(6. Updating) shouldComponentUpdate');
    // console.log('nextProps', nextProps);
    // console.log('nextState', nextState);
    // console.log('this.props', this.props);
    // console.log('this.state', this.state);

    // return !nextState.isMessageToLong
    // return nextState.counter < 10 && nextState.counter > -1;

    return true;
  }


  render() {
    console.log('(3. Mounting) (7. Updating) render');

    return (
      <div>
        {this.state.isMessageToLong ? (
          <p style={{ color: 'red', fontWeight:'900', fontStyle:'italic' }}>Message To Long to show</p>
        ) : (
          <h3>{this.props.message}</h3>
        )}
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        {/* <p>Counter : {this.counter}</p> */}
        <p>Counter : {this.state.counter}</p>
      </div>
    );
  }

  
  componentDidMount() {
    // console.log('(4. Mounting) componentDidMount');
    //  this.setState({...this.state, counter: 5})
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // console.log('(8. Updating) getSnapshotBeforeUpdate');
    // console.log('prevProps = ', prevProps)
    // console.log('prevState = ', prevState)
    // console.log('props = ', this.props)
    // console.log('state = ', this.state)
    return 'set value for snapshot or return null'

    // return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`(9. Updating) componentDidUpdate `);
    console.log('prevProps = ', prevProps);
    console.log('prevState = ', prevState);
    console.log('this.props = ', this.props);
    console.log('this.state = ', this.state);
    console.log('snapshot = ', snapshot);
    if(this.state.counter !== prevState.counter)
      this.setState({...this.state, counter: 5})
  }
  componentWillUnmount() {
    // console.log('(10. Unmounting) componentWillUnmount');
  }
}
