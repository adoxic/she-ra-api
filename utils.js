const formatList = (arr, type) => {
  for (let i = 0; i < arr.length; i++) {
    const elementObj = arr[i];

    if(elementObj.type === 'tag' && elementObj.attribs.title) {
      linkName = elementObj.attribs.title;
      const joined = `${arr[i - 1].data}${linkName}${arr[i + 1].data}`;
      type.splice((type.length -1), 1, joined);
      i++;
    }

    if(elementObj.data) {
      type.push(elementObj.data);
    }
  }
}

module.exports = { formatList };
