<script>
export default {};
</script>


<template lang="pug">
  .step-question-1
    .title Q1
      .subtitle-2 in construction
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.step-question-1 {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  background-color: $light-blue;
  color: $white;
  > * {
    position: absolute;
  }
}

.overlay {
  width: 100vw;
  height: 100vh;
  opacity: 0;
}
</style>
