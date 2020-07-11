


function filter(){
    const input = document.getElementById("input");
    const item = document.querySelectorAll('li')
    const search = input.value.toLowerCase();
     
    item.forEach(function(li){
    listItem = li.innerHTML.toLowerCase();
    text = listItem.indexOf(search);
    
    if(text === "" || text >= 0){
        li.style.display = "block";
        
    }else{
        li.style.display = "none"
    }
    
})

}
