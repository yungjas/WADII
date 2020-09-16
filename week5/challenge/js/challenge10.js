//================================================
// DO NOT MODIFY THIS CONSTANT VARIABLE
//================================================
const stars_dataset = [
    {
        "Ryan Gosling": [
            "sm_bg_ryan.jpg",
            "I'm going to make a movie about 'Hey Girl.'",
            "https://en.wikipedia.org/wiki/Ryan_Gosling"
        ],
        "Zac Efron": [
            "sm_bg_zac.jpg",
            "A girl can tell I like her when I blush or start telling bad jokes.",
            "https://en.wikipedia.org/wiki/Zac_Efron"
        ],
        "Eminem": [
            "sm_bg_eminem.jpg",
            "I am whatever you say I am; if I wasn't, then why would you say I am.",
            "https://en.wikipedia.org/wiki/Eminem"
        ]
    },
    {
        "Irina Shayk": [
            "sm_bg_irina.jpg",
            "I am trying to concentrate on books. You know, I love Dostoevsky. He's my favorite writer.",
            "https://en.wikipedia.org/wiki/Irina_Shayk"
        ],
        "Anna Kendrick": [
            "sm_bg_anna.jpg",
            "An actor should always let humility outweigh ambition.",
            "https://en.wikipedia.org/wiki/Anna_Kendrick"
        ],
        "Taylor Swift": [
            "sm_bg_taylor.jpg",
            "I'm intimidated by the fear of being average.",
            "https://en.wikipedia.org/wiki/Taylor_Swift"
        ]
    }
];


// [TODO] IMPLEMENT THIS FUNCTION
// When the webpage loads, the web browser will call this function.
// Randomly determine whether to show "male" stars or "female" stars
function display_default() {

    // YOUR CODE GOES HERE

    // Look for "[IMPORTANT]" inside challenge10.html file.
    // It tells you what elements need to be updated by JavaScript functions.

    // [IMPORTANT] Buttons
    //
    // When displaying "male" stars:
    //  - "Show Male Stars" button must be "disabled" (the user cannot click on it)
    //  - "Show Female Stars" button must be activated (the user should be able to click on it)
    //
    // When displaying "female" stars:
    //  - "Show Male Stars" button must be activated (the user should be able to click on it)
    //  - "Show Female Stars" button must be "disabled" (the user cannot click on it)

    // generating a 50 50 chance of showing male or female stars
    var rand = Math.random() < 0.5;

    if(rand){
        male_stars = stars_dataset[0];

        //set img
        document.getElementById("image1").setAttribute("src", "images/" + male_stars["Ryan Gosling"][0]);
        document.getElementById("image2").setAttribute("src", "images/" + male_stars["Zac Efron"][0]);
        document.getElementById("image3").setAttribute("src", "images/" + male_stars["Eminem"][0]);

        //set title
        //get the names of all the male stars
        var names = Object.keys(male_stars);
        var heading1 = document.getElementById("slide_heading1");
        heading1.innerText = names[0];
        var heading2 = document.getElementById("slide_heading2");
        heading2.innerText = names[1];
        var heading3 = document.getElementById("slide_heading3");
        heading3.innerText = names[2];
        
        //set para
        var slide_title1 = document.getElementById("slide_title1");
        slide_title1.innerText = male_stars["Ryan Gosling"][1];
        var slide_title2 = document.getElementById("slide_title2");
        slide_title2.innerText = male_stars["Zac Efron"][1];
        var slide_title3 = document.getElementById("slide_title3");
        slide_title3.innerText = male_stars["Eminem"][1];

        //set links
        var wiki1 = document.getElementById("wiki1");
        var wiki2 = document.getElementById("wiki2");
        var wiki3 = document.getElementById("wiki3");
        wiki1.innerText = names[0];
        wiki2.innerText = names[1];
        wiki3.innerText = names[2];
        wiki1.setAttribute("href", male_stars["Ryan Gosling"][2]);
        wiki2.setAttribute("href", male_stars["Zac Efron"][2]);
        wiki3.setAttribute("href", male_stars["Eminem"][2]);

        //disable male btn, enable female btn
        document.getElementById("male_button").disabled = true;
        document.getElementById("female_button").disabled = false;
        
    }
    else{
        female_stars = stars_dataset[1];
        
        //set img
        document.getElementById("image1").setAttribute("src", "images/" + female_stars["Irina Shayk"][0]);
        document.getElementById("image2").setAttribute("src", "images/" + female_stars["Anna Kendrick"][0]);
        document.getElementById("image3").setAttribute("src", "images/" + female_stars["Taylor Swift"][0]);

        //set title
        //get the names of all female stars
        var names = Object.keys(female_stars);
        var heading1 = document.getElementById("slide_heading1");
        heading1.innerText = names[0];
        var heading2 = document.getElementById("slide_heading2");
        heading2.innerText = names[1];
        var heading3 = document.getElementById("slide_heading3");
        heading3.innerText = names[2];

        //set para
        var slide_title1 = document.getElementById("slide_title1");
        slide_title1.innerText = female_stars["Irina Shayk"][1];
        var slide_title2 = document.getElementById("slide_title2");
        slide_title2.innerText = female_stars["Anna Kendrick"][1];
        var slide_title3 = document.getElementById("slide_title3");
        slide_title3.innerText = female_stars["Taylor Swift"][1];

        //set links
        var wiki1 = document.getElementById("wiki1");
        var wiki2 = document.getElementById("wiki2");
        var wiki3 = document.getElementById("wiki3");
        wiki1.innerText = names[0];
        wiki2.innerText = names[1];
        wiki3.innerText = names[2];
        wiki1.setAttribute("href", female_stars["Irina Shayk"][2]);
        wiki2.setAttribute("href", female_stars["Anna Kendrick"][2]);
        wiki3.setAttribute("href", female_stars["Taylor Swift"][2]);

        //disable female button, enable male btn
        document.getElementById("female_button").disabled = true;
        document.getElementById("male_button").disabled = false;
    }
}



