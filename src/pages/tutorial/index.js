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
              <li>
                <NavLink to='using-image'>Using Image</NavLink>
              </li>
              <li>
                <NavLink to='using-redux'>Using Redux</NavLink>
              </li>
              <li>
                <NavLink to='using-context'>Using Context</NavLink>
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
