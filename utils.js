const formatList = (arr, type) => {
 
  for(let i = 0; i < arr.length; i++) {
    const elementObj = arr[i];

    if(elementObj.type === 'tag') {
      if(arr[i + 1] === undefined || arr[i + 1].type === 'tag') {
        const linkName = elementObj.attribs.title;
        
        if(linkName) type.push(linkName);
      }
    } else if(elementObj.type === 'tag' && elementObj.attribs.title) {
      let joined;

      const linkName = elementObj.attribs.title;
      if(arr[i - 1].data && !arr[i + 1].data) {
        joined = `${arr[i - 1].data}${linkName}`;
        type.splice((type.length - 1), 1, joined);
      }

      if(arr[i + 1].data && !arr[i - 1].data) {
        joined = `${linkName}${arr[i + 1].data}`;
        type.push(joined);
        i++;
      }

      if(arr[i - 1].data && arr[i + 1].data) {
        joined = `${arr[i - 1].data}${linkName}${arr[i + 1].data}`;
        type.splice((type.length - 1), 1, joined);
        i++;
      }
    }

    if(elementObj.data) {
      type.push(elementObj.data);
    }
  }
};

const imageFormat = (arr, obj) => {
  for(let i = 0; i < arr.length; i++) {
    const image = arr[i].attribs;
    if(image.href.match(/^https/g)) {
      obj.images[i] = image;
    }
  }
};

const formatKeyValue = (keys, values, obj) => {
  for(let i = 0; i < keys.length; i++) {

    const key = keys[i].children[0].data;
    let value = values[i].children;

    if(value[0].data.includes(',')) {
      value = value[0].data.split(',');
    }
    if(value.length > 1) {
      
      obj[key] = [];
      formatList(value, obj[key]);

    } else {
      if(value[0].data) {
        obj[key] = value[0].data;
      }
    }  
  }
};


module.exports = { formatList, imageFormat, formatKeyValue };