// [TODO] IMPLEMENT THIS FUNCTION
// When "Show Male Stars" button is clicked, the web browser calls this function.
function show_male_stars() {

        // YOUR CODE GOES HERE
        male_stars = stars_dataset[0];

        //set img
        document.getElementById("image1").setAttribute("src", "images/" + male_stars["Ryan Gosling"][0]);
        document.getElementById("image2").setAttribute("src", "images/" + male_stars["Zac Efron"][0]);
        document.getElementById("image3").setAttribute("src", "images/" + male_stars["Eminem"][0]);

        //set title
        //get the names of all the male stars
        var names = Object.keys(male_stars);
        var heading1 = document.getElementById("slide_heading1");
        heading1.innerText = names[0];
        var heading2 = document.getElementById("slide_heading2");
        heading2.innerText = names[1];
        var heading3 = document.getElementById("slide_heading3");
        heading3.innerText = names[2];
        
        //set para
        var slide_title1 = document.getElementById("slide_title1");
        slide_title1.innerText = male_stars["Ryan Gosling"][1];
        var slide_title2 = document.getElementById("slide_title2");
        slide_title2.innerText = male_stars["Zac Efron"][1];
        var slide_title3 = document.getElementById("slide_title3");
        slide_title3.innerText = male_stars["Eminem"][1];

        //set links
        var wiki1 = document.getElementById("wiki1");
        var wiki2 = document.getElementById("wiki2");
        var wiki3 = document.getElementById("wiki3");
        wiki1.innerText = names[0];
        wiki2.innerText = names[1];
        wiki3.innerText = names[2];
        wiki1.setAttribute("href", male_stars["Ryan Gosling"][2]);
        wiki2.setAttribute("href", male_stars["Zac Efron"][2]);
        wiki3.setAttribute("href", male_stars["Eminem"][2]);

         //disable male btn, enable female btn
         document.getElementById("male_button").disabled = true;
         document.getElementById("female_button").disabled = false;

}


// [TODO] IMPLEMENT THIS FUNCTION
// When "Show Female Stars" button is clicked, the web browser calls this function.
function show_female_stars() {

        // YOUR CODE GOES HERE
        female_stars = stars_dataset[1];
        
        //set img
        document.getElementById("image1").setAttribute("src", "images/" + female_stars["Irina Shayk"][0]);
        document.getElementById("image2").setAttribute("src", "images/" + female_stars["Anna Kendrick"][0]);
        document.getElementById("image3").setAttribute("src", "images/" + female_stars["Taylor Swift"][0]);

        //set title
        //get the names of all female stars
        var names = Object.keys(female_stars);
        var heading1 = document.getElementById("slide_heading1");
        heading1.innerText = names[0];
        var heading2 = document.getElementById("slide_heading2");
        heading2.innerText = names[1];
        var heading3 = document.getElementById("slide_heading3");
        heading3.innerText = names[2];

        //set para
        var slide_title1 = document.getElementById("slide_title1");
        slide_title1.innerText = female_stars["Irina Shayk"][1];
        var slide_title2 = document.getElementById("slide_title2");
        slide_title2.innerText = female_stars["Anna Kendrick"][1];
        var slide_title3 = document.getElementById("slide_title3");
        slide_title3.innerText = female_stars["Taylor Swift"][1];

        //set links
        var wiki1 = document.getElementById("wiki1");
        var wiki2 = document.getElementById("wiki2");
        var wiki3 = document.getElementById("wiki3");
        wiki1.innerText = names[0];
        wiki2.innerText = names[1];
        wiki3.innerText = names[2];
        wiki1.setAttribute("href", female_stars["Irina Shayk"][2]);
        wiki2.setAttribute("href", female_stars["Anna Kendrick"][2]);
        wiki3.setAttribute("href", female_stars["Taylor Swift"][2]);

        //disable female button, enable male btn
        document.getElementById("female_button").disabled = true;
        document.getElementById("male_button").disabled = false;

}