console.log('hellooooo');

const userPictures = [
    `https://images.unsplash.com/photo-1532386236358-a33d8a9434e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bf078475951d45a6103cf1cc0e05ae4e&auto=format&fit=crop&w=1578&q=80`,
    `https://images.unsplash.com/photo-1520811607976-6d7812b0ecac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8baaaa9063852a027216d53f04861841&auto=format&fit=crop&w=1650&q=80`,
    `https://images.unsplash.com/photo-1520811607976-6d7812b0ecac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8baaaa9063852a027216d53f04861841&auto=format&fit=crop&w=1650&q=80`,
    `https://images.unsplash.com/photo-1520811607976-6d7812b0ecac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8baaaa9063852a027216d53f04861841&auto=format&fit=crop&w=1650&q=80`,
    `https://images.unsplash.com/photo-1520811607976-6d7812b0ecac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8baaaa9063852a027216d53f04861841&auto=format&fit=crop&w=1650&q=80`,
    `https://images.unsplash.com/photo-1520811607976-6d7812b0ecac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8baaaa9063852a027216d53f04861841&auto=format&fit=crop&w=1650&q=80`,
    `https://images.unsplash.com/photo-1520811607976-6d7812b0ecac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8baaaa9063852a027216d53f04861841&auto=format&fit=crop&w=1650&q=80`,
    `https://images.unsplash.com/photo-1520811607976-6d7812b0ecac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8baaaa9063852a027216d53f04861841&auto=format&fit=crop&w=1650&q=80`,
    `https://images.unsplash.com/photo-1520811607976-6d7812b0ecac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8baaaa9063852a027216d53f04861841&auto=format&fit=crop&w=1650&q=80`,
    `https://images.unsplash.com/photo-1520811607976-6d7812b0ecac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8baaaa9063852a027216d53f04861841&auto=format&fit=crop&w=1650&q=80`,
    `https://images.unsplash.com/photo-1520811607976-6d7812b0ecac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8baaaa9063852a027216d53f04861841&auto=format&fit=crop&w=1650&q=80`,
    `https://images.unsplash.com/photo-1520811607976-6d7812b0ecac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8baaaa9063852a027216d53f04861841&auto=format&fit=crop&w=1650&q=80`,
    `https://images.unsplash.com/photo-1520811607976-6d7812b0ecac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8baaaa9063852a027216d53f04861841&auto=format&fit=crop&w=1650&q=80`,
    `https://images.unsplash.com/photo-1520811607976-6d7812b0ecac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8baaaa9063852a027216d53f04861841&auto=format&fit=crop&w=1650&q=80`,
    `https://images.unsplash.com/photo-1520811607976-6d7812b0ecac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8baaaa9063852a027216d53f04861841&auto=format&fit=crop&w=1650&q=80`,
    `https://images.unsplash.com/photo-1523814054436-e89d40de5d40?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=618dc5d751654b8681465ed042dd282d&auto=format&fit=crop&w=2092&q=80`
]

// addEventListener

// populate thumbnails inside divs made from functions below.
function makeTheThumbnails(arr){
    const target = document.querySelector('[data-container]')
arr.forEach(function(element) {
    target.appendChild(createThumbnail(element));

});
}

//Make thumbnails for users bassed off array passed in
makeTheThumbnails(userPictures);

//function that generates img element
function createImage(imageURL){
    const theImage = document.createElement('img');
    theImage.setAttribute('src', imageURL);


    //event listener for generated images to allow user to select one
    //after selection the image is added to bottom area in a 'full size fashion'
    theImage.addEventListener('click', (event) =>{
        const bigPicture = document.querySelector('[data-output]');
        bigPicture.setAttribute('src',event.target.src);
    })


    return theImage;
}

//function that generates thumbnail div
function createThumbnail(url){
    const theContainer = document.createElement('div');
    theContainer.setAttribute('class', 'thumbnail-item');
    theContainer.appendChild(createImage(url));
    return theContainer;
}

// Make Large preview area bellow bassed off of event listener on click

//add event listener for click of a image div. Console log the url to ensure it works.

// const targetToBlowUp = document.querySelector('thumbnail-item');
// targetToBlowUp.addEventListener('click', () => console.log('Yee it work'), false);
