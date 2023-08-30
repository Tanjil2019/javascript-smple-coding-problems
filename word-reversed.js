function reversedWords(str){
     const words = str.split(' ');
     const result = [];
     for(let i = words.length; i >= 0; i--){
          const element = words[i];
          result.push(element);
     }
     const reversed = result.join(' ');
     return reversed;
}

const myString = 'I am a good boy';
const reversed = reversedWords(myString);
console.log('Words reversed is :', reversed);