let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button =>{
    button.addEventListener('click',(e)=>{
        switch(e.target.innerText){
            case 'AC':
                display.innerText='';
                break;
            case '+/-':
                display.innerText = eval(0-display.innerText);
                break;
            case '%':
                display.innerText = eval(display.innerText*.01);
                /**
                 * need to fix this to equal apples version.
                 * again apple equals everything when first clicked, 
                 * mine only does it when equal sign is clicked
                 */
                break;
            case '×':
                display.innerText += '*';
                break;
            case '−':
                display.innerText += '-';
                break;
            case '÷':
                display.innerText += '/';
                break;
            case '.':
                if( display.innerText.includes('.')){
                    /**
                     * need to add something to fix periods
                     * for now with this code it only allows 
                     * one period added in the entire equation.
                     * Without this it adds periods without rules
                     * which results in errors if 
                     * numbers are 2.3.3. etc.
                     * need to: either make the display learn that anything between operators is fair game for a single dot. OR turn every input into part of an array, that creates new arrays every operator as a split.
                     */
                    break;
                }else{
                    display.innerText += '.';
                }
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                }catch{
                    display.innerText = "Error"
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});
