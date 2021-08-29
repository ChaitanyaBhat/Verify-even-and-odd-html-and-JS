function even_odd() 
{
    let input_obj = document.querySelector('.input-text');
    let num = input_obj.value;
    
    let score_obj = document.querySelector('.score');
    let score = score_obj.innerText;
    let result_obj = document.querySelector('h1');
    
    let n = parseInt(num, 10);
    try {
        if(n%2 == 0) {
            result_obj.innerText = "Even";
            score = +score + 2;
            score_obj.innerText = score;
        }
        else if(n%2 ==1) {
            result_obj.innerText = "Odd";
            score = score - 2;
            score_obj.innerText = score;
        }
        else 
            throw "Input value error";
    }
    catch(err) {
        result_obj.innerText = err
    }
}