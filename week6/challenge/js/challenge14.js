// KrazyMLBB API v1.0 - Documentation
// http://krazywoman.com/krazymlbb/


// When the webpage loads
// Display all heroes
function display_default() {

    // Display all heroes
    
    // YOUR CODE GOES HERE
    var request = new XMLHttpRequest();

    request.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200 ) {
            response = JSON.parse(this.response);
            heroes_data = response.records;
            //console.log(heroes_data);
            show_heroes("all");
        }
    };
    
    var url = "http://localhost/krazymlbb/api/hero/read.php";
    request.open("GET", url, true);

    request.send();
}


// Given a hero_class (tank, fighter, mage, asassin, marksman, support, all)
function show_heroes(hero_class) {

    // if 'tank'
    // only display 'tank' heroes

    // if 'all'
    // display ALL heroes

    // YOUR CODE GOES HERE
    //reset default
    var hero_cards = document.getElementById("hero_cards")
    hero_cards.innerHTML = "";

    heroes_array = [];
    for(data of heroes_data){
        if(hero_class == "all"){
            heroes_array.push(data);
        }
        else if(hero_class == "tank"){
            if(data.class.toLowerCase() == "tank"){
                heroes_array.push(data);
            }
        }
        else if(hero_class == "fighter"){
            if(data.class.toLowerCase() == "fighter"){
                heroes_array.push(data);
            }
        }
        else if(hero_class == "mage"){
            if(data.class.toLowerCase() == "mage"){
                heroes_array.push(data);
            }
        }
        else if(hero_class == "assassin"){
            if(data.class.toLowerCase() == "assassin"){
                heroes_array.push(data);
            }
            
        }
        else if(hero_class == "marksman"){
            if(data.class.toLowerCase() == "marksman"){
                heroes_array.push(data);
            }  
        }
        else if(hero_class == "support"){
            if(data.class.toLowerCase() == "support"){
                heroes_array.push(data);
            }
        }
    }
    console.log(heroes_array);

    //* --> appending later in the code
    var heroes_key = Object.keys(heroes_array);
    for(var i = 0; i < heroes_key.length; i++){        
        //append to hero_cards*
        var card_mb = document.createElement("div");
        card_mb.setAttribute("class", "card mb-3 mx-auto");

        //append to card_mb*
        var row = document.createElement("div");
        row.setAttribute("class", "row no-gutters");

        //append to row*
        var col_md_3 = document.createElement("div");
        col_md_3.setAttribute("class", "col-md-3");
        row.appendChild(col_md_3);

        //append to col_md_3
        var img = document.createElement("img");
        img.setAttribute("src", heroes_array[i]["img_profile_url"]);
        img.setAttribute("class", "card-img");
        img.setAttribute("width", "100%");
        img.setAttribute("alt", heroes_array[i]["name"]);
        col_md_3.appendChild(img);
        row.appendChild(col_md_3);

        //append to row
        var col_md_9 = document.createElement("div");
        col_md_9.setAttribute("class", "col-md-9");

        //append to col_md_9
        var card_body = document.createElement("div");
        card_body.setAttribute("class", "card-body");

        //append to card_body
        var card_title = document.createElement("h5");
        card_title.setAttribute("class", "card-title");
        card_title.innerHTML = heroes_array[i]["name"];
        card_body.appendChild(card_title);

        //append to card_body
        var card_text = document.createElement("p");
        card_text.setAttribute("class", "card-text");
        card_text.innerHTML = heroes_array[i]["description"];
        card_body.appendChild(card_text);

        //append to card_body*
        var text_center = document.createElement("p");
        text_center.setAttribute("class", "text-center");

        var btn1 = document.createElement("button");
        btn1.setAttribute("type", "button");
        btn1.setAttribute("class", "btn mb-1");
        btn1.style.backgroundColor = "#ff7002";
        btn1.style.color = "white";
        btn1.style.width = "220px";
        btn1.innerHTML = "Battlepoint Cost";
        var span1 = document.createElement("span");
        span1.setAttribute("class", "badge badge-light");
        span1.innerHTML = heroes_array[i]["purchase"]["battlepoint_cost"];
        btn1.appendChild(span1);
        text_center.appendChild(btn1);

        var btn2 = document.createElement("button");
        btn2.setAttribute("type", "button");
        btn2.setAttribute("class", "btn mb-1");
        btn2.style.backgroundColor = "#1326ff";
        btn2.style.color = "white";
        btn2.style.width = "220px";
        btn2.innerHTML = "Diamond Cost";
        var span2 = document.createElement("span");
        span2.setAttribute("class", "badge badge-light");
        span2.innerHTML = heroes_array[i]["purchase"]["diamond_cost"];
        btn2.appendChild(span2);
        text_center.appendChild(btn2);

        var btn3 = document.createElement("button");
        btn3.setAttribute("type", "button");
        btn3.setAttribute("class", "btn mb-1");
        btn3.style.backgroundColor = "#03f433";
        btn3.style.color = "white";
        btn3.style.width = "220px";
        btn3.innerHTML = "Movement Speed";
        var span3 = document.createElement("span");
        span3.setAttribute("class", "badge badge-light");
        span3.innerHTML = heroes_array[i]["stats"]["movement_speed"];
        btn3.appendChild(span3);
        text_center.appendChild(btn3);

        var btn4 = document.createElement("button");
        btn4.setAttribute("type", "button");
        btn4.setAttribute("class", "btn mb-1");
        btn4.style.backgroundColor = "#03f433";
        btn4.style.color = "white";
        btn4.style.width = "220px";
        btn4.innerHTML = "Physical Attack";
        var span4 = document.createElement("span");
        span4.setAttribute("class", "badge badge-light");
        span4.innerHTML = heroes_array[i]["stats"]["physical_attack"];
        btn4.appendChild(span4);
        text_center.appendChild(btn4);

        var btn5 = document.createElement("button");
        btn5.setAttribute("type", "button");
        btn5.setAttribute("class", "btn mb-1");
        btn5.style.backgroundColor = "#03f433";
        btn5.style.color = "white";
        btn5.style.width = "220px";
        btn5.innerHTML = "Physical Defense";
        var span5 = document.createElement("span");
        span5.setAttribute("class", "badge badge-light");
        span5.innerHTML = heroes_array[i]["stats"]["physical_defense"];
        btn5.appendChild(span5);
        text_center.appendChild(btn5);

        var btn6 = document.createElement("button");
        btn6.setAttribute("type", "button");
        btn6.setAttribute("class", "btn mb-1");
        btn6.style.backgroundColor = "#03f433";
        btn6.style.color = "white";
        btn6.style.width = "220px";
        btn6.innerHTML = "Magic Power";
        var span6 = document.createElement("span");
        span6.setAttribute("class", "badge badge-light");
        span6.innerHTML = heroes_array[i]["stats"]["magic_power"];
        btn6.appendChild(span6);
        text_center.appendChild(btn6);

        var btn7 = document.createElement("button");
        btn7.setAttribute("type", "button");
        btn7.setAttribute("class", "btn mb-1");
        btn7.style.backgroundColor = "#03f433";
        btn7.style.color = "white";
        btn7.style.width = "220px";
        btn7.innerHTML = "Armor";
        var span7 = document.createElement("span");
        span7.setAttribute("class", "badge badge-light");
        span7.innerHTML = heroes_array[i]["stats"]["armor"];
        btn7.appendChild(span7);
        text_center.appendChild(btn7);

        var btn8 = document.createElement("button");
        btn8.setAttribute("type", "button");
        btn8.setAttribute("class", "btn mb-1");
        btn8.style.backgroundColor = "#03f433";
        btn8.style.color = "white";
        btn8.style.width = "220px";
        btn8.innerHTML = "Magic Resistance";
        var span8 = document.createElement("span");
        span8.setAttribute("class", "badge badge-light");
        span8.innerHTML = heroes_array[i]["stats"]["magic_resistance"];
        btn8.appendChild(span8);
        text_center.appendChild(btn8);

        var btn9 = document.createElement("button");
        btn9.setAttribute("type", "button");
        btn9.setAttribute("class", "btn mb-1");
        btn9.style.backgroundColor = "#03f433";
        btn9.style.color = "white";
        btn9.style.width = "220px";
        btn9.innerHTML = "HP";
        var span9 = document.createElement("span");
        span9.setAttribute("class", "badge badge-light");
        span9.innerHTML = heroes_array[i]["stats"]["hp"];
        btn9.appendChild(span9);
        text_center.appendChild(btn9);

        var btn10 = document.createElement("button");
        btn10.setAttribute("type", "button");
        btn10.setAttribute("class", "btn mb-1");
        btn10.style.backgroundColor = "#03f433";
        btn10.style.color = "white";
        btn10.style.width = "220px";
        btn10.innerHTML = "Mana";
        var span10 = document.createElement("span");
        span10.setAttribute("class", "badge badge-light");
        span10.innerHTML = heroes_array[i]["stats"]["mana"];
        btn10.appendChild(span10);
        text_center.appendChild(btn10);

        var btn11 = document.createElement("button");
        btn11.setAttribute("type", "button");
        btn11.setAttribute("class", "btn mb-1");
        btn11.style.backgroundColor = "#03f433";
        btn11.style.color = "white";
        btn11.style.width = "220px";
        btn11.innerHTML = "Attack Speed";
        var span11 = document.createElement("span");
        span11.setAttribute("class", "badge badge-light");
        span11.innerHTML = heroes_array[i]["stats"]["attack_speed"];
        btn11.appendChild(span11);
        text_center.appendChild(btn11);

        var btn12 = document.createElement("button");
        btn12.setAttribute("type", "button");
        btn12.setAttribute("class", "btn mb-1");
        btn12.style.backgroundColor = "#03f433";
        btn12.style.color = "white";
        btn12.style.width = "220px";
        btn12.innerHTML = "HP Regen Rate";
        var span12 = document.createElement("span");
        span12.setAttribute("class", "badge badge-light");
        span12.innerHTML = heroes_array[i]["stats"]["hp_regen_rate"];
        btn12.appendChild(span12);
        text_center.appendChild(btn12);

        var btn13 = document.createElement("button");
        btn13.setAttribute("type", "button");
        btn13.setAttribute("class", "btn mb-1");
        btn13.style.backgroundColor = "#03f433";
        btn13.style.color = "white";
        btn13.style.width = "220px";
        btn13.innerHTML = "Mana Regen Rate";
        var span13 = document.createElement("span");
        span13.setAttribute("class", "badge badge-light");
        span13.innerHTML = heroes_array[i]["stats"]["mana_regen_rate"];
        btn13.appendChild(span13);
        text_center.appendChild(btn13);

        var btn14 = document.createElement("button");
        btn14.setAttribute("type", "button");
        btn14.setAttribute("class", "btn mb-1");
        btn14.style.backgroundColor = "#3e3b3a";
        btn14.style.color = "white";
        btn14.style.width = "220px";
        btn14.innerHTML = "Class";
        var span14 = document.createElement("span");
        span14.setAttribute("class", "badge badge-light");
        span14.innerHTML = heroes_array[i]["class"];
        btn14.appendChild(span14);
        text_center.appendChild(btn14);

        card_body.appendChild(text_center);
        col_md_9.appendChild(card_body);
        row.appendChild(col_md_9);
        card_mb.appendChild(row);
        hero_cards.appendChild(card_mb);
    }

}