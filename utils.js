const formatList = (arr, type) => {
  for (let i = 0; i < arr.length; i++) {
    const elementObj = arr[i];

    if(elementObj.data) {
      elementObj.data = elementObj.data.replace(/\(|\)/g, '');
    }

    if(elementObj.data) {
      type.push(elementObj.data);
    }
  }
}

module.exports = { formatList };
