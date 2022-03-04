import React, {Component} from "react";
/*
 *    class ComponentName extends React.Component {
 *        render(){
 *            return JSX
 *        }
 *    }
 */
const style = {
  backgroundColor: "#f1f1f1",
  padding: "20px",
  marginBottom: "20px",
};

class ClassComponent1 extends React.Component {
  render() {
    return (
      <div style={style}>
        <h2>Hello React Class Component</h2>
      </div>
    );
  }
}

class ClassComponent2 extends Component {
  render() {
    console.log(this);
    return (
      <div style={style}>
        <h2>{this.props.title}</h2>
        <p>{this.props.message}</p>
        {this.props.children}
      </div>
    );
  }
}


export { ClassComponent1, ClassComponent2 };
