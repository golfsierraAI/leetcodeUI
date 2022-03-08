import produce from "immer";

const initState = {
  loading: true,
  success: false,
  data: [],
};

const tableDataReducer = (state = initState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case "LOAD_DATA":
        draft.loading = true;
        draft.fail = false;
        draft.success = false;
        break;
      case "FAIL":
        draft.success = false;
        break;
      case "SUCCESS":
        draft.success = true;
        draft.data = action.payload;
        break;
      default:
        return draft;
    }
    return draft;
  });
export default tableDataReducer;
