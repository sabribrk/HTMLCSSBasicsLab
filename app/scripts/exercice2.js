
var diametres = [4878, 12104, 12756, 6787, 142800, 120000, 51200, 48600];
var names = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
$(function(){
  for(var i=0; i< diametres.length; i++){
    $("#planetes").append("<div id = "+names[i]+"> </div>");
    $("#" + names[i]).css("color", "grey").css("background-color", "black").css("margin", "10px").css("width", diametres[i]/300).css("height", "25px").css("padding", "25px")
    $("#" + names[i]).append("<span>"+names[i]+"</span>");
 }
});
