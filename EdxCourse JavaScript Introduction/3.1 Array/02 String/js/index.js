

//javascript strings are similar to array:

var s = 'pippo';
console.log('first character of ' + s + ' : ' +s[0])
console.log(s +' is long: ' +  s.length)

//but you cannot add elements to strings using a non-existent index, you cannot
//use the push/pop methods for adding/removing  characters at the end of the string
s[s.length] = 'U';  //no error but it' not working
console.log(s);
// Strings are "read only" when using brackets to access individual characters!


function start(){
    let a = ['a','b','c'];
    a.forEach(function(value, index, array){ //1:current element, 2:element's index, 3:array itself
     document.body.innerHTML += value + ' is at index: ' + index + ' from an array of '+ array.length +'<br>';
    });  

    //otherwise
    for (let i=0; i <a.length; i++){
        document.body.innerHTML += a[i] + '<BR>'
    };

    addImages();

}

let myPicturesArray = [
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "http://placehold.it/600/92c952",
        "thumbnailUrl": "http://placehold.it/150/92c952"
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "http://placehold.it/600/771796",
        "thumbnailUrl": "http://placehold.it/150/771796"
    },
    {
        "albumId": 2,
        "id": 51,
        "title": "non sunt voluptatem placeat consequuntur rem incidunt",
        "url": "http://placehold.it/600/8e973b",
        "thumbnailUrl": "http://placehold.it/150/8e973b"
    },
    {
        "albumId": 2,
        "id": 52,
        "title": "eveniet pariatur quia nobis reiciendis laboriosam ea",
        "url": "http://placehold.it/600/121fa4",
        "thumbnailUrl": "http://placehold.it/150/121fa4"
    },
    {
        "albumId": 3,
        "id": 127,
        "title": "magnam quia sed aspernatur",
        "url": "http://placehold.it/600/74456b",
        "thumbnailUrl": "http://placehold.it/150/74456b"
    },
    {
        "albumId": 3,
        "id": 128,
        "title": "est facere ut nam repellat numquam quia quia eos",
        "url": "http://placehold.it/600/b0931d",
        "thumbnailUrl": "http://placehold.it/150/b0931d"
    }
];

//let's create the image
function addImages(){
    var p = document.querySelector('#images');
    p.innerHTML += "create directly html for images <br>"
    myPicturesArray.forEach(function(i){
        p.innerHTML += "<img src='"+ i.thumbnailUrl +"'>"
    });    

    myPicturesArray.forEach(function(i){
        let image = document.createElement("img");
        image.src = i.thumbnailUrl;
        image.alt = i.title;
        document.body.append(image);
    });    

}