import "./App.css";
import { Layout } from "./components/layout";
import { HomeIndex } from './pages/home'
import { ReactComponentIndex } from "./pages/tutorial/react-component";
import StateInClassComponent from "./pages/tutorial/using-state-cc";
import { StateInFunctionComponent } from "./pages/tutorial/using-state-fc";

function App() {
  // console.log(showTeacherInfo())
  // console.log(FunctionCompnent1())
  return (
    <Layout >
      {/* <HomeIndex /> */}
      {/* <ReactComponentIndex />      */}
      {/* <StateInClassComponent /> */}
      <StateInFunctionComponent />
    </Layout>
  );
}

export default App;
