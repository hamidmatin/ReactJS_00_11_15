import React from "react";
import Helmet from "react-helmet";

/******
 * Modules
 *    import defaultVariable, {variable,...} from 'module'
 *
 *    path
 *      1 - mudule name => node_module
 *      2 - current folder => ./mudule-file-name (.js)
 *      3 - current folder => ./folder/.../mudule-file-name (.js)
 *      4 - one levele up => ../folder/../mudule-file-name (.js)
 */

import sessionNumber, {
  showTeacherInfo,
  course,
} from "../../react-module/my-module";

// rename default export
import currentSession from "../../react-module/my-module";
// rename normal export
import { showTeacherInfo as teacherInfo } from "../../react-module/my-module";

import { default as sn } from "../../react-module/my-module";
export const HomeIndex = () => {
  return (
    <div>
      <Helmet >
        <title>React Course in MFT</title>
        <meta name="description" content="sklhs gslg s g" />
      </Helmet>
      <h1>{course.name}</h1>
      <h2>Teacher : {showTeacherInfo()}</h2>
      <p>
        Location: {course.location}, Duration: {course.duration}, Start Date :{" "}
        {course.startDate}
      </p>
      <p>Current Session : {sessionNumber}</p>
      <hr />
      <h2>Teacher : {teacherInfo()}</h2>
      <p>Current Session : {currentSession}</p>
      <hr />
      <p>Current Session : {sn}</p>
    </div>
  );
};
