var i = 0;          
var images = [];   
var time = 3000;    

images[0] = "C:\Users\cimpe\OneDrive\Desktop\Informatica Aplicata\resursecpu.png";
images[1] = "C:\Users\cimpe\OneDrive\Desktop\Informatica Aplicata\resursedisk.png";
images[2] = "C:\Users\cimpe\OneDrive\Desktop\Informatica Aplicata\resursememorie.png";

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
      i++; 
    } else { 
        i = 0;
    }

    setTimeout("changeImg()", time);
}