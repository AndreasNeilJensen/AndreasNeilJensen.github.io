
var txtArray = [
    'A Software Engineer, but with a little extra \'umph\'!', 
    'MSc in Software Engineering.\nAalborg University, 2020',
    'Passionate, Creative, Result Oriented, Easily Distracted by Dogs',
    'Dependable, Versatile, Analytical AND an avid listener of the Joe Rogan experience podcast'];

function randomtext() {
    document.getElementById("randomQuote").innerHTML = randomtxt[Math.floor((Math.random() * randomtxt.length))];
}

function setNextText(counter){
    document.getElementById("randomQuote").innerHTML = txtArray[counter];
    document.getElementById("randomQuote").style.opacity = '1';

    var nxtCounter;
    if(counter == (txtArray.length - 1)){ nxtCounter = 0;}
    else {nxtCounter = counter + 1;}

    setTimeout(function(){ 
        document.getElementById("randomQuote").style.opacity = '0';

        setTimeout(function(){ 
            setNextText(nxtCounter); 
        }, 2000);

    }, 5000);
}

window.onload = function(){
    setNextText(0);
}