/*
TO DO
The data for the comments isn't looping properly
line up likes count



*/



const dataPosts = [
    {
        id : 1,
        imgSource : "images/food/food-1.jpg",
        username : "laurasmenu",
        profilePic : "images/profiles/f/1.jpg",
        likes : "46",
        comments : "04",
        shares : "01",
        caption : "Quick and easy salad, perfect for summer",
        commentsText : [
            {username : "jetchfletcher", comment : "This looks delicious!", likes : "43", image:"images/profiles/m/1.jpg"},
            {username : "Louisdreams", comment : "I can't wait to try and make this", likes : "12", image:"images/profiles/f/2.jpg"},
            {username : "YannisAB", comment: "Looks very tasty", likes: '03', image:"images/profiles/m/2.jpg"},
            {username : "holpwaley", comment: "Looking good", likes : "04", image:"images/profiles/f/3.jpg"},
        ]
    }, {
        id : 2,
        imgSource : "images/food/food-2.jpg",
        username : "tastysundays43",
        profilePic : "images/profiles/m/3.jpg",
        likes : "37",
        comments : "06",
        shares : "14",
        caption : "Warming and filling! Recipe link in bio!",
        commentsText : [
            {username : "gobbles543", comment: "Have you shared the recipe yet?", likes : "14", image:"images/profiles/m/4.jpg"},
            {username : "chocolat3city", comment: "I made this last night and it went don very well", likes : "20", image:"images/profiles/f/4.jpg"},
            {username : "moxeyt", comment: "This made me very popular with my friends", likes : "07", image:"images/profiles/m/5.jpg"},
            {username : "louisemaxxwell", comment: "delicious", likes : "02", image:"images/profiles/f/5.jpg"},
            {username : "dyerthor", comment: "yum yum yum", likes : "12", image:"images/profiles/m/6.jpg"},
            {username : "roastpork", comment: "looks like a lot of work", likes : "03", image:"images/profiles/m/7.jpg"}
        ]
    }, {
        id : 3,
        imgSource : "images/food/food-3.jpg",
        username : "sam94cooks",
        profilePic : "images/profiles/m/8.jpg",
        likes : "18",
        comments : "02",
        shares : "19",
        caption : "Really happy with how the glaze turned out.",
        commentsText : [
            {username : "ca12345", comment: "The presentation", likes : "01", image:"images/profiles/f/6.jpg"},
            {username : "grilling2", comment: "It looks like you've cooked this really well", likes : "03", image:"images/profiles/f/7.jpg"}
        ]
    }, {
        id : 4,
        imgSource : "images/food/food-4.jpg",
        username : "c.eve.chef",
        profilePic : "images/profiles/f/8.jpg",
        likes : "81",
        comments : "05",
        shares : "14",
        caption : "French toast with fruits",
        commentsText : [
            {username : "jertuir", comment: "This looks unhealthy but worth it", likes : "04", image:"images/profiles/m/9.jpg"},
            {username : "chefamandadiaz", comment: "very nice", likes : "03", image:"images/profiles/f/8.jpg"},
            {username : "naomikid21", comment: "love it gonna try it", likes : "09", image:"images/profiles/f/9.jpg"},
            {username : "samgamble", comment: "nice post", likes : "01", image:"images/profiles/f/10.jpg"},
            {username : "hawk1994", comment: "that looks too sweet for me", likes : "01", image:"images/profiles/m/10.jpg"},
        ]
    }, {
        id : 5,
        imgSource : "images/food/food-6.jpg",
        username : "drfoodlove",
        profilePic : "images/profiles/f/11.jpg",
        likes : "49",
        comments : "05",
        shares : "19",
        caption : "Getting some vitamins this morning",
        commentsText : [
            {username : "samantha432s", comment: "I would eat this", likes : "09", image:"images/profiles/f/12.jpg"},
            {username : "orlando41", comment: "This looks different", likes : "05", image:"images/profiles/m/11.jpg"},
            {username : "angelaroma", comment: "fresh", likes : "08", image:"images/profiles/m/12.jpg"},
            {username : "eric.zedhener", comment: "why so many spoons?", likes : "11", image:"images/profiles/m/13.jpg"},
            {username : "alexgida1", comment: "yummm", likes : "12", image:"images/profiles/f/13.jpg"}
        ]
    }, {
        id : 6,
        imgSource : "images/food/food-7.jpg",
        username : "_tacos_",
        profilePic : "images/profiles/f/14.jpg",
        likes : "92",
        comments : "07",
        shares : "03",
        caption : "Getting some vitamins this morning",
        commentsText : [
            {username : "v1cky21", comment: "That looks so healthy and tasty", likes : "13", image:"images/profiles/f/15.jpg"},
            {username : "missevasmith", comment: "What do you usually eat this with?", likes : "12", image:"images/profiles/f/16.jpg"},
            {username : "jay_ment", comment: "colours", likes : "13", image:"images/profiles/m/14.jpg"},
            {username : "landivar", comment: "solid job", likes : "04", image:"images/profiles/m/15.jpg"},
            {username : "ocloperez", comment: "this has made me hungry", likes : "05", image:"images/profiles/m/16.jpg"},
            {username : "lalasky", comment: "I haven't seen anything like this before, what is it?", likes : "03", image:"images/profiles/f/17.jpg"},
            {username : "ravecraven", comment: "awesome", likes : "04", image:"images/profiles/f/18.jpg"}
        ]
    }, {
        id : 7,
        imgSource : "images/food/food-8.jpg",
        username : "pablocooks",
        profilePic : "images/profiles/m/17.jpg",
        likes : "61",
        comments : "04",
        shares : "02",
        caption : "Just threw a few things together",
        commentsText : [
            {username : "drgreen", comment: "delicious", likes : "02", image:"images/profiles/m/19.jpg"},
            {username : "dominique_kyle", comment: "there goes my diet", likes : "10", image:"images/profiles/f/19.jpg"},
            {username : "mskirm", comment: "woah", likes : "01", image:"images/profiles/m/20.jpg"},
            {username : "foodcircles", comment: "ok, I could eat this", likes : "02", image:"images/profiles/f/20.jpg"},
            {username : "fernandoalbert", comment: "tell me this wasn't difficult to make", likes : "03", image:"images/profiles/m/21.jpg"},
        ]
    }, {
        id : 8,
        imgSource : "images/food/food-9.jpg",
        username : "umer123",
        profilePic : "images/profiles/m/22.jpg",
        likes : "40",
        comments : "04",
        shares : "11",
        caption : "Healthy breakfast",
        commentsText : [
            {username : "dollyra", comment: "not impressed", likes : "01", image:"images/profiles/f/21.jpg"},
            {username : "forestfudge", comment: "How did I not think of making this before?", likes : "19", image:"images/profiles/m/23.jpg"},
            {username : "blakexyros", comment: "Amazing presentation", likes : "02", image:"images/profiles/m/24.jpg"},
            {username : "krissy", comment: "Can you share the recipe please?", likes : "01", image:"images/profiles/f/22.jpg"}
        ]
    }, {
        id : 9,
        imgSource : "images/food/food-11.jpg",
        username : "amandathecook",
        profilePic : "images/profiles/f/23.jpg",
        likes : "12",
        comments : "01",
        shares : "02",
        caption : "Happy with how the rice turned out",
        commentsText : [
            {username : "kristyder", comment: "That portion is too small for me haha", likes : "03", image:"images/profiles/f/24.jpg"}
        ]
    }, {
        id : 10,
        imgSource : "images/food/food-12.jpg",
        username : "roastedandtoasted",
        profilePic : "images/profiles/f/25.jpg",
        likes : "90",
        comments : "10",
        shares : "14",
        caption : "Sunday cooking",
        commentsText : [
            {username : "kristyder", comment: "TI'm enjoying those colours", likes : "03", image:"images/profiles/f/26.jpg"},
            {username : "rileyeats", comment: "I made something similar last night!", likes : "01", image:"images/profiles/m/25.jpg"},
            {username : "alexxxxxx", comment: "you win", likes : "02", image:"images/profiles/m/26.jpg"},
            {username : "that_dan", comment: "nice idea", likes : "01", image:"images/profiles/m/27.jpg"},
            {username : "taylor_products", comment: "why does nobody share recipes???", likes : "04", image:"images/profiles/f/27.jpg"},
            {username : "waynesmithy", comment: "there is so much attention to detail here", likes : "07", image:"images/profiles/m/28.jpg"},
            {username : "blessed_kitchen", comment: "can we see more like this please?", likes : "02", image:"images/profiles/m/29.jpg"},
            {username : "hasswei", comment: "what country does this come from?", likes : "10", image:"images/profiles/m/30.jpg"},
            {username : "richlad", comment: "can you even learn this, or does it come naturally?", likes : "03", image:"images/profiles/m/31.jpg"},
            {username : "r_simba", comment: "on fire mate", likes : "05", image:"images/profiles/f/28.jpg"}
        ]
    }, {
        id : 11,
        imgSource : "images/food/food-13.jpg",
        username : "alexandra_health",
        profilePic : "images/profiles/f/29.jpg",
        likes : "20",
        comments : "03",
        shares : "04",
        caption : "fresh off the grill",
        commentsText : [
            {username : "zokeheay", comment: "that needs sauce", likes : "02", image:"images/profiles/f/31.jpg"},
            {username : "samdownunder", comment: "what did you season with?", likes : "10", image:"images/profiles/m/32.jpg"},
            {username : "ash.peters", comment: "I'd eat that!", likes : "07", image:"images/profiles/m/33.jpg"}
        ]
    },  {
        id : 12,
        imgSource : "images/food/food-14.jpg",
        username : "mattholmescooksfood",
        profilePic : "images/profiles/m/34.jpg",
        likes : "36",
        comments : "05",
        shares : "02",
        caption : "trying to get the colours to pop",
        commentsText : [
            {username : "markrichards", comment: "vibrant mate", likes : "04", image:"images/profiles/m/35.jpg"},
            {username : "sandradraws", comment: "get that slice of lemon on the top", likes : "02", image:"images/profiles/f/32.jpg"},
            {username : "anxiouschopsticks", comment: "please tell me this comes with rice", likes : "02", image:"images/profiles/m/36.jpg"},
            {username : "chasman_44", comment: "What is the sauce?", likes : "02", image:"images/profiles/m/37.jpg"},
            {username : "leah1992", comment: "Not for me, but enjoy", likes : "12", image:"images/profiles/f/33.jpg"},
        ]
    }, {
        id : 13,
        imgSource : "images/food/food-15.jpg",
        username : "speedybill",
        profilePic : "images/profiles/m/38.jpg",
        likes : "17",
        comments : "02",
        shares : "01",
        caption : "warming for the cold weather with a hint of spice",
        commentsText : [
            {username : "foodclub", comment: "I would order this", likes : "01", image:"images/profiles/f/34.jpg"},
            {username : "jasondavids13", comment: "not my thing, but I'd make an exception for this", likes : "02", image:"images/profiles/m/39.jpg"}
        ]
    }, {
        id : 14,
        imgSource : "images/food/food-16.jpg",
        username : "didsomeonecook",
        profilePic : "images/profiles/f/35.jpg",
        likes : "42",
        comments : "06",
        shares : "07",
        caption : "Fresh ingredients make all the difference here",
        commentsText : [
            {username : "mrsfussy", comment: "this looks tasty and quite easy", likes : "01", image:"images/profiles/f/36.jpg"},
            {username : "elainehobert11", comment: "thank you for including the recipe", likes : "04", image:"images/profiles/f/37.jpg"},
            {username : "cosatiprepini", comment: "oh wow, I am definitely trying this", likes : "05", image:"images/profiles/m/40.jpg"},
            {username : "glutenfreelover", comment: "could we try this with a different gravy?", likes : "03", image:"images/profiles/m/41.jpg"},
            {username : "maria7654321", comment: "I am in love with this", likes : "02", image:"images/profiles/f/38.jpg"},
            {username : "daffodilelise", comment: "omg omg omg", likes : "01", image:"images/profiles/f/39.jpg"}
        ]
    }, {
        id : 15,
        imgSource : "images/food/food-17.jpg",
        username : "tomlovesfood",
        profilePic : "images/profiles/m/42.jpg",
        likes : "11",
        comments : "01",
        shares : "01",
        caption : "In the mood for summer",
        commentsText : [
            {username : "abitom", comment: "I can't wait to try and make this", likes : "04", image:"images/profiles/m/43.jpg"},
        ]
    }, {
        id : 16,
        imgSource : "images/food/food-18.jpg",
        username : "pearlandlove",
        profilePic : "images/profiles/f/40.jpg",
        likes : "102",
        comments : "012",
        shares : "65",
        caption : "The perfect summer garden plate",
        commentsText : [
            {username : "bettypolanco", comment: "bella idea", likes : "12", image:"images/profiles/f/41.jpg"},
            {username : "randomcakes", comment: "11/10", likes : "03", image:"images/profiles/f/42.jpg"},
            {username : "alicia_rudd", comment: "This looks delicious", likes : "04", image:"images/profiles/f/43.jpg"},
            {username : "fitfoodlover", comment: "very tasty", likes : "12", image:"images/profiles/f/44.jpg"},
            {username : "simmymiranda", comment: "omgggggggg", likes : "11", image:"images/profiles/f/45.jpg"},
            {username : "emmajeffrey", comment: "like there is no tomorrow", likes : "12", image:"images/profiles/f/46.jpg"},
            {username : "joey_toupe", comment: "please come to my party", likes : "03", image:"images/profiles/m/44.jpg"},
            {username : "12nicoletta", comment: "i love it", likes : "07", image:"images/profiles/f/47.jpg"},
            {username : "pabloandthefood", comment: "You've taken that picture so well", likes : "08", image:"images/profiles/m/47.jpg"},
            {username : "miriam", comment: "Tomatoes are my favourite", likes : "15", image:"images/profiles/f/48.jpg"},
            {username : "ay.demi87", comment: "I love it", likes : "21", image:"images/profiles/f/49.jpg"},
            {username : "strangerbeans", comment: "looks so good", likes : "03", image:"images/profiles/m/48.jpg"},
            {username : "laurasrecipes", comment: "every post I see I think wow", likes : "07", image:"images/profiles/f/50.jpg"}
        ]
    }, {
        id : 17,
        imgSource : "images/food/food-19.jpg",
        username : "orangekitchen",
        profilePic : "images/profiles/f/51.jpg",
        likes : "88",
        comments : "10",
        shares : "43",
        caption : "I call this an all rounder",
        commentsText : [
            {username : "amir423", comment: "looks so delicious", likes : "03", image:"images/profiles/m/49.jpg"},
            {username : "dianadaguer", comment: "perfecto", likes : "05", image:"images/profiles/f/52.jpg"},
            {username : "milan_breakfast", comment: "healthy and gorgeous", likes : "07", image:"images/profiles/m/50.jpg"},
            {username : "djtaylor55", comment: "I want this", likes : "14", image:"images/profiles/m/51.jpg"},
            {username : "ilovesnack", comment: "mamma mia", likes : "01", image:"images/profiles/f/53.jpg"},
            {username : "alexah76", comment: "I am so hungry", likes : "12", image:"images/profiles/f/54.jpg"},
            {username : "jojocooks", comment: "amazing", likes : "04", image:"images/profiles/f/55.jpg"},
            {username : "ericasantini", comment: "yummmmmmmmmm", likes : "09", image:"images/profiles/f/56.jpg"},
            {username : "tomas_fotograf", comment: "ok, bookmarking this one", likes : "02", image:"images/profiles/m/52.jpg"},
            {username : "cats3400", comment: "I can't access the link in your bio", likes : "03", image:"images/profiles/m/53.jpg"}
        ]
    }, {
        id : 18,
        imgSource : "images/food/food-20.jpg",
        username : "thesundayfoodclub",
        profilePic : "images/profiles/m/54.jpg",
        likes : "53",
        comments : "06",
        shares : "12",
        caption : "Come as you are",
        commentsText : [
            {username : "linaaldini", comment: "are those roasties???", likes : "03", image:"images/profiles/f/57.jpg"},
            {username : "naz_hussain", comment: "can you be my personal chef?", likes : "09", image:"images/profiles/f/58.jpg"},
            {username : "spicymushrooms", comment: "making this tomorrow", likes : "12", image:"images/profiles/m/55.jpg"},
            {username : "tastypotato", comment: "oh my", likes : "2", image:"images/profiles/m/56.jpg"},
            {username : "zarifiski", comment: "absolutely delicious", likes : "05", image:"images/profiles/m/57.jpg"},
            {username : "anastefani", comment: "I love the simplicity and the detail", likes : "07", image:"images/profiles/f/59.jpg"}
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
    //add classname to make the div a flex object
    iconsDiv.className = 'icons';
    //create i for icons
    let likeIcon = document.createElement('i');
    let commentIcon = document.createElement('i');
    let shareIcon = document.createElement('i');
    // add icon class names
    likeIcon.className = 'far fa-heart gridlikes';
    commentIcon.className = 'fas fa-pen gridcomments';
    shareIcon.className = 'fas fa-share gridshares';

    //add number values after each icon
    //create p for numbers
    let likeCount = document.createElement('p');
    let commentCount = document.createElement('p');
    let shareCount = document.createElement('p');
    //add p class names
    likeCount.className = 'icon-value'
    commentCount.className = 'icon-value'
    shareCount.className = 'icon-value'
    //add p innertext
    likeCount.innerText = dataPosts[i].likes;
    commentCount.innerText = dataPosts[i].comments;
    shareCount.innerText = dataPosts[i].shares;

    //append icons and values to iconsDiv
    iconsDiv.appendChild(likeIcon)
    iconsDiv.appendChild(likeCount)
    iconsDiv.appendChild(commentIcon)
    iconsDiv.appendChild(commentCount)
    iconsDiv.appendChild(shareIcon)
    iconsDiv.appendChild(shareCount)
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



// Create homepage pop Up window
const popup = document.querySelector('.popup')
//const popupUsername = document.querySelector('.popusername')



//create popup for the individual post onclick
document.querySelectorAll('.grid-container img').forEach(img => {
    img.onclick = () => {

        //catch comment conatiner and empty on popup reload
        const commentContainer = document.querySelector('.comment-container')
        commentContainer.innerHTML = ""

        //make popup window visible
        popup.style.display = 'block';

        //get the correct object for the image
        let popId = img.getAttribute('id');
        //variable with object with the data for that individual post
        let postIndexData = dataPosts[popId - 1]

        //Main food image
        const popupImg = document.querySelector('.popup img')
        popupImg.src = postIndexData.imgSource

        //Row One  username + profile pic
        const popupUsername = document.querySelector('.popup .popusername')
        const popupProfilePic = document.querySelector('.popup .row-one img')
        popupUsername.innerText = postIndexData.username
        popupProfilePic.src = postIndexData.profilePic

        //Row Two    likes + shares + comments
        const popupLikes = document.querySelector('.popup .row-two .pulikes')
        const popupComments = document.querySelector('.popup .row-two .pucomments')
        const popupShares = document.querySelector('.popup .row-two .pushares')
        popupLikes.innerText = postIndexData.likes
        popupComments.innerText = postIndexData.comments
        popupShares.innerText = postIndexData.shares

        //caption
        const popupCaption = document.querySelector('.popup .caption');
        popupCaption.innerText = postIndexData.caption;



        // populate comments
        
        const allComments = postIndexData.commentsText

        for (let i = 0; i < allComments.length; i++) {

            //create comment div for each comment and add class name
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment';
            //create commenter profilepic and add source
            const commenterPic = document.createElement('img');
            commenterPic.src = allComments[i].image;

            //create comment username/comment div
            const commentText = document.createElement('div'); //create div for username and comment to go in
            commentText.className = 'comment-text'; //add class name to this div
            //create username
            const commentUsername = document.createElement('p');
            commentUsername.className = 'username';
            commentUsername.innerText = allComments[i].username;
            //create comment
            const commentBody = document.createElement('p');
            commentBody.className = 'comment-p';
            commentBody.innerText = allComments[i].comment;
            //append username and comment to their div
            commentText.append(commentUsername, commentBody);


            //create comment likes/div
            const commentLikes = document.createElement('div');
            commentLikes.className = 'comment-likes';
            //create heart icon
            const heartIcon = document.createElement('i');
            heartIcon.className = ('far fa-heart');
            //create likes number
            const likesNumber = document.createElement('p');
            likesNumber.className = ('number')
            likesNumber.innerText = allComments[i].likes;

            //append icon and likes count to commentLikes div
            commentLikes.append(heartIcon, likesNumber);

            //append profile pic, comment-likes div and comment-text divto larger comment div
            commentDiv.append(commenterPic, commentText, commentLikes)


            //Append Everything to div that holds comments
            commentContainer.append(commentDiv)
        }
    }
});




//make pop up disappear when the x is clicked
document.querySelector('.popup span').onclick = () => {
    popup.style.display = 'none';
}};
