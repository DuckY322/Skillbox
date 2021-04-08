function arrFiltering(sourceArr, propObj, valueObj) {
  let filteredObjs = [];

  for (let arrItem of sourceArr) {
    if (arrItem[propObj] === valueObj) {
      filteredObjs.push(arrItem);
      break;
    }
  }

  return filteredObjs;
}

export default arrFiltering;
