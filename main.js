// required abilities of a calculator

// accept user inputs of number > operator > number

// should accept decimal numbers

// store inputs

// recognize inputs and perform calculations

//return result

//optional features
// should accept multiple term arithmetic operations
//display all input as it is being entered
//store previous total as start of next operation
//clear button clears all entries
//should prevent invalid inputs (operators next to eachother, two decimal points)


const keys = document.querySelector('.calc-buttons');
    keys.addEventListener('click', event => {
        const {target} = event
        const {value} = target
        if(!target.matches('button')){
            return
        }else{
            calculator.parseInput(value)
            //console.log(value)
        }
    })

const calculator = {
    displayText: '0',
    prevTotal: null,

    parseInput(value){
        //have any of the special buttons(AC, decimal, =) been clicked?
        switch(value){
            case '=':
                //calculate answer
                this.calcAnswer(this.displayText)
                break
            case 'AC':
                //clear screen & stored values
                this.clearAll()
                break
            case '.':
                //create decimal
                if(this.displayText == 0){
                    //pass'0.'
                    this.addText('0.')
                }else{
                    //add value to text string
                    this.addText(value)
                }
                break
            default:
                //add value to text string
                this.addText(value)
                break
            
        }
        
    },
    addText(value){
        if(this.displayText == '0'){
            this.displayText = ''
        }else if(this.prevTotal !== null){
            this.displayText = this.prevTotal
            this.prevTotal = null
        }
        if(isNaN(+(value)) && isNaN(+(this.displayText))){
            if(isNaN(this.displayText.slice(-1))){
                return
            }
        }else if(value == '.' && this.displayText.slice(-1) == '.'){
            return
        }
        
        this.displayText += value
        //output display text to screen
        this.outputText(this.displayText)
    },
    outputText(text){
        document.querySelector('.screen').value = text
    },
    calcAnswer(equation){
        let result = Function("return " + equation)()
        this.outputText(result)
        //console.log(equation)
        //console.log(result)
        this.prevTotal = result
    },
    clearAll(){
        this.displayText = '0',
        this.prevTotal = null
        this.outputText(this.displayText)
    }
}