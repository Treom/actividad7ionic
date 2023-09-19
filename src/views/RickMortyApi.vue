<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>

      <select v-model="id">
        <option v-for="(respuestas, i) in respuesta" :key="i" :value="respuestas.id">{{ respuestas.name }}</option>
      </select>
    
      <div v-if="id!=''">
      <ion-card>
        <ion-card-header>
          <ion-card-title>
           <b>{{ personaje.name }}</b> 
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <img :src="personaje.image" alt="">
        </ion-card-content>
      </ion-card>
    </div>
      
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/vue';

export default {
  components:{
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle,
    name: 'RickMorty'
  },
  data(){
    return{
      respuesta: {},
      id:'' ,
      personaje: {}
    }
  },
  methods:{
    getData(){
      fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => {
        // console.log(data)
      //   data.results.forEach(personaje =>{
      //   this.respuesta = personaje
      //   console.log(personaje)
      // })
      // Asigna data.results a this.respuesta
      this.respuesta = data.results;
      
        
      })
      .catch(error => console.log('Ha ocurrido un error'))

      
    },
    busqueda(){
      fetch(`https://rickandmortyapi.com/api/character/${this.id}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
      //   data.results.forEach(personaje =>{
      //   this.respuesta = personaje
      //   console.log(personaje)
      // })
      // Asigna data.results a this.respuesta
      this.personaje = data;
      console.log(data)
        
      })
      .catch(error => console.log('Ha ocurrido un error'))

    }
  },
  mounted(){
    this.getData()
    
  },
  watch:{
    id(antiguoValor, nuevoValor){
      if(antiguoValor!=nuevoValor){
        this.busqueda()
      }
    }
  }
}
</script>

<style scoped>
ion-card-header{
  background-color: blueviolet;
  border-top: 10px solid green;
}
ion-card-content{
  background-color: rgb(111, 226, 170);
}
</style>
