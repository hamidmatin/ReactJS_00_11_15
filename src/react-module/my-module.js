const teacher = {
    firstName: 'Hamid Reza',
    lastName: 'Izadi Matin',
};

const sessionNumber = 3

const showTeacherInfo = () => {
    return `${teacher.firstName} ${teacher.lastName}`
}
const course = {
    name: 'ReactJS',
    location: 'MFT',
    duration: 40,
    startDate: '1400-11-15'
}

/**
 * 1.
 * export { variable1, variable2, ...}
 * 2.
 * export { variable1}
 * export { variable2}
 * export { variable3}
 * 
 * 3.
 * export default variable
 * 
 * 4.
 * export { variable1, variable2, variable 3 as default...}
 */

// export { showTeacherInfo, course, sessionNumber as default }
export default sessionNumber
// export {showTeacherInfo, course}
export {showTeacherInfo}
export {course}