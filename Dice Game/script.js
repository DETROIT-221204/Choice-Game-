var randomnumber=Math.floor(Math.random()*6)+1
var randomimgsrc="img/dice"+randomnumber+".png"
var image1=document.querySelectorAll("img")[0]
image1.setAttribute("src",randomimgsrc)

var randomnumber2=Math.floor(Math.random()*6)+1
var randomimgsrc2="img/dice"+randomnumber2+".png"
var image2=document.querySelectorAll("img")[1]
image2.setAttribute("src",randomimgsrc2)
if(randomimgsrc>randomimgsrc2){
    document.querySelector("h1").innerHTML="Player One Wins"
}
else if(randomimgsrc<randomimgsrc2){
    document.querySelector("h1").innerHTML="Player Two Wins"
}
else{
    document.querySelector("h1").innerHTML="Its a tie "
}

