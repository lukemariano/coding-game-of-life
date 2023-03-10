<template>
  <div>
    <app-stats
      :current-tick="currentTick"
      :cell-count="cellCount"
      :cells-alive="cellsAlive"
      :cells-created="cellsCreated"
      :current-speed="currentSpeed"
    />
    <div
      class="game-grid columns"
      @mousedown="isMouseDown = true"
      @mouseup="isMouseDown = false"
      @mouseleave="isMouseDown = false"
    >
      <div v-for="(col, indexX) in gridList" :key="indexX" class="game-column">
        <app-cell
          v-for="(isAlive, indexY) in col"
          :key="indexY"
          :status-obj="isAlive"
          :x-pos="indexX"
          :y-pos="indexY"
          :is-mouse-down="isMouseDown"
          @wasUpdated="updateCellCount"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Cell from "@/components/CellGrid.vue";
import Stats from "@/components/StatsApp.vue";
export default {
  components: {
    "app-cell": Cell,
    "app-stats": Stats,
  },
  props: {
    message: {
      default: "",
      type: String,
    },
    importToken: {
      default: "",
      type: String,
    },
    currentSpeed: {
      default: 0,
      type: Number,
    },
  },
  data() {
    return {
      width: 46,
      height: 20,
      gridList: [],
      // Stats that get passed down to the app-stats component
      currentTick: 0,
      cellCount: 0,
      cellsAlive: 0,
      cellsCreated: 0,
      // A prop that gets used by the app-cell component (drag)
      isMouseDown: false,
    };
  },
  computed: {},
  watch: {
    /**
     * Watches for changes in the message prop
     * that gets passed down from the App component
     * and then handles the input on a specific tick.
     *
     * @param {string} val - the value
     */
    message: function (val) {
      if (val === "nextStep") {
        this.update();
        this.currentTick++;
      } else if (val === "redoSession") {
        this.reset();
      } else if (val === "randomSeed") {
        this.randomSeed();
      }
    },
  },
  created() {
    this.cellCalc();
  },
  methods: {
    /**
     * Creates a 2D-Array during runtime for
     * the website to use for most operations.
     */
    cellCalc: function () {
      for (let i = 0; i < this.width; i++) {
        this.gridList[i] = [];
        for (let j = 0; j < this.height; j++) {
          this.gridList[i][j] = { isAlive: false };
        }
      }
      this.cellCount = this.width * this.height;
    },
    /**
     * Changes the 'isAlive' object property
     * of a specific cell to the one requested
     * in the param.
     *
     * Usage to describe params
     *
     * @param {number} x - the x position
     * @param {number} y - the y position
     * @param {boolean} bool - the new boolean
     */
    setCell: function (x, y, bool) {
      if (this.gridList[x][y].isAlive != bool) {
        this.gridList[x][y].isAlive = bool;
        this.updateCellCount(bool);
      }
      // let row = this.gridList[x];
      // row.splice(y, 1, {isAlive: true});
      // this.gridList.splice(x, 1, row);
    },
    /**
     * The main function that updates the grid
     * every tick based on the game of life rules.
     */
    update: function () {
      let tempArr = [];
      for (let i = 0; i < this.width; i++) {
        tempArr[i] = [];
        for (let j = 0; j < this.height; j++) {
          let status = this.gridList[i][j].isAlive;
          let neighbours = this.getNeighbours(i, j);
          let result = false;
          // Rule 1:
          // Any live cell with fewer than two live neighbours dies,
          // as if by under population
          if (status && neighbours < 2) {
            result = false;
          }
          // Rule 2:
          // Any live cell with two or three neighbours lives on
          // to the next generation
          if ((status && neighbours == 2) || neighbours == 3) {
            result = true;
          }
          // Rule 3:
          // Any live cell with more than three live neighbours dies,
          // as if by overpopulation
          if (status && neighbours > 3) {
            result = false;
          }
          // Rule 4:
          // Any dead cell with exactly three live neighbours becomes
          // a live cell, as if by reproduction
          if (!status && neighbours == 3) {
            result = true;
          }
          tempArr[i][j] = result;
        }
      }
      // set new gridList content
      for (let i = 0; i < this.width; i++) {
        for (let j = 0; j < this.height; j++) {
          this.setCell(i, j, tempArr[i][j]);
        }
      }
    },
    /**
     * Returns the amount of neighbours for
     * a specific cell on the grid.
     *
     * @param {number} posX - the x position
     * @param {number} posY - the Y position
     * @return {number} neighbours - amount of neighbours
     */
    getNeighbours: function (posX, posY) {
      let neighbours = 0;
      if (posX <= this.width && posY <= this.height) {
        for (let offsetX = -1; offsetX < 2; offsetX++) {
          for (let offsetY = -1; offsetY < 2; offsetY++) {
            let newX = posX + offsetX;
            let newY = posY + offsetY;
            // check if offset is:
            // on current cell, out of bounds and if isAlive
            // for cell true
            if (
              (offsetX != 0 || offsetY != 0) &&
              newX >= 0 &&
              newX < this.width &&
              newY >= 0 &&
              newY < this.height &&
              this.gridList[posX + offsetX][posY + offsetY].isAlive == true
            ) {
              neighbours++;
            }
          }
        }
      }
      return neighbours;
    },
    /**
     * Resets all gridList cells back to the
     * start value.
     */
    reset: function () {
      this.currentTick = 0;
      this.cellsAlive = 0;
      this.cellsCreated = 0;
      this.gridList.forEach((col) => {
        col.forEach((cell) => {
          cell.isAlive = false;
        });
      });
    },
    /**
     * Populates and overwrites gridList with cells.
     */
    randomSeed: function () {
      for (let i = 0; i < this.width; i++) {
        for (let j = 0; j < this.height; j++) {
          let rand = Math.random();
          if (rand < 0.2) {
            this.setCell(i, j, true);
          } else {
            this.setCell(i, j, false);
          }
        }
      }
    },

    /**
     * Updates the current cellcount on each new tick.
     *
     * @param {boolean} bool - boolean based on cell isAlive status
     */
    updateCellCount: function (bool) {
      if (bool) {
        this.cellsAlive++;
        this.cellsCreated++;
      } else {
        this.cellsAlive--;
      }
    },
  },
};
</script>

<style lang="scss">
.game-grid {
  border-top: 1px solid #1a0707;
  border-left: 1px solid #1a0707;
  display: flex;
  flex: 1;
  justify-content: center;
}
.game-column {
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0 auto;
  flex-direction: column;
}
</style>
