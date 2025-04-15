
let screen = document.querySelector('#screen');
let btn = document.querySelectorAll('.btn');

for( let item of btn){
    item.addEventListener('click',(e)=>{
        let btntext = e.target.innerText;
        if(btntext == '×'){
            btntext = '*';
        }
        else if(btntext == '÷'){
            btntext = '/';
        }
        
        else if(btntext == '='){
            try{
                screen.value = eval(screen.value);
                
            }catch(e){
                screen.value = "Error"
            }
            
        }else if(btntext == 'CE'){
            screen.value = '0';
        }else if(btntext == 'AC'){
            if(screen.value != ''){
                screen.value = '';
                screen.placeholder = '';
            }else if(screen.value == ''){
                screen.value = '0';
                screen.placeholder='0';
            }
        }
        else if(btntext == 'sin'){
            screen.value = Math.sin(eval(screen.value));
        }

        else if(btntext == 'cos'){
            screen.value = Math.cos(eval(screen.value));
        }
        else if(btntext == 'tan'){
            screen.value = Math.tan(eval(screen.value));
        }
        
        else{
            screen.value +=btntext;
        }
    });
}





