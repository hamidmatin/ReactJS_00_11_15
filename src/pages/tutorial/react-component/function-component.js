/**
 *
 * function FunctionComponent(){
 *    return JSX
 * }
 *
 * const FunctionComponent = function (){
 *    return JSX
 * }
 *
 * const FunctionComponent = () => {
 *    return JSX
 * }
 *
 */
const style = {
  backgroundColor: "#f1f1f1",
  padding: "20px",
  marginBottom: "20px",
};

const FunctionCompnent1 = () => {
  return (
    <div style={style}>
      <h2>Hello React Function Component</h2>
    </div>
  );
};

const FunctionCompnent2 = (props) => {
  console.log(props);
  return (
    <div style={style}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
      {props.children}
    </div>
  );
};

const FunctionCompnent3 = ({ title, message, children }) => {
  // console.log(props);
  // const { title, message, children } = props;
  return (
    <div style={style}>
      <h2>{title}</h2>
      <p>{message}</p>
      {children}
    </div>
  );
};

export { FunctionCompnent1, FunctionCompnent2, FunctionCompnent3 };
