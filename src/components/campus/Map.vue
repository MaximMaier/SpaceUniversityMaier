<template>
  <div class="map-container">
    <img
      src="@/assets/img/maps/map.jpg"
      alt="Campus Map"
      class="map-image"
      @wheel="zoomMap"
      :style="{ transform: `scale(${scale})` }"
    />
    <input
      type="range"
      min="1"
      max="3"
      step="0.1"
      v-model="scale"
      class="zoom-slider"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      scale: 1,
    };
  },
  methods: {
    zoomMap(event) {
      event.preventDefault();
      const zoomFactor = 0.1;
      if (event.deltaY < 0) {
        this.scale += zoomFactor;
      } else {
        this.scale -= zoomFactor;
      }
      this.scale = Math.min(Math.max(1, this.scale), 3); // Limit zoom scale between 1 and 3
    },
  },
};
</script>

<style scoped>
.map-container {
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.map-image {
  max-width: 40%; /* Adjust the value as needed */
  max-height: 40%; /* Adjust the value as needed */
  transition: transform 0.2s ease-in-out;
}

.zoom-slider {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: rotate(270deg) translateY(-50%);
  transform-origin: center center;
  height: 150px; /* Adjust the value as needed */
}
</style>