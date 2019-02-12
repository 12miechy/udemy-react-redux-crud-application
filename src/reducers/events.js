import _ from "lodash";
import { READ_EVENTS } from "../actions";

const initalState = { value: 0 };

export default (state = initalState, action) => {
  switch (action.type) {
    case READ_EVENTS:
      //  lodashなし
      //  console.log(action.response.data);
      // [
      //    {id: 1, title: "Let's have an event 1!", body: "This is the body for event 1."}
      //    {id: 2, title: "Let's have an event 2!", body: "This is the body for event 2."}
      // ]
      //
      //  lodashあり
      //  console.log(_.mapKeys(action.response.data, "id"));
      // {
      //   1: {id: 1, title: "Let's have an event 1!", body: "This is the body for event 1."}
      //   2: {id: 2, title: "Let's have an event 2!", body: "This is the body for event 2."}
      // }
      return _.mapKeys(action.response.data, "id");
    default:
      return state;
  }
};
