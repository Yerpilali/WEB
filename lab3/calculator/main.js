var vue = new Vue({
    el: '#app',
    data: {
      result: '',
      numbers: [1,2,3,4,5,6,7,8,9,0],
      operations: ['+','-','*','/', '(', ')','.'],
    
    },
    methods: {
      input: function(char) {
        this.result = this.result.toString();
        this.result+=char;
      },
      reset: function() {
        this.result = '';
      },
      calc: function() {
        try{
            this.result = eval(this.result);
            
            if (isNaN(this.result)) {
                throw new Error();
              }
        }
        catch{
            alert("invalid input")
            this.result = '';
        }
      },
      percent: function() {
          this.result = eval(this.result)/100;
      },
      back: function() {
        let exp = this.result;
        this.result = exp.substring(0, exp.length -1);
        if(this.result == 0){
            this.result = "";
        }
      },
      fact: function() {
        function factorial(n) {
            return (n != 1) ? n * factorial(n - 1) : 1;
        }
        this.result = factorial(+eval(this.result));
      },
      core: function() {
        this.result = Math.pow(eval(this.result), -1);
      },
      sqr: function() {
        this.result = Math.pow(eval(this.result), 2);
      },
      sqrt: function() {
        this.result = Math.sqrt(eval(this.result));
      }
    }
  })