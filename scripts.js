const dataPosts = [
    {
        id : 1,
        imgSource : "images/food-1.jpg",
        username : "laurasmenu",
        profilePic : "images/pf-1.jpg",
        likes : "46",
        comments : "4",
        shares : "1",
        caption : "Quick and easy salad, perfect for summer",
        comments : [
            {username : "jetchfletcher", comment : "This looks delicious!", likes : "43"},
            {username : "Louisdreams", comment : "I can't wait to try and make this", likes : "12"},
            {username : "YannisAB", comment: "Looks very tasty"},
            {username : "holpwaley", comment: "Looking good", likes : "4"},
        ]
    }, {
        id : 2,
        imgSource : "images/food-2.jpg",
        username : "tastysundays43",
        profilePic : "images/pf-2.jpg",
        likes : "37",
        comments : "6",
        shares : "14",
        caption : "Warming and filling! Recipe link in bio!",
        comments : [
            {username : "gobbles543", comment: "Have you shared the recipe yet?", likes : "14"},
            {username : "chocolat3city", comment: "I made this last night and it went don very well", likes : "20"},
            {username : "moxeyt", comment: "This made me very popular with my friends", likes : "7"},
            {username : "louisemaxxwell", comment: "delicious", likes : "2"},
            {username : "dyerthor", comment: "yum yum yum", likes : "12"},
            {username : "roastpork", comment: "looks like a lot of work", likes : "3"}
        ]
    }, {
        id : 3,
        imgSource : "images/food-3.jpg",
        username : "sam94cooks",
        profilePic : "images/pf-3.jpg",
        likes : "18",
        comments : "2",
        shares : "19",
        caption : "Really happy with how the glaze turned out.",
        comments : [
            {username : "ca12345", comment: "The presentation", likes : "1"},
            {username : "grilling2", comment: "It looks like you've cooked this really well", likes : "3"}
        ]
    }, {
        id : 4,
        imgSource : "images/food-4.jpg",
        username : "c.eve.chef",
        profilePic : "images/pf-4.jpg",
        likes : "81",
        comments : "5",
        shares : "14",
        caption : "French toast with fruits",
        comments : [
            {username : "jertuir", comment: "This looks unhealthy but worth it", likes : "4"},
            {username : "chefamandadiaz", comment: "very nice", likes : "3"},
            {username : "naomikid21", comment: "love it gonna try it", likes : "9"},
            {username : "samgamble", comment: "nice post", likes : "1"},
            {username : "hawk1994", comment: "that looks too sweet for me", likes : "0"},
        ]
    }, {
        id : 5,
        imgSource : "images/food-6.jpg",
        username : "drfoodlove",
        profilePic : "images/pf-5.jpg",
        likes : "49",
        comments : "5",
        shares : "19",
        caption : "Getting some vitamins this morning",
        comments : [
            {username : "samantha432s", comment: "I would eat this", likes : "9"},
            {username : "orlando41", comment: "This looks different", likes : "5"},
            {username : "angelaroma", comment: "fresh", likes : "8"},
            {username : "eric.zedhener", comment: "why so many spoons?", likes : "11"},
            {username : "alexgida1", comment: "yummm", likes : "12"}
        ]
    }, {
        id : 6,
        imgSource : "images/food-7.jpg",
        username : "_tacos_",
        profilePic : "images/pf-6.jpg",
        likes : "92",
        comments : "7",
        shares : "3",
        caption : "Getting some vitamins this morning",
        comments : [
            {username : "v1cky21", comment: "That looks so healthy and tasty", likes : "13"},
            {username : "missevasmith", comment: "What do you usually eat this with?", likes : "12"},
            {username : "jay_ment", comment: "colours", likes : "13"},
            {username : "landivar", comment: "solid job", likes : "4"},
            {username : "ocloperez", comment: "this has made me hungry", likes : "5"},
            {username : "lalasky", comment: "I haven't seen anything like this before, what is it?", likes : "3"},
            {username : "ravecraven", comment: "awesome", likes : "0"}
        ]
    }, {
        id : 7,
        imgSource : "images/food-8.jpg",
        username : "pablocooks",
        profilePic : "images/pf-7.jpg",
        likes : "61",
        comments : "4",
        shares : "2",
        caption : "Just threw a few things together",
        comments : [
            {username : "drgreen", comment: "delicious", likes : "2"},
            {username : "dominique_kyle", comment: "there goes my diet", likes : "10"},
            {username : "mskirm", comment: "woah", likes : "1"},
            {username : "foodcircles", comment: "ok, I could eat this", likes : "2"},
            {username : "fernandoalbert", comment: "tell me this wasn't difficult to make", likes : "3"},
        ]
    }, {
        id : 8,
        imgSource : "images/food-9.jpg",
        username : "umer123",
        profilePic : "images/pf-8.jpg",
        likes : "40",
        comments : "4",
        shares : "11",
        caption : "Healthy breakfast",
        comments : [
            {username : "dollyra", comment: "not impressed", likes : "1"},
            {username : "forestfudge", comment: "How did I not think of making this before?", likes : "19"},
            {username : "blakexyros", comment: "Amazing presentation", likes : "2"},
            {username : "krissy", comment: "Can you share the recipe please?", likes : "1"}
        ]
    }, {
        id : 9,
        imgSource : "images/food-11.jpg",
        username : "amandathecook",
        profilePic : "images/pf-9.jpg",
        likes : "12",
        comments : "1",
        shares : "2",
        caption : "Happy with how the rice turned out",
        comments : [
            {username : "kristyder", comment: "That portion is too small for me haha", likes : "3"}
        ]
    }, {
        id : 10,
        imgSource : "images/food-12.jpg",
        username : "roastedandtoasted",
        profilePic : "images/pf-10.jpg",
        likes : "90",
        comments : "10",
        shares : "14",
        caption : "Sunday cooking",
        comments : [
            {username : "kristyder", comment: "TI'm enjoying those colours", likes : "3"},
            {username : "rileyeats", comment: "I made something similar last night!", likes : "1"},
            {username : "alexxxxxx", comment: "you win", likes : "2"},
            {username : "that_dan", comment: "nice idea", likes : "1"},
            {username : "taylor_products", comment: "why does nobody share recipes???", likes : "4"},
            {username : "waynesmithy", comment: "there is so much attention to detail here", likes : "7"},
            {username : "blessed_kitchen", comment: "can we see more like this please?", likes : "2"},
            {username : "hasswei", comment: "what country does this come from?", likes : "10"},
            {username : "richlad", comment: "can you even learn this, or does it come naturally?", likes : "3"},
            {username : "r_simba", comment: "on fire mate", likes : "5"}
        ]
    }, {
        id : 11,
        imgSource : "images/food-13.jpg",
        username : "alexandra_health",
        profilePic : "images/pf-11.jpg",
        likes : "20",
        comments : "3",
        shares : "0",
        caption : "fresh off the grill",
        comments : [
            {username : "zokeheay", comment: "that needs sauce", likes : "2"},
            {username : "samdownunder", comment: "what did you season with?", likes : "0"},
            {username : "ash.peters", comment: "I'd eat that!", likes : "0"}
        ]
    },  {
        id : 12,
        imgSource : "images/food-14.jpg",
        username : "mattholmescooksfood",
        profilePic : "images/pf-12.jpg",
        likes : "36",
        comments : "5",
        shares : "2",
        caption : "trying to get the colours to pop",
        comments : [
            {username : "markrichards", comment: "vibrant mate", likes : "4"},
            {username : "sandradraws", comment: "get that slice of lemon on the top", likes : "0"},
            {username : "anxiouschopsticks", comment: "please tell me this comes with rice", likes : "2"},
            {username : "chasman_44", comment: "What is the sauce?", likes : "2"},
            {username : "leah1992", comment: "Not for me, but enjoy", likes : "0"},
        ]
    }, {
        id : 13,
        imgSource : "images/food-15.jpg",
        username : "speedybill",
        profilePic : "images/pf-13.jpg",
        likes : "17",
        comments : "2",
        shares : "1",
        caption : "warming for the cold weather with a hint of spice",
        comments : [
            {username : "foodclub", comment: "I would order this", likes : "1"},
            {username : "jasondavids13", comment: "not my thing, but I'd make an exception for this", likes : "2"}
        ]
    }, {
        id : 14,
        imgSource : "images/food-16.jpg",
        username : "didsomeonecook",
        profilePic : "images/pf-14.jpg",
        likes : "42",
        comments : "6",
        shares : "7",
        caption : "Fresh ingredients make all the difference here",
        comments : [
            {username : "mrsfussy", comment: "this looks tasty and quite easy", likes : "1"},
            {username : "elainehobert11", comment: "thank you for including the recipe", likes : "4"},
            {username : "cosatiprepini", comment: "oh wow, I am definitely trying this", likes : "5"},
            {username : "glutenfreelover", comment: "could we try this with a different gravy?", likes : "3"},
            {username : "maria7654321", comment: "I am in love with this", likes : "2"},
            {username : "daffodilelise", comment: "omg omg omg", likes : "1"}
        ]
    }, {
        id : 15,
        imgSource : "images/food-17.jpg",
        username : "tomlovesfood",
        profilePic : "images/pf-15.jpg",
        likes : "11",
        comments : "1",
        shares : "1",
        caption : "In the mood for summer",
        comments : [
            {username : "abitom", comment: "I can't wait to try and make this", likes : "4"},
        ]
    }, {
        id : 16,
        imgSource : "images/food-18.jpg",
        username : "pearlandlove",
        profilePic : "images/pf-16.jpg",
        likes : "102",
        comments : "12",
        shares : "65",
        caption : "The perfect summer garden plate",
        comments : [
            {username : "bettypolanco", comment: "bella idea", likes : "12"},
            {username : "randomcakes", comment: "11/10", likes : "3"},
            {username : "alicia_rudd", comment: "This looks delicious", likes : "4"},
            {username : "fitfoodlover", comment: "very tasty", likes : "12"},
            {username : "simmymiranda", comment: "omgggggggg", likes : "11"},
            {username : "emmajeffrey", comment: "like there is no tomorrow", likes : "12"},
            {username : "joey_toupe", comment: "please come to my party", likes : "3"},
            {username : "12nicoletta", comment: "i love it", likes : "7"},
            {username : "pabloandthefood", comment: "You've taken that picture so well", likes : "8"},
            {username : "miriam", comment: "Tomatoes are my favourite", likes : "15"},
            {username : "ay.demi87", comment: "I love it", likes : "21"},
            {username : "strangerbeans", comment: "looks so good", likes : "3"},
            {username : "laurasrecipes", comment: "every post I see I think wow", likes : "7"}
        ]
    }, {
        id : 17,
        imgSource : "images/food-19.jpg",
        username : "orangekitchen",
        profilePic : "images/pf-17.jpg",
        likes : "88",
        comments : "10",
        shares : "43",
        caption : "I call this an all rounder",
        comments : [
            {username : "amir423", comment: "looks so delicious", likes : "3"},
            {username : "dianadaguer", comment: "perfecto", likes : "5"},
            {username : "milan_breakfast", comment: "healthy and gorgeous", likes : "7"},
            {username : "djtaylor55", comment: "I want this", likes : "14"},
            {username : "ilovesnack", comment: "mamma mia", likes : "1"},
            {username : "alexah76", comment: "I am so hungry", likes : "12"},
            {username : "jojocooks", comment: "amazing", likes : "4"},
            {username : "ericasantini", comment: "yummmmmmmmmm", likes : "9"},
            {username : "tomas_fotograf", comment: "ok, bookmarking this one", likes : "0"},
            {username : "cats3400", comment: "I can't access the link in your bio", likes : "0"}
        ]
    }, {
        id : 18,
        imgSource : "images/food-20.jpg",
        username : "thesundayfoodclub",
        profilePic : "images/pf-18.jpg",
        likes : "53",
        comments : "6",
        shares : "12",
        caption : "Come as you are",
        comments : [
            {username : "linaaldini", comment: "are those roasties???", likes : "3"},
            {username : "naz_hussain", comment: "can you be my personal chef?", likes : "9"},
            {username : "spicymushrooms", comment: "making this tomorrow", likes : "12"},
            {username : "tastypotato", comment: "oh my", likes : "2"},
            {username : "zarifiski", comment: "absolutely delicious", likes : "5"},
            {username : "anastefani", comment: "I love the simplicity and the detail", likes : "7"}
        ]
    }
]

