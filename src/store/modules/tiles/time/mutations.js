import types from "./../../../types";

const helpers = {
  timeFormat(T) {
    return (parseInt(T, 10) >= 10 ? "" : "0") + T;
  },
  timeZone(T) {
    return T.split(" ")[1];
  }
};

const mutations = {
  [types.time.updateDateTime]: state => {
    let now = new Date();
    state.date =
      now.getFullYear() -
      1970 +
      ":" +
      helpers.timeFormat(now.getMonth() + 1) +
      ":" +
      helpers.timeFormat(now.getDate());
    state.time =
      helpers.timeFormat(now.getHours()) +
      ":" +
      helpers.timeFormat(now.getMinutes()) +
      ":" +
      helpers.timeFormat(now.getSeconds());
    state.timezone = helpers.timeZone(now.toTimeString());
  }
};
export default mutations;
