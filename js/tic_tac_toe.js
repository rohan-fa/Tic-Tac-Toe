$(document).ready(function(){

    let sign = 'X';
    let button = $('#playagain');

    $('#playagain').on('click', playAgian);

    function playAgian(){
    for (let i=1; i<=9; i++){
        $('.box' + i).text("");
    }
}

   $('.box').on('click', function(){
        $(this).html(sign);
              
        check();

        if (winningConditions()){
        alert ('win!');
        
        }else{
            if(draw()){
                alert ('match draw!');
            }
        }
        
    });

    function check (){
        
        if(sign == 'X'){
            sign = 'O';
        }
        else{
            sign = 'X';
        }
        
    }

    function getdata (id) {
        return $(id).text();  
    }
    function winningConditions (){
        if( conditionCheck('#div1', '#div2', '#div3') || conditionCheck('#div4', '#div5', '#div6') || conditionCheck('#div7', '#div8', '#div9') || 
        conditionCheck('#div1', '#div4', '#div7') || conditionCheck('#div2', '#div5', '#div8') || conditionCheck('#div3', '#div6', '#div9') ||
        conditionCheck('#div7', '#div5', '#div3') ||conditionCheck('#div1', '#div5', '#div9')){
            return true;
        }else {
            return false;
        }
        
    }

    function conditionCheck (id1, id2,id3){
        if ( getdata(id3) !== "" && getdata(id1) == getdata(id2) && getdata (id2) == getdata (id3)){
            return true;
        
        }else{
            return false;

        }
    }
    function draw (){
        if( getdata('#div1') != "" && getdata('#div2') != "" && getdata('#div3') != "" && getdata('#div4') != "" &&
        getdata('#div5') != "" && getdata('#div6') != "" && getdata('#div7') != "" && getdata('#div8') != "" &&
        getdata('#div9') != ""){
            return true;
        }else{
            return false;
        }
    }
    
});