// Create the grid posts
const images = document.querySelectorAll(".img");
const usernames = document.querySelectorAll(".grid-item span");

//for loop that calls all the functions required for loading the homepage grid.
//Loops over each item in dataPosts and creates a grid item for each one.
for(let i = 0; i < dataPosts.length; i++) {
    let gridItem = document.createElement('div'); // create empty grid item div
    function createPost() {
        createGridImage();
        createIcons();
        createCaption();
        addValues();
        let gridContainer = document.querySelector('.grid-container');
        gridContainer.appendChild(gridItem);
    }

//create the image for each grid item from dataPosts.
function createGridImage() {
    let image = document.createElement('img');
    image.className = 'img';
    //add an id to each image that matches the id in the data (for the pop up window)
    image.id = i + 1;
    image.src = dataPosts[i].imgSource;
    gridItem.appendChild(image);
}

//add icons to each post
function createIcons() {
    let iconsDiv = document.createElement('div');
    //create divs for icons
    let likeIcon = document.createElement('i');
    let commentIcon = document.createElement('i');
    let shareIcon = document.createElement('i');
    // add icon class names
    likeIcon.className = 'far fa-heart gridlikes';
    commentIcon.className = 'fas fa-pen gridcomments';
    shareIcon.className = 'fas fa-share gridshares';
    //append icons to iconsDiv
    iconsDiv.appendChild(likeIcon)
    iconsDiv.appendChild(commentIcon)
    iconsDiv.appendChild(shareIcon)
    gridItem.appendChild(iconsDiv)
}

//create the caption on each post
function createCaption() {
    let caption = document.createElement('p');
    let username = document.createElement('span');
    caption.classList.add('captionText')
    username.classList.add('postUsername')
    //add text from data
    username.innerHTML = dataPosts[i].username;
    caption.innerHTML = dataPosts[i].caption;
    gridItem.appendChild(username)
    gridItem.appendChild(caption)
}


//add the likes, comments and shares values onto each grid item post
function addValues() {
    //likes
    let heartIcons = document.querySelectorAll(".gridlikes");
    let commentIcons = document.querySelectorAll(".gridcomments");
    let shareIcons = document.querySelectorAll(".gridshares");
    let likeCount = document.createElement('p');
    likeCount.innerHTML = dataPosts[i].likes;
}

createPost()





/* TO DO 

    -capture data object using arrow function
    -use that data to populate pop up window

*/



// Create homepage pop Up window
const popup = document.querySelector('.popup')
const popupImg = document.querySelector('.popup img')
//const popupUsername = document.querySelector('.popusername')


document.querySelectorAll('.grid-container img').forEach(img => {
    img.onclick = () => {
        //make popup window visible
        popup.style.display = 'block';
        //create variable that matches the id in data for the photo (photo id set line 319)
        let popId = img.getAttribute('id');

        //set content from data
        
}
});



















//HERE, it logs but the right post 18 times?????
const getPost = dataPosts.filter((item) => {
    return item.username === "thesundayfoodclub"
})
//console.log(getPost)



//make pop up disappear when the x is clicked
document.querySelector('.popup span').onclick = () => {
    popup.style.display = 'none'
}};









