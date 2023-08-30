// function maxInArray(numbers){
//      let largest = numbers[0];
//      for(let i = 0; i < numbers.length; i++){
//           const index = i;
//           const element = numbers[index];
//           if(element > largest){
//                largest = element;
//           }
//      }
//      return largest

// }

// const heights = [167, 190, 120, 165, 137];
// const tallest = maxInArray(heights);
// console.log('Tallest person is :', tallest);




















function MinInArray(numbers){

     let lower = numbers[0];
     for(let i = 0; i < numbers.length; i++){
          const index = i;
          const element = numbers[index]
          if(element < lower){
               lower = element;
          }
     }
     return lower;
}

const heights = [120, 102, 135, 176, 184, 111, 245];
const lower = MinInArray(heights);
console.log('Lower persion is :', lower);