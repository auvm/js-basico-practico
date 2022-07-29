const imgDt = document.querySelector("#imgDt");

function bother(){
    let random = parseInt((Math.random() * 4));
    console.log(random);
    switch(random){
        case 1:
            imgDt.setAttribute("src", "./imgs/cambio1.jpg");
            break;
        case 2:
            imgDt.setAttribute("src", "./imgs/cambio2.jpeg");
            break;
        case 3:
            imgDt.setAttribute("src", "./imgs/cambio3.jpeg");
            break;
        case 4:
            imgDt.setAttribute("src", "./imgs/cambio4.jpg");
            break;
    }
    
}