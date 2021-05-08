<template>
    <Page  class="app">
     <ActionBar class='header' title=""/>
         <GridLayout class="keyboard" columns="*, *, *, *, *" rows="*, *, *, *, *, *">
            <Label textWrap="true" class="result" v-model="result" row="0" col="0" colSpan="4"/>/>
            <Button  class="btn act" text="C" @tap="del()" row="1" col="0" colSpan="3"/>
            <Button  class="btn act" text="/" @tap="input('/')" row="1" col="3"/>
            <Button  class="btn act" text=")" @tap="input(')')" row="1" col="4"/>
            <Button  class="btn" text="7" @tap="input('7')" row="2" col="0"/>
            <Button  class="btn" text="8" @tap="input('8')" row="2" col="1"/>
            <Button  class="btn" text="9" @tap="input('9')" row="2" col="2"/>
            <Button  class="btn act" text="*" @tap="input('*')" row="2" col="3"/>
            <Button  class="btn act" text="(" @tap="input('(')" row="2" col="4"/>
            <Button  class="btn" text="4" @tap="input('4')" row="3" col="0"/>
            <Button  class="btn" text="5" @tap="input('5')" row="3" col="1"/>
            <Button  class="btn" text="6" @tap="input('6')" row="3" col="2"/>
            <Button  class="btn act" text="-" @tap="input('-')" row="3" col="3"/>
            <Button  class="btn act" text="%" @tap="proc('%')" row="3" col="4"/>
            <Button  class="btn" text="1" @tap="input('1')" row="4" col="0"/>
            <Button  class="btn" text="2" @tap="input('2')" row="4" col="1"/>
            <Button  class="btn" text="3" @tap="input('3')" row="4" col="2"/>
            <Button  class="btn act" text="+" @tap="input('+')" row="4" col="3"/>
            <Button  class="btn act" text=" √" @tap="sqrt(' √')" row="4" col="4"/>
            <Button  class="btn" text="0" @tap="input('0')" row="5" col="0" colSpan="2"/>
            <Button  class="btn" text="." @tap="input('.')" row="5" col="2"/>
            <Button  class="btn act" text="=" @tap="calc()" row="5" col="3" />
            <Button  class="btn act" text=" ^" @tap="sqr('^')" row="5" col="4"/>
         </GridLayout>
    </Page>
</template>

<script >
    export default  {
    data() {
        return {
            result: '',
      }
    },
    methods:{
            input: function(char){
                this.result = this.result.toString();
                this.result += char;
            },
            calc: function(){
                try{
                    this.result = eval(this.result);
                    if (isNaN(this.result)) {
                        throw new Error();
                  }
                }
                catch{
                    this.result = 'invalid input';
                }
            },
            
            del: function(){
                this.result = '';
            },

            proc: function() {
               this.result = eval(this.result)/100;
            },

            sqrt: function() {
             this.result = Math.sqrt(eval(this.result));    
            },

            sqr: function() {
              this.result = Math.pow(eval(this.result), 2);
            }
    } 
  }
</script>

<style scoped>
    .header{
        background-color: #373737;
    }
    .app{
        background-color: #373737;
    }
    .result{
        text-align: right;
        font-size: 28px;
        overflow-wrap: break-word;
        color: #fff;
    }
    .btn{
        background-color: rgb(2, 2, 2);
        color: rgb(243, 237, 237);
        border: solid;
        border-width: 2px;
        border-color: #000;
        width: 420px;
        height: 420px;
    }
    .btn[text="C"]{
        width: 1260px;
    }
    .btn[text='0']{
        width: 840px;
    }
    .btn:active {
         background-color: #9e6f0b;
    }
    .act {
        background-color: #928018;
    }
    .act:active {
        background-color: rgb(17, 16, 16);
    }
</style>