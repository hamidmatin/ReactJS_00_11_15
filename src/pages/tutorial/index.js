import React from "react";
import Helmet from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";

import "./tutorials.css";

export const TutorialsIndex = () => {
  return (
    <div>
      <Helmet>
        <title>React Course in MFT - Tutorials</title>
        <meta name='description' content='sklhs gslg s g' />
      </Helmet>
      <h2>Tutorials</h2>
      <div className='tutorials'>
        <aside>
          <nav>
            <ul>
              <li>
                <NavLink to='components'>React Components</NavLink>
              </li>
              <li>
                <NavLink to='state-cc'>State In Class Compnents</NavLink>
              </li>
              <li>
                <NavLink to='state-fc'>State In Function Components</NavLink>
              </li>
            </ul>
          </nav>
        </aside>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
