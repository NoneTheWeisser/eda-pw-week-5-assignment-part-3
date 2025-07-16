console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
const myCollection=[];
function addToCollection(collection, title, artist, yearPublished){
  console.log(`I bought a new record!`);
  const newRecord = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  }
collection.push(newRecord);
console.log(`Adding in ${newRecord.title} by ${newRecord.artist}`);
return newRecord;
}

addToCollection(myCollection, 'Rumors', 'Fleetwood Mac', '1977');
addToCollection(myCollection, 'Mirage', 'Fleetwood Mac', '1982');
addToCollection(myCollection, 'Honky Chateau', 'Elton John', '1972');
addToCollection(myCollection, 'Delta', 'Mumford & Sons', '2018');
addToCollection(myCollection, 'OK Computer', 'Radiohead', '1997');
addToCollection(myCollection, 'In Rainbows', 'Radiohead', '2007');

console.log('Full Collection:', myCollection);


function showCollection(collection){
  // console.log(`Show collection:`, collection);
  for (let album of collection){
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
  }

}

showCollection(myCollection);


function findByArtist (collection, artist){
   const matchArtist=[];
   
}














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
