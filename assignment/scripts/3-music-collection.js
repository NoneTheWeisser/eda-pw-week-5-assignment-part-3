console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
const myCollection=[];
function addToCollection(collection, title, artist, yearPublished){
  console.log(`In addTocollection`);
  const newRecord = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  }
collection.push(newRecord);
return newRecord;
}
// addToCollection()
// console.log(`I have a new record!`, newRecord);





























// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
