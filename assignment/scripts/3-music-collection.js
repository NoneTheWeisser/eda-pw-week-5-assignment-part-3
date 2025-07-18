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
addToCollection(myCollection, 'Honky Chateau', 'Elton John', '1977');
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
   for (let album of collection) {
    if (album.artist === artist){
      matchArtist.push(album)
    } 
  }
  return matchArtist;
}

console.log('Albums by Radiohead:', findByArtist(myCollection, 'Radiohead'));
console.log('Albums by Mumford & Sons:', findByArtist(myCollection, 'Mumford & Sons'));
console.log('Albums by Elton John:', findByArtist(myCollection, 'Elton John'));
console.log('Albums by Fleetwood Mac:', findByArtist(myCollection, 'Fleetwood Mac'));

console.log('Albums by John Mayer:', findByArtist(myCollection, 'John Mayer'));
console.log('Albums by Dave Matthews Band:', findByArtist(myCollection, 'Dave Matthews Band'));


function search (collection, searchCriteria){
  console.log(`Searching for matching artists or years`)
  if (!searchCriteria || !searchCriteria.artist || !searchCriteria.year){
    return collection;
  }
  const newCollection = [];

  for (const album of collection){
    if (album.artist === searchCriteria.artist &&
    album.yearPublished === searchCriteria.year){
    newCollection.push(album);
  }
}
console.log('Matching albums:', newCollection);
return newCollection;
}

console.log(search(myCollection, { artist: 'Radiohead', year: '2007' }));
console.log(search(myCollection, { artist: 'Radiohead' }));
console.log(search(myCollection, { artist: 'Dave Matthews Band', year: '2015' }));
console.log(search(myCollection, { year: '1977' }));






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
