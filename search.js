const lyrics = 'Tmi Bondu Kala Pakhi Ami jeno ki. Bosonto kale Tomay Vulte Parini';

const searchString = 'pakhi'

// const doesExsist = lyrics.includes('Pakhi')
const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLowerCase = searchString.toLowerCase();

const doesExsist = lyricsLowerCase.includes(searchStringLowerCase)
// const doesExsist = lyrics.toLowerCase().includes(searchString.toLowerCase());


// console.log(doesExsist);

// ---------------------------------------------------

//indexOF()

// console.log(lyrics.indexOf('kale'));

if(lyrics.indexOf('kale') !== -1){
     // console.log('Found this Number');
}
else{
     // console.log('Cannot this Number');
}


// ------------------------------------------------

//startWith

// console.log(lyrics.startsWith("Tmi"));