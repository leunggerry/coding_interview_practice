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
};




// Do not write or modify code below this line.
module.exports = _;
