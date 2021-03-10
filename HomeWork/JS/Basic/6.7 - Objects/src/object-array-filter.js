function filter(arr, propObj, valueObj) {
  let filterObj = [];

  for (let obj of arr) {
    let entries = Object.entries(obj);
    for (let [key, value] of entries) {
      if (key === propObj && value === valueObj) {
          filterObj.push(obj);
          break;
      }
    }
  }

  return filterObj;
}

export default filter;
