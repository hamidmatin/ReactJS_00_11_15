import "./App.css";
import { Layout } from "./components/layout";
import { HomeIndex } from './pages/home'
import { ReactComponentIndex } from "./pages/tutorial/react-component";

function App() {
  // console.log(showTeacherInfo())
  // console.log(FunctionCompnent1())
  return (
    <Layout >
      <HomeIndex />
      <ReactComponentIndex />     
    </Layout>
  );
}

export default App;
