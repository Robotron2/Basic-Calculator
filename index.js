
function btnClick(press){
    if (scrN.value == 0) {
       scrN.value += press; 
    }
    else if(scrN.value !=0){
        scrN.value +=press
    }
    // else{
    //     cls();
    //     scrN.value += press;
    // }
}

function calc(){
    scrN2.value = eval(scrN.value)
    scrN.value = ""
}
function cls(){
    scrN.value = "";
    scrN2.value = "";
}
function backSpace(){
    scrN.value = scrN.value.slice(0, - 1);
}

function sfnClick(){
    // scrN.value += spress;
    scrN.value += btnClick('sin(')
    scrN2.value = sin(scrN.value)
}




