<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon  :icon="ellipse" />
          <ion-label>Memes</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon  :icon="ellipse" />
          <ion-label>Rick and Morty</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon  :icon="square" />
          <ion-label>Pokemon</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square } from 'ionicons/icons';

export default{
  components: {IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet},
  data(){
    return{
      ellipse, square
    }
  }

}
</script>
