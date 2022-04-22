import React, { useState } from "react";
import { BasePage } from '../../components/base-page';
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

import { withLoading } from '../../HOC/with-loading'

export const HomeIndex = () => {
  const BasePageWithLoading = withLoading(BasePage)

  const [isLoading, setIsLoading] = useState(true)
  

  setTimeout(() => {
    setIsLoading(false)
  }, 500);
  return (
    <BasePageWithLoading isLoading={isLoading} title={'Home'} description='React Case Study for MFT'>
      
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
      <p>
        Current Session : {sn}
      </p>
      
    </BasePageWithLoading>
  );
};
