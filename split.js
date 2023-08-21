const lyrics = 'Tmi Bondu Kala Pakhi Ami jeno ki. Bosonto kale Tomay Vulte Parini';

const parts = lyrics.split(' ');
const sentence = lyrics.split('.')
const chars = lyrics.split('')
// console.log(chars);

const lines = [
     'Tmi Bondu Kala Pakhi Ami jeno ki',
     ' Bosonto kale Tomay Vulte Parini'
   ];

   const newSong = lines.join(' :')
   console.log(newSong);