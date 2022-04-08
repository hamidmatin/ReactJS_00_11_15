import React from "react";
import Helmet from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";
import { BasePage } from '../../components/base-page';

import "./tutorials.css";

export const TutorialsIndex = () => {
  return (
    <BasePage title={'Tutorials'}>
      
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
    </BasePage>
  );
};
