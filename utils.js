const formatList = (arr, type) => {
 
  for(let i = 0; i < arr.length; i++) {
    const elementObj = arr[i];

    if(elementObj.type === 'tag') {
      if(arr[i + 1] === undefined || arr[i + 1].type === 'tag') {
        const linkName = elementObj.attribs.title;
        
        if(linkName) type.push(linkName);
      }
    } else if(elementObj.type === 'tag' && elementObj.attribs.title) {

      const linkName = elementObj.attribs.title;

      if(arr[i - 1].data && arr[i + 1].data) {
        const joined = `${arr[i - 1].data}${linkName}${arr[i + 1].data}`;
        type.splice((type.length - 1), 1, joined);
        i++;
      }
    }

    if(elementObj.data) {
      type.push(elementObj.data);
    }
  }
};

module.exports = { formatList };
