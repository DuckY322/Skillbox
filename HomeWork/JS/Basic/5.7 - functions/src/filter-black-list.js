function filter(srcArr, filterFrom) {
  let filteredOut = [];

  for (let item of srcArr) {
    if (!filterFrom.includes(item)) {
      filteredOut.push(item);
    }
  }

  return filteredOut;
}
export default filter;
