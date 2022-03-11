import { Layout } from "./components/layout";
import { HomeIndex } from "./pages/home";
import { ReactComponentIndex } from "./pages/tutorial/react-component";
import StateInClassComponent from "./pages/tutorial/using-state-cc";
import { StateInFunctionComponent } from "./pages/tutorial/using-state-fc";
import { UsersIndex } from "./pages/users";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TutorialsIndex } from "./pages/tutorial";
import { NotFoundIndex } from "./pages/404";
import { UserInfoIndex } from "./pages/users/user-info";
function App() {
  // console.log(showTeacherInfo())
  // console.log(FunctionCompnent1())
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<HomeIndex />} />
          <Route path='users' element={<UsersIndex />} />
          {/* 
              path='path/:parameter'
              path='path/:parameter1/:parameter2'
              path='path/:parameter1/path/:parameter2'
          */}
          <Route path='users/:id' element={<UserInfoIndex />} />

          <Route path='tutorials' element={<TutorialsIndex />}>
            <Route path='components' element={<ReactComponentIndex />} />
            <Route path='state-cc' element={<StateInClassComponent />} />
            <Route path='state-fc' element={<StateInFunctionComponent />} />
          </Route>


          <Route path="*" element={<NotFoundIndex />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
