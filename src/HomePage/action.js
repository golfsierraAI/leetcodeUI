export const tableDataLoadStart = () => ({
  type: "LOAD_DATA",
});

export const tableDataLoadSuccess = (payload) => ({
  type: "SUCCESS",
  payload,
});

export const tableDataLoadFail = () => ({
  type: "FAIL",
});
