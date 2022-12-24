<template>
  <div class="box">
    <div class="columns is-fullwidth is-gapless">
      <div class="column is-size-7-mobile is-half-mobile">
        <strong class="has-text-white"
          >Contagem Atual: {{ currentTick }}</strong
        >
      </div>
      <div class="column is-size-7-mobile is-half-mobile">
        <strong class="has-text-white"
          >Contagem de células: {{ cellCount }}</strong
        >
      </div>
      <div class="column is-size-7-mobile is-half-mobile">
        <strong class="has-text-white">Células Vivas: {{ cellsAlive }}</strong>
      </div>
      <div class="column is-size-7-mobile is-half-mobile">
        <strong class="has-text-white"
          >Células Criadas: {{ cellsCreated }}</strong
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentTick: {
      default: 0,
      type: Number,
    },
    cellCount: {
      default: 0,
      type: Number,
    },
    cellsAlive: {
      default: 0,
      type: Number,
    },
    cellsCreated: {
      default: 0,
      type: Number,
    },
    currentSpeed: {
      default: 0,
      type: Number,
    },
  },
};
</script>

<style scoped>
.box {
  background-color: rgba(0, 0, 0, 0.862);
}
.columns {
  display: flex;
  flex-wrap: wrap;
}
.column {
  margin: 0;
}
</style>
