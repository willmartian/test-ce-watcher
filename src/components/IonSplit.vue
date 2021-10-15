<template>
  <ion-app>
    <ion-split-pane when="md" content-id="main-content">
      <ion-menu content-id="main-content">
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Menu</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <ion-list>
            <ion-list-header> Navigate </ion-list-header>
            <ion-menu-toggle auto-hide="false">
              <ion-item button>
                <ion-icon slot="start" :icon="home"></ion-icon>
                <ion-label> Chat </ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>
        </ion-content>
      </ion-menu>

      <div class="ion-page" id="main-content">
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-menu-toggle>
                <ion-button>
                  <ion-icon slot="icon-only" :icon="menu"></ion-icon>
                </ion-button>
              </ion-menu-toggle>
            </ion-buttons>
            <ion-title>Header</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <h1>Main Content</h1>
        </ion-content>
      </div>
    </ion-split-pane>
  </ion-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonLabel,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonButton,
  IonButtons,
  IonIcon,
  IonContent,
  IonList,
  IonListHeader,
  IonMenuToggle,
} from "@ionic/vue";
import { menu, home } from "ionicons/icons";

export default defineComponent({
  name: "ChatView",
  components: {
    IonApp,
    IonSplitPane,
    IonMenu,
    IonLabel,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonItem,
    IonButton,
    IonButtons,
    IonIcon,
    IonContent,
    IonList,
    IonListHeader,
    IonMenuToggle,
  },
  setup() {
    return {
      menu,
      home,
    };
  },
});
</script>
