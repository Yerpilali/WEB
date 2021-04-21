var app = new Vue ({
    el: '#calculator',
    data (){
         input = document.querySelector('.input');
         power = "";
    },
    methods: {
        clear(){
            input.textContent ="0";
            power = "";
        },
        insert(num){
            if (input.textContent == 0){
                input.textContent = "";
                input.textContent +=num;
            }
            else{
                input.textContent +=num;
            }

        },
        back() {
            let exp = input.textContent;
            input.textContent = exp.substring(0, exp.length -1);
            if(input.textContent == 0){
                input.textContent = "0";
            }
        },
        equal() {
            let exp = input.textContent;
            if (input.textContent.includes('^')) {
                let tmp = input.textContent.split('^')
                let num = eval(power);
                let pow = +tmp[1]
                input.textContent = Math.pow(num, pow);
                power = "";
                return;  
            }
            if (exp) {
                input.textContent = eval(exp);
            }
        },
        percent() {
                input.textContent = eval(input.textContent) / 100;
        },
        constant(name){
            if (input.textContent == 0) {
                input.textContent = "";
            }
            if (name == "pi"){
                input.textContent += Math.PI.toFixed(8);
            }
            if (name == "e") {
                input.textContent += Math.E.toFixed(8);
            }
        },
        operation(name){
            if (name == "sqrt") {
                input.textContent = Math.sqrt(eval(input.textContent));  
            }
            if (name == "sqr") {
                input.textContent = Math.pow(eval(input.textContent), 2);
            }
            if (name == "^-1") {
                input.textContent = Math.pow(eval(input.textContent), -1);
            }
            if (name == "^") {
                power = input.textContent;
                input.textContent += "^";
            }
        },
        factorial(n) {
            return (n != 1) ? n * factorial(n - 1) : 1;
        },
        fact() {
            input.textContent = factorial(+eval(input.textContent));
        }
        
    }

})



 