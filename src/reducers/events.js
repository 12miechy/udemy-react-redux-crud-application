import _ from "lodash";
import {
  CREATE_EVENT,
  READ_EVENTS,
  READ_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT
} from "../actions";

const initalState = { value: 0 };

export default (events = {}, action) => {
  console.log("action.type");
  console.log(action.type);

  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data;
      return { ...events, [data.id]: data };

    case READ_EVENTS:
      console.log("readEvents");
      console.log(action.type);
      return _.mapKeys(action.response.data, "id");

    case DELETE_EVENT:
      // TODO:bug ここに遷移できない
      console.log("deleteEvent");
      console.log(action.id);
      delete events[action.id];
      return { ...events };

    default:
      console.log("default");
      return events;
  }
};
