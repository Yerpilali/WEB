<template>
    <Page class = "app">
      <ActionBar title="Поисковик кабинетов югу"/>
      <StackLayout>
        <GridLayout columns='*' rows='30, 50, auto'>
          <label row = '0'  class = "message">Корпус</label> 
        </GridLayout>
        <GridLayout columns="*, *, *, *, *" rows="*, *, *, *, *, *"> 
        <TextField class="input" v-model="newText" hint=""  @returnPress= "corp()" row="0" col="0" colSpan="5"/>
        <label row = '1' col='2' colSpan="2" class = "message">Кабинет</label> 
        <TextField class="input" v-model="newText" hint=""  @returnPress= "office()" row="2" col="0" colSpan="5"/>
        <Button class="btn" @tap="search()" row="4" col="0" colSpan="5" text="Найти"/>
        <Button class="btn" @tap="closeApp()" row="5" col="0" colSpan="5" text="Выход"/>
        </GridLayout>
      </StackLayout>
    </Page>
</template>

<script>
import page2 from './page2';
import * as application from "@nativescript/core/application";
   export default {
    methods:{
      search: function(event){
        this.$showModal(page2, {
          fullscreen: true,
        })
      },
      closeApp() {
        if (application.android) {
          application.android.foregroundActivity.finish();
        } else {
          exit(0);
        }
      }
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }
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

    .input{
      background-color: #FF8C00;
      border-radius: 10%;
      color: #000000;
      margin: 50px 30px;
      text-align: center;
      vertical-align: center;
    }
</style>
