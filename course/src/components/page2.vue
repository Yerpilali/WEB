<template actionBarHidden="true">
<Page class="app">
<StackLayout>
<GridLayout columns='*' rows='30, 50, auto'>
   <label row = '0'  class = "message">Карта</label> 
</GridLayout>
<GridLayout columns='*, *, *, *, *' rows='*, *, *, *, *'>
    <Button class="btn" @tap="goback()" row="5" col="0" colSpan="5" text="Назад"/>
</GridLayout>
</StackLayout>
</Page> 
</template>

<script>
import App from './App';

   export default {
    methods:{
      goback: function(event){
        this.$showModal(App, {
          fullscreen: true,
        })
      }
      
    }
  }
</script>

<style>
    .app{
    background-color: #333333;
}
.message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #dfd7d7;
    }   
 .btn {
       font-size: 25;
       text-align: center;
       height: 200px;
       margin: 50px 70px;
       padding: 50px;
       border-radius: 40%;
       background-color: #cf7200;
    }    
</style>
