function convert(arr) {
  let readyArr = [];

  for (let item of arr) {
    if (typeof item === "object") {
      if (item.value && item.label) {
        readyArr.push(item);
      }
    } else {
      readyArr.push({ value: item, label: item });
    }
  }

  return readyArr;
}

function createSelect(arrOpt, valueOpt) {
  let readyArr = convert(arrOpt);
  let select = document.createElement(`select`);
  let body = document.body;

  for (let obj of readyArr) {
    let option = document.createElement(`option`);
    let entries = Object.entries(obj);
    for (let [key, value] of entries) {
      if (key === `value`) {
        option.value = value;
        continue;
      }
      if (key === `label`) {
        option.textContent = value;
        continue;
      }
    }
    if (option.value === valueOpt) {
      option.selected = true;
    }
    select.append(option);
  }

  body.append(select);

  return select;
}

console.log(
  createSelect(
    [
      { value: `Москва`, label: `Москва` },
      { value: `Санкт-Петергбург`, label: `Санкт-Петергбург` },
      { value: `Ростов`, label: `Ростов` },
      { value: `Новосибирск`, label: `Новосибирск` },
      { value: `Иркутск`, label: `Иркутск` },
      { value: `Казань`, label: `Казань` },
    ],
    `Новосибирск`
  )
);
