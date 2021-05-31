<template actionBarHidden="true">
    <Page actionBarHidden="true"  class="app">
      <StackLayout>
        <Label class='city'  :text='listOfItems[this.selectedItem]' @tap='city()'/>
        <ScrollView orientation="vertical"> 
           <StackLayout class='forecast' orientation="vertical">
              <Image class='img' :src="imagePath" stretch="none" @tap='check()'/> 
              <label class='text'> Температура: {{weather.fact.temp}}</label>
              <label class='text'> Ветер {{weather.fact.wind_speed}} m/c, Влажность {{weather.fact.humidity}}%</label>
              <label class='text'> Давление {{weather.fact.pressure_mm}} мм рт. ст.</label>
           </StackLayout>
        </ScrollView>
      </StackLayout>
    </Page>
</template>

<script >
import { Http } from '@nativescript/core'
import * as ApplicationSettings from "application-settings";
  export default {
    data() {
      return {
        listOfItems: [
          { title: "Ханты-Мансийск",
            toString: () => {
              return 'Ханты-Мансийск';
            },
            latitude: 61.0041700,
            longitude: 69.0019400
          }, 
          { title: "Омск",
            toString: () => {
              return 'Омск';
            },
            latitude: 54.9924400,
            longitude: 73.3685900
          },
          { title: "Тобольск",
            toString: () => {
              return 'Тобольск';
            },
            latitude: 58.1980700,
            longitude: 68.2545700
          },
          { title: "Тюмень",
            toString: () => {
              return 'Тюмень';
            },
            latitude:  57.1522200,
            longitude: 65.5272200
          },
          { title: "Екатеринбург",
            toString: () => {
              return 'Екатеринбург';
            },
            latitude: 56.8519000,
            longitude: 60.6122000
          },
          { title: "Челябинск",
            toString: () => {
              return 'Челябинск';
            },
            latitude: 55.1540200,
            longitude: 61.4291500
          },
          { title: "Курган",
            toString: () => {
              return 'Курган';
            },
            latitude: 55.4500000,
            longitude: 65.3333300
          },
        
        ],
        selectedItem: 0,
        weather: {
          fact: {
            temp : 0,
            feels_like : 0,
            icon : 'name',
            condition : 'rain',
            wind_speed : 0,
            wind_dir : 'wind_dir',
            pressure_mm	: 0,
            }
        },
        imagePath: '',
        cities:['Ханты-Мансийск', 'Омск', 'Тобольск', 'Тюмень', 'Екатеринбург', 'Челябинск', 'Курган']
      }
    },
    mounted(){
      if(ApplicationSettings.getString('weather')){
        this.weather.fact=JSON.parse(ApplicationSettings.getString('weather'));
        console.log('Погода загружена');
      }
      if(ApplicationSettings.getString('city')){
        this.selectedItem=JSON.parse(ApplicationSettings.getString('city'));
        console.log('Место загружено');
      }
      else{
        this.city()
      }
      this.imagePath = '~/res/' + String(this.weather.fact.condition) + '.png';
    },
    methods:{
      check(){
        Http.request({
        url: 'https://api.weather.yandex.ru/v2/forecast?limit=1&lat=' +  String(this.listOfItems[this.selectedItem].latitude) + '&lon=' + String(this.listOfItems[this.selectedItem].longitude),
        method: "GET",
        headers: {"X-Yandex-API-Key": "4bad7e5e-8319-4e52-9be4-4a0ad527224f"},
        }).then(
        (response) => {
        this.weather = response.content.toJSON();
        this.imagePath = '~/res/' + String(this.weather.fact.condition) + '.png';
        console.log(`Путь изображения: ${this.imagePath}`)
        ApplicationSettings.setString('weather', JSON.stringify(this.weather.fact));        
        console.log(`Сохранено как: ${JSON.stringify(this.weather)}`)
      });
      },
      city(){
        action("Выберите город:", "отмена", this.cities)
        .then(result => {
           this.selectedItem = this.cities.indexOf(result);
           console.log(this.selectedItem )
           ApplicationSettings.setString('city', JSON.stringify(this.selectedItem));        
           this.check();
           
        });
      }
    }
  }
</script>

<style scoped>
.app{
    background-color: #bebebe;
}
.forecast{
  font-size: 20;
  margin: 50px 70px;
  padding: 20px;
  padding-bottom: 90px;
  background-color: #979797;
  border-radius: 40%;
}
.img{
  margin: 50px 32%;
}
.text{
    margin: 50px auto;
    background-color: #979797;
    border-radius: 10%;
    padding: 40px;
}
.city{
  font-size: 25;
  text-align: center;
  height: 200px;
  margin: 50px 70px;
  padding: 50px;
  border-radius: 40%;
  background-color: #cf7200;
}
</style>