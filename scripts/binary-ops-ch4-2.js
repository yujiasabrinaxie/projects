function display(){
	
	var table = $("table").get(0);
    table.innerHTML="";
	var row = table.insertRow(-1);
    row.insertCell(0).innerHTML = "x";
    row.insertCell(1).innerHTML = "y";
    row.insertCell(2).innerHTML = "";

    var btnIndex = $("button").index(this);

    if(btnIndex == 0){
    //this is the AND button
    row.insertCell(2).innerHTML = "x && y";
    
    var row= table.insertRow(-1);
    row.insertCell(0).innerHTML = "0";
    row.insertCell(1).innerHTML = "0";
    row.insertCell(2).innerHTML = "0";

    var row= table.insertRow(-1);
    row.insertCell(0).innerHTML = "0";
    row.insertCell(1).innerHTML = "1";
    row.insertCell(2).innerHTML = "0";

    var row= table.insertRow(-1);
    row.insertCell(0).innerHTML = "1";
    row.insertCell(1).innerHTML = "0";
    row.insertCell(2).innerHTML = "0";
    
    var row= table.insertRow(-1);
    row.insertCell(0).innerHTML = "1";
    row.insertCell(1).innerHTML = "1";
    row.insertCell(2).innerHTML = "1";
    }
    

    else if(btnIndex == 1){
    //this is the OR button
    row.insertCell(2).innerHTML = "x || y";
    
    var row= table.insertRow(-1);
    row.insertCell(0).innerHTML = "0";
    row.insertCell(1).innerHTML = "0";
    row.insertCell(2).innerHTML = "0";

    var row= table.insertRow(-1);
    row.insertCell(0).innerHTML = "0";
    row.insertCell(1).innerHTML = "1";
    row.insertCell(2).innerHTML = "1";

    var row= table.insertRow(-1);
    row.insertCell(0).innerHTML = "1";
    row.insertCell(1).innerHTML = "0";
    row.insertCell(2).innerHTML = "1";
    
    var row= table.insertRow(-1);
    row.insertCell(0).innerHTML = "1";
    row.insertCell(1).innerHTML = "1";
    row.insertCell(2).innerHTML = "1";
    }

else if(btnIndex == 3){
    //this is the OR button
    row.insertCell(2).innerHTML = "x&#8853;y";
    
    var row= table.insertRow(-1);
    row.insertCell(0).innerHTML = "0";
    row.insertCell(1).innerHTML = "0";
    row.insertCell(2).innerHTML = "0";

    var row= table.insertRow(-1);
    row.insertCell(0).innerHTML = "0";
    row.insertCell(1).innerHTML = "1";
    row.insertCell(2).innerHTML = "1";

    var row= table.insertRow(-1);
    row.insertCell(0).innerHTML = "1";
    row.insertCell(1).innerHTML = "0";
    row.insertCell(2).innerHTML = "1";
    
    var row= table.insertRow(-1);
    row.insertCell(0).innerHTML = "1";
    row.insertCell(1).innerHTML = "1";
    row.insertCell(2).innerHTML = "0";
   $("table").css({"background-color":"#777","color":"white","border-radius":"25px","text-align":"center"});
}};

function displayNot(){
	var table = $("table").get(0);
	table.innerHTML = "";
	var row = table.insertRow(-1);
	row.insertCell(0).innerHTML = "x";
    row.insertCell(1).innerHTML = "!x";

    for (i=0;i<2;i++){
    var row = table.insertRow(-1);
    row.insertCell(0).innerHTML = i*(i%2);
    var x = Number(row.cells[0].innerHTML);
    row.insertCell(1).innerHTML = 1-x  ;
    }
    $("table").css({"background-color":"#777","color":"white","border-radius":"25px","text-align":"center"});
};

     

     $(document).ready(function(){
     $("#btn1").on("click",display);
      $("#btn2").on("click",display);
      $("#btn3").on("click",displayNot);
      $("#btn4").on("click",display);
     });
    
