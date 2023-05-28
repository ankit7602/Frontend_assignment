export function calculateMean(numbers,property) {
    var sum = 0;
    var count = numbers.length;
    for (var i = 0; i < count; i++) {
      sum += parseFloat(numbers[i][property]);
    }
    console.log(sum,"hih")
    return (sum / count).toFixed(3);
  }
  
  export function calculateMedian(array,property) {
    let numbers = array.map((item)=> item[property])
    var sortedNumbers = numbers.slice().sort(function(a, b) {
      return a - b;
    });
    var count = sortedNumbers.length;
    var middle = Math.floor(count / 2);
    if (count % 2 === 0) {
      return ((sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2).toFixed(3);
    } else {
      return (sortedNumbers[middle]).toFixed(3);
    }
  }
  
//   export function calculateMode(array,property) {
//     let numbers =  array.map((item)=> item[property])
//     var modeMap = {};
//     var maxCount = 0;
//     var modes = [];
  
//     for (var i = 0; i < numbers.length; i++) {
//       var number = numbers[i];
//       modeMap[number] = (modeMap[number] || 0) + 1;
  
//       if (modeMap[number] > maxCount) {
//         maxCount = modeMap[number];
//       }
//     }
  
//     for (var number in modeMap) {
//       if (modeMap.hasOwnProperty(number)) {
//         if (modeMap[number] === maxCount) {
//           modes.push(parseFloat(number));
//         }
//       }
//     }
  
//     return modes;
//   }
 export const calculateMode = (array,property) => {
     let arr =  array.map((item)=> item[property])
    const mode = {};
    let max = 0, count = 0;
  
    for(let i = 0; i < arr.length; i++) {
      const item = arr[i];
      
      if(mode[item]) {
        mode[item]++;
      } else {
        mode[item] = 1;
      }
      
      if(count < mode[item]) {
        max = item;
        count = mode[item];
      }
    }
     
    return max.toFixed(3);
  };
  