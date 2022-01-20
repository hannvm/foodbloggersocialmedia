const dataPosts = [             //todos los datos que necesito para construir la pagina index
    {                           //es un array con objects dentro
        id : 1,
        imgSource : "images/food/food-1.jpg",
        username : "laurasmenu",
        profilePic : "images/profiles/f/1.jpg",
        likes : "46",
        comments : "04",
        shares : "01",
        caption : "Quick and easy salad, perfect for summer",
        commentsText : [        // elemento array con objects nested
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


//bucle for para llamar todas las funciones requeridos para el grid de homepage
//el bucle crea un elemento en el grid para cada elemento el el array dataPosts
for(let i = 0; i < dataPosts.length; i++) {
    let gridItem = document.createElement('div'); // crear un div vacio para el elemento en el grid
    function createPost() {                       // llamar todas las funciones para crear los elementos de cada post
        createGridImage();
        createIcons();
        createCaption();
        let gridContainer = document.querySelector('.grid-container');  //capturar el contenedor del grid en un variable
        gridContainer.appendChild(gridItem);        //anadir el elemento al contendor
    }

//Crear el imagen para cada elemento de dataPosts
function createGridImage() {
    let image = document.createElement('img');      //create elemento 'img'
    image.className = 'img';                        //anadir el class para los estilos
    //anadir un id a cada imagen que es igual al id del elemento en dataPosts (necesito esto para crear el elemento emergente)
    image.id = i + 1;       // el id es el index + 1  (porque el index empieza con cero)
    image.src = dataPosts[i].imgSource;     //anadir el fuente del imagen al html para el imagen
    gridItem.appendChild(image);            //anadir el imagen al elemento
}

//anadir iconos a cada elemento
function createIcons() {
    let iconsDiv = document.createElement('div');       //crear un div contenedor para los iconos
    iconsDiv.className = 'icons';                       //anadir classname para crear un objeto flex
    let likeIcon = document.createElement('i');             //crear elementos iconos
    let commentIcon = document.createElement('i');
    let shareIcon = document.createElement('i');
    likeIcon.className = 'far fa-heart gridlikes empty';        // anadir nomres de class a los iconos
    commentIcon.className = 'fas fa-pen gridcomments';
    shareIcon.className = 'fas fa-share gridshares';

    //anadir cantidades despues de los iconos
    let likeCount = document.createElement('p');            //crear elementos 'p' para las cantidades
    let commentCount = document.createElement('p');
    let shareCount = document.createElement('p');
    likeCount.className = 'icon-value'                      //anadir classname a los p
    commentCount.className = 'icon-value'
    shareCount.className = 'icon-value'
    likeCount.innerText = dataPosts[i].likes;               //traer datos de dataPosts para ser el innerText
    commentCount.innerText = dataPosts[i].comments;
    shareCount.innerText = dataPosts[i].shares;

    //anadir iconos y cantidades a iconsDiv contenedor
    iconsDiv.appendChild(likeIcon)
    iconsDiv.appendChild(likeCount)
    iconsDiv.appendChild(commentIcon)
    iconsDiv.appendChild(commentCount)
    iconsDiv.appendChild(shareIcon)
    iconsDiv.appendChild(shareCount)
    gridItem.appendChild(iconsDiv)      //anadir iconsDiv al elemento del grid
}

//crear el pie de foto para cada elemento del grid
function createCaption() {
    let caption = document.createElement('p');      //crear elemento 'p' para el texto
    let username = document.createElement('span');  //crear elemento 'span' para el username
    caption.classList.add('captionText')            //anadir classnames a los elementos nuevos
    username.classList.add('postUsername')
    username.innerHTML = dataPosts[i].username;     //anadir texto desde dataPosts
    caption.innerHTML = dataPosts[i].caption;
    gridItem.appendChild(username)                  //anadir username y pie de foto a iconsDiv contenedor
    gridItem.appendChild(caption)
}


//llamar todas las funciones necesarias para crear un elemento en el contenedor grid
createPost()


// El elemento emergente
const popup = document.querySelector('.popup')      //capturar el elemento emergente en un variable

//forEach para cada elemento del grid, que anade los datos para ese elemento al elemento emergente
document.querySelectorAll('.grid-container img').forEach(img => {
    img.onclick = () => {               //funciona cuandos haces click en un imagen

        const commentContainer = document.querySelector('.comment-container')   //capturar el contendor de los comentarios
        commentContainer.innerHTML = ""            //borrar lo que esta dentro

        popup.style.display = 'block';      //hacer visible el elemento emergente

        let popId = img.getAttribute('id');     //capturar el id del imagen (para encontrar los datos relevantes en dataPosts)
        let postIndexData = dataPosts[popId - 1]    //variable que es igual al indice del elemento en datPosts

        const popupImg = document.querySelector('.popup img')   //capturar imagen del elemento emergente en un variable 
        popupImg.src = postIndexData.imgSource                  //anadir fuente del imagen al imagen

        //primera fila del elemento emergente (username y foto de perfil)
        const popupUsername = document.querySelector('.popup .popusername')     //capturar elemento html username en un variable
        const popupProfilePic = document.querySelector('.popup .row-one img')   //capturar elemento htmlimagen en un variable
        popupUsername.innerText = postIndexData.username    //cambiar el nombre del usuario al nombre correcto usando el indice (postIndexData)
        popupProfilePic.src = postIndexData.profilePic      //cambiar el fuente del foto de perfil usandeo el indice

        //segunda fila (participacion en el post)
        const popupLikes = document.querySelector('.popup .row-two .pulikes')           //capturar elemento html likes en un variable
        const popupComments = document.querySelector('.popup .row-two .pucomments')     //capturar elemento html comments en un variable
        const popupShares = document.querySelector('.popup .row-two .pushares')         //capturar elemento html shares en un variable
        popupLikes.innerText = postIndexData.likes                                      //cambiar el valor del innerText de likes usando el indice (postIndexData)
        popupComments.innerText = postIndexData.comments                                //cambiar el valor del innerText de comments usando el indice (postIndexData)
        popupShares.innerText = postIndexData.shares                                    //cambiar el valor del innerText de shares usando el indice (postIndexData)

        //el pie de foto
        const popupCaption = document.querySelector('.popup .caption');                 //caturar elemento html del pie de foto en un variable
        popupCaption.innerText = postIndexData.caption;                                 //cambiar el texto usando el indice (postIndexData)



        //anadir comentarios al post
        const allComments = postIndexData.commentsText          //usando el indice (postIndexData), captura el array de comentarios para el post correcto

        for (let i = 0; i < allComments.length; i++) {          //bucle for para anadir cada comentario al elemento emergente

            const commentDiv = document.createElement('div');   //crear div para cada comentario
            commentDiv.className = 'comment';                   //anadir classname al div

            const commenterPic = document.createElement('img'); //crear elemento de imagen para la foto de perfil
            commenterPic.src = allComments[i].image;            //anadir fuente al imagen usando el indice del bucle

            const commentText = document.createElement('div');  //crear div contenedor para el texto del comentario
            commentText.className = 'comment-text';             //anadir classname al div

            const commentUsername = document.createElement('p');    //crear elemento 'p' para el username
            commentUsername.className = 'username';                 //anadir classname al 'p' 
            commentUsername.innerText = allComments[i].username;    //anadir innertext al 'p' usando el indice del bucle

            const commentBody = document.createElement('p');        //crear elemento 'p' para el texto del comentario
            commentBody.className = 'comment-p';                    //anadir classname al 'p'
            commentBody.innerText = allComments[i].comment;         //anadir innertext al 'p' usando el indice del bucle

            commentText.append(commentUsername, commentBody);       //anadir el username y comentario a su div contenedor

            const commentLikes = document.createElement('div');     //crear div contenedor para los likes y cantidad de likes de cada acomentario
            commentLikes.className = 'comment-likes';               //anadir classname al div

            const heartIcon = document.createElement('i');          //crear icono de corazon 
            heartIcon.className = ('far fa-heart empty');           //anadir classname para hacerlo un icono

            const likesNumber = document.createElement('p');        //crear 'p' elemento por cantidad de likes
            likesNumber.className = ('number')                      //anadir classname al 'p'
            likesNumber.innerText = allComments[i].likes;           //anadir innertext usando el indice del bucle y los datos

            commentLikes.append(heartIcon, likesNumber);            //anadir icono y cantidad de likes a su div contenedor
            commentDiv.append(commenterPic, commentText, commentLikes)      //anadir foto, div de texto, y div de likes a su contenedor 
            commentContainer.append(commentDiv)                     //anadir el div completo del comentario al contendor de todos los comentarios
        }
    }
});


//hacer el elemnto emergente invisible cuando haces click en el 'x'
document.querySelector('.popup span').onclick = () => {
    popup.style.display = 'none';
}};


//for each para poner el corazon rojo, y cambiar la cantidad de likes cuando haces click en el icono del corazon
document.querySelectorAll('.fa-heart').forEach(icon => {                //seleccionar todos los iconos del corazon
    icon.onclick = () => {                                              //anadir onclick para hacerlo cuando haces click
        const iconClass = icon.classList.contains("empty")              //variable boolean, si el icono tiene el class 'empty' es negro y tiene el valor true. si no lo tiene es rojo y tiene el valor falso.

        switch (iconClass) {                                            //condicional switch para alternar entre dos estados
            //cambiar nombre de class (empty -> full) y anadir un like a la cantidad de likes
            case true :                                                 //si el variable iconClass tiene el valor true
                icon.classList.remove("empty");                         //quitar el class 'empty' (color negro)
                icon.classList.add("full");                             //anadir el class 'full' (color rojo)
                let childrenPlus = icon.parentElement.children          //capturar los hijos del contenedor del icono en un variable
                let elementLikesPlus = parseInt(childrenPlus[1].innerText) + 1  //capturar el valor del cantidad de likes en un variable (es el indice 1 de los hijos del contenedor) y convertir en un integer (para anadir 1 al cantidad)
                childrenPlus[1].innerText = elementLikesPlus.toString()         //convertir integer a un string y cambiar el innertext del cantidad de likes
                break;                                                  //romper el condicional
            //cambiar nombre de class (full -> empty) y quitar un like a la cantidad de likes
            case false :                                                //si el variable iconClass es falso (todo es igual que arriba pero en reves) 
                icon.classList.remove("full");
                icon.classList.add("empty");
                let childrenMinus = icon.parentElement.children
                let elementLikesMinus = parseInt(childrenMinus[1].innerText) - 1
                childrenMinus[1].innerText = elementLikesMinus.toString()
                break;
        }
    }
})
