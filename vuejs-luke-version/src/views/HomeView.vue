<template>
  <div>
    <h1>Hello Life</h1>
    <app-gameboard> </app-gameboard>
  </div>
</template>

<script>
import GameBoard from "@/components/GameBoard.vue";

export default {
  name: "HomeView",

  components: {
    "app-gameboard": GameBoard,
  },
};
</script>
