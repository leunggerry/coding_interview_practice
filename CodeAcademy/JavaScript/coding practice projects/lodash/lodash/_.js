const _ = {
  // Gerry: my way to implement Clamp function
  /*
  clamp (num, lower, upper)
  {
    if (num < lower)
    {
      return lower;
    }
    else if (num > upper)
    {
      return upper;
    }
    else
    {
    return num;
    }
   }
   */
   // CodeAcademy method: use the math Library
   clamp (num, lower, upper)
   {
     let lowerClampVal = Math.max(num, lower);
     let val = Math.min(lowerClampVal, upper);
     return val;
   },
   inRange (num, start, end)
   {
     let temp = end;
     if (temp === undefined)
     {
       end = start;
       start = 0;
     }
     // if end is greater than start
     else if (start > end)
     {
       temp = start;
       start = end;
       end = temp;
    }

     //check if within range and return result
     if ((num >= start) && (num < end))
     {
       return true
     }
     return false;
   },
   words (string)
   {
     const words = string.split(' ');
     return words;
   },
   pad (string, length)
   {
     // if the target length is smaller than string length
     if (length < string.length)
     {
       return string;
     }

     let spacesToAddFront = Math.floor((length - string.length) / 2);
     let spacesToAddEnd = (length -  (string.length + spacesToAddFront));
     let padString = ' '.repeat(spacesToAddFront) + string + ' '.repeat(spacesToAddEnd);

     return padString;
   },
   has (object, key)
   {
     if (object[key] != undefined)
     {
       return true;
     }
     return false;
   },

   invert (object)
   {
     let invertObj = {};
     console.log(object);
     for (let key in object)
     {
       invertObj[object[key]] = key;
     }
     console.log(invertObj);
     return invertObj;
   },

   findKey (object, predicate)
   {
     for (let key in object)
     {
       let value = object[key];
       let predicateReturnVal = predicate(value);

       if (predicateReturnVal)
       {
         return key;
       }
     }
     return undefined;
  },
  drop (arr, itemsToDrop)
  {
    console.log(arr);
    if (itemsToDrop === undefined)
    {
      itemsToDrop = 1;
    }

    let newArr = arr.slice(itemsToDrop);
    console.log(newArr);
    return newArr;
  },

  dropWhile (arr, predicateFunc)
  {
    let dropNum = arr.findIndex((element, index) => !predicateFunc(element, index, arr));

    console.log(dropNum);
    let dropArr = this.drop(arr, dropNum);

    console.log(dropArr);
    return dropArr;
  },

  chunk (arr, size)
  {
    if (size == undefined)
    {
      size = 1;
    }

    let arrChunks = [];

    for (i = 0; i < arr.length; i += size)
    {
      let arrayChunk = arr.slice(i, i + size);
      console.log(arrayChunk);
      arrChunks.push(arrayChunk)
    }
    return arrChunks;

  }
};




// Do not write or modify code below this line.
module.exports = _;
