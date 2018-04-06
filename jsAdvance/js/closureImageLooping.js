function SliderCounter(array){
    var x = 0;
    var d = array[x];
    console.log(array);

    function _next(){
        if(x > array.length - 1 || x < 0){
            x = 0;
        };
    }
    function _back(){
        if(x <= 0){
            x = 0;
        }
    }   
    
    function forward(){
        _next();
        var a = array[x];
        x++;
        return a;
    } 

    function backward(){
        _back();
        var a = array[x];
        x--;
        return a;
    }

    return {
        forward,
        backward
        
    }
}
    var array = ["<img src='image/sea.jpg' alt='img'>","<img src='image/sculpture.jpg' alt='img'>","<img src='image/teacup.jpg' alt='img'>"];
    // var array = ["test1","test2","test3"];
    var slide = SliderCounter(array);
        
        function display_front(){
            var displayArea = document.getElementById('display');
                displayArea.innerHTML = slide.forward();
        }
        function display_back(){
            var displayArea = document.getElementById('display');
                displayArea.innerHTML = slide.backward();
        }

        document.getElementById('front').addEventListener('click',display_front);
        document.getElementById('back').addEventListener('click',display_back);