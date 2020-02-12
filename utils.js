const formatList = (arr, type) => {
  console.log(arr);
  for(let i = 0; i < arr.length; i++) {
    const elementObj = arr[i];

    if(elementObj.name === 'a') {
      let joined = elementObj.attribs.title;
      const linkName = elementObj.attribs.title;

      if(elementObj.prev && elementObj.next) {

        if(elementObj.prev.type === 'text' && elementObj.next.type === 'text') {

          joined = `${elementObj.prev.data}${linkName}${elementObj.next.data}`;
          type.splice((type.length - 1), 1, joined);
          i++;
        }

        if(elementObj.next.type === 'text' && elementObj.next.type === 'tag') {
    
          joined = `${linkName}${elementObj.next.data}`;
          type.push(joined);
          i++;
        }

        if(elementObj.prev.type === 'text' && elementObj.next.type === 'tag') {
    
          joined = `${elementObj.prev.data}${linkName}`;
          type.splice((type.length - 1), 1, joined);
        }

        if(elementObj.prev.type === 'tag' && elementObj.next.type === 'tag') {
          type.push(joined);
        }
        
      } else {
        type.push(joined);
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
      obj[key] = [];
      
      for(let i = 0; i < value.length; i++) {
        const el = value[i];
        el.replace(/,/g, '');
        obj[key].push(el);
      }
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
