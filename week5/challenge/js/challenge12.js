// [IMPORTANT]
// DO NOT MODIFY challenge12.html content
// YOU MUST WORK WITH WHAT IS GIVEN TO YOU



// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function highlight_words() {

    // YOUR CODE GOES HERE  
    var word_len = prompt("Enter word length (words longer than this length will be highlighted for you)");
    var result = "";

    //querySelectorAll lets you find a list of Elements that match the CSS selector and puts in an array
    //in this case, we will be getting all para elements in putting them in an array 
    var para_arr_node = document.querySelectorAll("#book_chapter ul li p");
    for(each_para_node of para_arr_node){
        //split each para text into an element in an array
        var para_arr = each_para_node.innerText.split("\n");
        //reset the innerHTML --> removes the original html without the highlighted words, will be replaced by html with highlighted words
        each_para_node.innerHTML = "";
        for(each_para of para_arr){
            var word_arr = each_para.split(" ");
            for(each_word of word_arr){
                if(each_word.length > word_len){
                    result += "<span style='background-color: yellow'>" + each_word + "</span>" + " ";
                }
                else{
                    result += each_word + " ";
                }
            }
        }

        each_para_node.innerHTML += result;
        //reset result otherwise it will concatenate previous results to each_para_node.innerHTML
        result = "";
    }
    
}


// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function show_num_words() {

    // YOUR CODE GOES HERE
    var para_arr_node = document.querySelectorAll("#book_chapter ul li p");
    var span_arr_node = document.querySelectorAll("#book_chapter ul li span");
    console.log(span_arr_node);
    //storing count of words of each para
    count_arr = [];

    for(each_para_node of para_arr_node){
        var para_arr = each_para_node.innerText.split("\n");
        for(each_para of para_arr){
            var word_arr = each_para.split(" ");
            count_arr.push(word_arr.length);
        }
    }

    for(i = 0; i < span_arr_node.length; i++){
        span_arr_node[i].innerHTML = "(" + count_arr[i] + " words" + ")";
        span_arr_node[i].style.fontWeight = "bold";
    }
}


// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function show_emoticons() {

    // YOUR CODE GOES HERE
}