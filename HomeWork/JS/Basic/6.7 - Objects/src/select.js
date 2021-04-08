function arrConverting(sourceArr) {
  let readyArr = [];

  for (const item of sourceArr) {
    if (typeof item === "object") {
      if (item.value && item.label) {
        readyArr.push({ value: item.value, label: item.label });
      } else if (!item.value && item.label) {
        readyArr.push({ value: item.label, label: item.label });
      } else if (item.value && !item.label) {
        readyArr.push({ value: item.value, label: item.value });
      } else {
        const entries = Object.entries(item);
        for (const [key, value] of entries) {
          readyArr.push({ value: value, label: value });
        }
      }
    } else {
      readyArr.push({ value: item, label: item });
    }
  }

  return readyArr;
}

function creatingSelect(optionsArr, selectedOption) {
  const readyArr = arrConverting(optionsArr);
  const select = document.createElement(`select`);
  const body = document.body;

  for (const item of readyArr) {
    const option = document.createElement(`option`);
    
    option.value = item.value;
    option.textContent = item.label;

    if (option.value === selectedOption) {
      option.selected = true;
    }

    select.append(option);
  }

  body.append(select);

  return select;
}