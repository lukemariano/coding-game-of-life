<template>
  <div>
    <app-nav />
    <app-grid />
    <footer class="footer">
      <div class="container">
        <div class="columns">
          <div class="column is-fullwidth">
            <app-controller
              :is-running="isRunning"
              :main-component="mainComponent"
              @send="delegate($event)"
            />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// import HelloWorld from "../components/HelloWorld";
import NavBar from "../components/NavBar.vue";
import GridBoard from "../components/GridBoard.vue";
import ControllerGame from "@/components/ControllerGame.vue";

export default {
  name: "HomeView",

  components: {
    "app-nav": NavBar,
    "app-grid": GridBoard,
    "app-controller": ControllerGame,
  },
};
</script>
