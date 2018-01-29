 window.onload=function(){
    var myEjemplo = document.getElementById('imagenArticulo');

    myEjemplo.onclick = function(){
        var section = document.getElementsByClassName('ejemplo');
        for (i=0;i<section.length;i++){
            if (section[i].style.display =='none'){
                section[i].style.display = 'block';
				i = i+1;
            }
            else{
                section[i].style.display = 'none';
				i = i+1;
            }
        }
    }
}


