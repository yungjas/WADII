// KrazyStars API v1.0 - Documentation
// http://krazywoman.com/krazystars/


// When the webpage loads
// Randomly determine whether to show "male" stars or "female" stars
function display_default() {

    // YOUR CODE GOES HERE
    // Call API
    var rand = Math.random() < 0.5;
    //Step 1
    var request = new XMLHttpRequest();

    //Step 2
    request.onreadystatechange = function(){
        //Step 5 - response is ready
        if( this.readyState == 4 && this.status == 200 ) {
            //sending response back together with function call 
            response = JSON.parse(this.response);
            stars_data = response.records;
            if(rand){
                show_male_stars();
            }
            else{
                show_female_stars();
            }
        }
    }
    
    //Step 3
    //easier approach is to get every star data
    //and sieve it in the male/female function itself
    var url = "http://localhost/krazystars/api/star/read.php";
    request.open("GET", url, true);

    //Step 4
    request.send();

}


// This function is called when user clicks on "Show Male Stars" button.
function show_male_stars() {

    // YOUR CODE GOES HERE
    // removing defaults/previous stars
    document.getElementById("wiki_links").innerHTML = "";
    document.getElementById("imdb_links").innerHTML = "";
    document.getElementById("slide_show").innerHTML = "";

    stars_array = [];
    for(data of stars_data){
        if(data.gender == "M"){
            stars_array.push(data);
        }
    }

    //get all the keys of male stars
    var stars_key = Object.keys(stars_array);
    //loop through each key
    for(var i = 0; i < stars_key.length; i++){
        //set wikis
        var wiki_links = document.getElementById("wiki_links");
        var wiki_a_tag = document.createElement("a");
        wiki_a_tag.setAttribute("id", "wiki" + stars_array[i]["id"]);
        wiki_a_tag.setAttribute("class", "dropdown-item");
        wiki_a_tag.setAttribute("href", stars_array[i]["wikipedia_url"]);
        wiki_a_tag.setAttribute("target", "_blank");
        wiki_a_tag.innerHTML = stars_array[i]["fullname"];
        wiki_links.appendChild(wiki_a_tag);

        //set imdb
        var imdb_links = document.getElementById("imdb_links");
        var imdb_a_tag = document.createElement("a");
        imdb_a_tag.setAttribute("id", "imdb" + stars_array[i]["id"]);
        imdb_a_tag.setAttribute("class", "dropdown-item");
        imdb_a_tag.setAttribute("href", stars_array[i]["imdb_url"]);
        imdb_a_tag.setAttribute("target", "_blank");
        imdb_a_tag.innerHTML = stars_array[i]["fullname"];
        imdb_links.appendChild(imdb_a_tag);

        //set carousel
        var slide_show = document.getElementById("slide_show")
        slide_show.setAttribute("class", "carousel-inner");

        var carousel_item = document.createElement("div");
        if(i == 0){
            carousel_item.setAttribute("class", "carousel-item active");
        }
        else{
            carousel_item.setAttribute("class", "carousel-item");
        }
        var img = document.createElement("img");
        img.setAttribute("id", "image" + stars_array[i]["id"]);
        img.setAttribute("src", stars_array[i]["photo_background_url"]);
        img.setAttribute("alt", "");
        carousel_item.appendChild(img);
        slide_show.appendChild(carousel_item);

        var carousel_caption = document.createElement("div");
        carousel_caption.setAttribute("class", "carousel-caption");

        var star_h2 = document.createElement("h2");
        star_h2.setAttribute("class", "star_h2");
        star_h2.setAttribute("id", "slide_heading" + stars_array[i]["id"]);
        star_h2.style.padding = "5px";
        star_h2.style.backgroundColor = "grey";
        star_h2.style.color = "white";
        star_h2.innerHTML = stars_array[i]["fullname"];
        carousel_caption.appendChild(star_h2);

        var slide_title = document.createElement("p");
        slide_title.setAttribute("id", "slide_title" + stars_array[i]["id"]);
        slide_title.style.padding = "5px";
        slide_title.style.backgroundColor = "black";
        slide_title.style.color = "white";
        slide_title.innerHTML = stars_array[i]["quote"];
        carousel_caption.appendChild(slide_title);

        carousel_item.appendChild(carousel_caption);
        slide_show.appendChild(carousel_item);
    }

    //disable female button
    document.getElementById("female_button").disabled = false;
    document.getElementById("male_button").disabled = true;
}


