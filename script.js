var display = document.getElementById('display');
var buttons = document.getElementsByClassName('button');

var operand1=0;
var operand2=null;
var operator=null;

for(var i=0; i<buttons.length; i++)
{
    buttons[i].addEventListener('click', function(){
        var val = this.getAttribute('data-value');

        if(val ==="+" || val ==="-" || val ==="*" || val ==="/" || val === '%')
        {
            if(display.innerText === "")
            {
                display.innerText = "Error";
            }
            else
            {
                if(val === '%')
                {
                    operator = '/';
                    operand1 = parseFloat(display.innerText)*100;
                }
                else
                {
                    operator = val;
                    operand1 = parseFloat(display.innerText);
                }
                display.innerText="";
            }
        }
        else if(val ==="=")
        {
            if(display.innerText === "")
            {
                display.innerText = "Error";
            }
            else
            {
                operand2 = parseFloat(display.innerText);
                display.innerText = eval(operand1+" "+operator+" "+operand2);
            }
        }
        else if(val === 'allClear')
        {
            display.innerText="";
        }
        else if(val === "clear")
        {
            
            display.innerText = display.innerText.substring(0, display.innerText.length-1);
        }
        else
        {
            display.innerText+=val;
        }
    });
}