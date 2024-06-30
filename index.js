// ARRAY
const theBeatles= [
    "caroline wanjiru",
    "roy muturi",
    "Ringo Starr",
    "George Harrison",
]; console.log(theBeatles);
// the above example is the basic syntax for arrays as a collective data type.
// individual pieces of data inside an array is called elements or members.
// example the stringin roy muturi in the array theBeatles is an element or a member.
// array index- these are numbers that identify each element called index.
// exmaple the string caroline wanjiru in teh array baove is index 0 and roy muturi is index 1




// Objects 
// objects are similar to arrays but the index identifier is not a number but rather another string.
// an object is a collection data tyoe that holds multiple picies of data under a collected name whose
//  members can be read and updates by using a key instead of an index.
const englishBandByCity = {
    liverpool: "the beatles",
    manchester:"the smiths",
    coventry:"delia and the bbc radiophonic band",
    london:"the spider from mars",
};
console.log(englishBandByCity);
// object key- from the above example, the name liverpool is an object key.
// and the object value of the object key liverpool is the beatles.

// NESTINGOF COLLECTION DATA TYPES.
//  this is having a collection of data inside a collection data type.

const englishMusicByCity = {
    manchester:[
        {
            bandname:"the smiths",
            membersnames:[ "johnny","andy","mike"],
        },
        {
            bandnames:"joy division",
            membersnames:["peter","stephen","bernard","ian"],
        },
    ]
}
const membersnames= Array.elements(englishMusicByCitynode)
const length= membersnames.length;
englishMusicByCity["manchester"][0]["bandname"];
englishMusicByCity["manchester"][0]["membernames"]
console.log(`There were ${englishMusicByCity["manchester"][0]["membernames"]} members in ${englishMusicByCity["manchester"][0]["bandname"]}`);