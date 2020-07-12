


function filter(){
    const input = document.getElementById("input"); // find input document
    const item = document.querySelectorAll('li')    // find list document
    const search = input.value.toLowerCase();       // change input value to lowercase
     
    item.forEach(function(li){
    listItem = li.innerHTML.toLowerCase();         // change li to lower case
    text = listItem.indexOf(search);               // compare the li to input value // here the input index value(search)=== text index
    
    if(text === "" || text >= 0){                  // if the text(input value ) == " " or the index of text >= 0
        li.style.display = "block";
        
    }else{
        li.style.display = "none"
    }
    
})

}
