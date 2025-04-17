
let screen = document.querySelector('#screen');
let btn = document.querySelectorAll('.btn');
let evalexpression = '';
for( let item of btn){
    item.addEventListener('click',(e)=>{
        let btntext = e.target.dataset.value || e.target.innerText;
        
        if (btntext === '×') {
            screen.value += '×';           // show × on screen
            evalexpression += '*';         // use * for calculation
        } 
        else if (btntext === '÷') {
            screen.value += '÷';
            evalexpression += '/';
        } 
        else if (btntext === '=') {
            try {
                screen.value = eval(evalexpression);
                evalexpression = screen.value; // reset for next calc
            } catch (e) {
                screen.value = 'Error';
                evalexpression = '';
            }
        } 
        else if (btntext === 'AC') {
            screen.value = '';
            evalexpression = '';
        }else if(btntext === 'CE'){
            backspc();
        } 
        else if (btntext === 'sin') {
            screen.value = Math.sin(eval(evalexpression));
            evalexpression = screen.value;
        } 
        else if (btntext === 'cos') {
            screen.value = Math.cos(eval(evalexpression));
            evalexpression = screen.value;
        } 
        else if (btntext === 'tan') {
            screen.value = Math.tan(eval(evalexpression));
            evalexpression = screen.value;
        } 
        else if(btntext === '√'){
            screen.value = Math.sqrt(eval(evalexpression),2);
            evalexpression = screen.value;
        }
        else if(btntext === 'e'){
            screen.value +='2.71828182846';
            evalexpression+='2.71828182846';
        }
        else if(btntext === 'π'){
            screen.value +='3.14159265359';
            evalexpression+='3.14159265359';
        }
        else if(btntext === 'log'){
            
            screen.value = Math.log(eval(evalexpression));
            evalexpression =screen.value;
        }
        else if(btntext == 'xy'){
            screen.value = eval(evalexpression) + '**';
            evalexpression = screen.value;
            
        }
        
        else if(btntext == 'x!'){
            let n = eval(evalexpression);
            if(n<0) {
                screen.value = "Error";
                return;
            }
            screen.value = xfact(n);
            evalexpression = screen.value;
        }
        
        else {
            screen.value += btntext;
            evalexpression += btntext;
        }

    });
}

function xfact(n){
    
    let fact = 1;
    for(let i=2; i<=n; i++){
        fact = fact*i;
    }
    return fact;
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
    evalexpression = screen.value;
}





