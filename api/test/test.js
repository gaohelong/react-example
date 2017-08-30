/* import data */
const userList = require('./userList');
const userDetail = require('./userDetail');

/* data */
let data = {
    // userList: userList,
    // userDetail: userDetail
    userList,       // 简写等于userList: userList.
    userDetail
};

module.exports = () => {
    return data;
};