// This function is called when user clicks on "Show Female Stars" button.
function show_female_stars() {

    // YOUR CODE GOES HERE
    // removing defaults/previous stars
    document.getElementById("wiki_links").innerHTML = "";
    document.getElementById("imdb_links").innerHTML = "";
    document.getElementById("slide_show").innerHTML = "";

    stars_array = [];
    for(data of stars_data){
        if(data.gender == "F"){
            stars_array.push(data);
        }
    }

    //get all the keys of male stars
    var stars_key = Object.keys(stars_array);
    //loop through each key
    for(var i = 0; i < stars_key.length; i++){
        //set wikis
        var wiki_links = document.getElementById("wiki_links");
        var wiki_a_tag = document.createElement("a");
        wiki_a_tag.setAttribute("id", "wiki" + stars_array[i]["id"]);
        wiki_a_tag.setAttribute("class", "dropdown-item");
        wiki_a_tag.setAttribute("href", stars_array[i]["wikipedia_url"]);
        wiki_a_tag.setAttribute("target", "_blank");
        wiki_a_tag.innerHTML = stars_array[i]["fullname"];
        wiki_links.appendChild(wiki_a_tag);

        //set imdb
        var imdb_links = document.getElementById("imdb_links");
        var imdb_a_tag = document.createElement("a");
        imdb_a_tag.setAttribute("id", "imdb" + stars_array[i]["id"]);
        imdb_a_tag.setAttribute("class", "dropdown-item");
        imdb_a_tag.setAttribute("href", stars_array[i]["imdb_url"]);
        imdb_a_tag.setAttribute("target", "_blank");
        imdb_a_tag.innerHTML = stars_array[i]["fullname"];
        imdb_links.appendChild(imdb_a_tag);

        //set carousel
        var slide_show = document.getElementById("slide_show")
        slide_show.setAttribute("class", "carousel-inner");

        var carousel_item = document.createElement("div");
        if(i == 0){
            carousel_item.setAttribute("class", "carousel-item active");
        }
        else{
            carousel_item.setAttribute("class", "carousel-item");
        }
        var img = document.createElement("img");
        img.setAttribute("id", "image" + stars_array[i]["id"]);
        img.setAttribute("src", stars_array[i]["photo_background_url"]);
        img.setAttribute("alt", "");
        carousel_item.appendChild(img);
        slide_show.appendChild(carousel_item);

        var carousel_caption = document.createElement("div");
        carousel_caption.setAttribute("class", "carousel-caption");

        var star_h2 = document.createElement("h2");
        star_h2.setAttribute("class", "star_h2");
        star_h2.setAttribute("id", "slide_heading" + stars_array[i]["id"]);
        star_h2.style.padding = "5px";
        star_h2.style.backgroundColor = "grey";
        star_h2.style.color = "white";
        star_h2.innerHTML = stars_array[i]["fullname"];
        carousel_caption.appendChild(star_h2);

        var slide_title = document.createElement("p");
        slide_title.setAttribute("id", "slide_title" + stars_array[i]["id"]);
        slide_title.style.padding = "5px";
        slide_title.style.backgroundColor = "black";
        slide_title.style.color = "white";
        slide_title.innerHTML = stars_array[i]["quote"];
        carousel_caption.appendChild(slide_title);

        carousel_item.appendChild(carousel_caption);
        slide_show.appendChild(carousel_item);
    }

    //disable female button
    document.getElementById("female_button").disabled = true;
    document.getElementById("male_button").disabled = false;

}