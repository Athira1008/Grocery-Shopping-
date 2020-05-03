function displayGroceryTable(){
    var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    if(this.readyState==4&& this.status==200){
        var Jgrocery=JSON.parse(this.responseText);
        //console.log(Jgrocery);
        var groceryItem='';
        for( var i=0;i<Jgrocery.length;i++){
            groceryItem +='<tr>';
            groceryItem +='<td>'+ Jgrocery[i].SerialNo+'</td>';
            groceryItem +='<td>'+ Jgrocery[i].ItemName +'</td>';
            groceryItem +='<td>'+ Jgrocery[i].Quantity +'</td>';
            groceryItem +='<td>'+ Jgrocery[i].Unit +'</td>';
            groceryItem +='<td>'+ Jgrocery[i].Department +'</td>';
            groceryItem +='<td>'+ Jgrocery[i].Notes +'</td>';
            groceryItem +='</tr>';
        }
        document.querySelector('#groceryContent').innerHTML = groceryItem;
        var gthead=document.querySelector('#gthead');
        gthead.removeAttribute('hidden');
    }
    
};
xhttp.open("GET","grocery.json",true);
xhttp.send();
}
