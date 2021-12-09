var toggle = false;

document.body.querySelector(".menuIcon").addEventListener("click", function(){

    toggle=!toggle

    if(toggle){
        document.body.querySelector(".menu").style.right="0";
    }else{
        document.body.querySelector(".menu").style.right="-150px";
    }
})



document.body.querySelector(".productsV").addEventListener("click", function(){
        document.body.querySelector(".popupV").style.right="10%";
})

document.body.querySelector(".productsP").addEventListener("click", function(){
        document.body.querySelector(".popupP").style.right="10%";
})

document.body.querySelector(".productsN").addEventListener("click", function(){
        document.body.querySelector(".popupN").style.right="10%";
})

document.body.querySelector(".productsC").addEventListener("click", function(){
        document.body.querySelector(".popupC").style.right="10%";
})

document.body.querySelector(".exitV").addEventListener("click", function(){
        document.body.querySelector(".popupV").style.right="-15000px";
})

document.body.querySelector(".exitP").addEventListener("click", function(){
    document.body.querySelector(".popupP").style.right="-15000px";
})

document.body.querySelector(".exitN").addEventListener("click", function(){
    document.body.querySelector(".popupN").style.right="-15000px";
})

document.body.querySelector(".exitC").addEventListener("click", function(){
    document.body.querySelector(".popupC").style.right="-15000px";
})