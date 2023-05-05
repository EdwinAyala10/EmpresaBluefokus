function onlyNumber(e){
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    number = "0123456789";
    especiales = "8-37-39-46";
    tecla_especial = false
    for(var i in especiales){
         if(key == especiales[i]){
             tecla_especial = true;
             break;
         }
     }
     if(number.indexOf(tecla)==-1 && !tecla_especial){
         return false;
     } 
}
$(document).on("keypress", "input[data-validation='number']",function(event){
    return onlyNumber(event);
});
