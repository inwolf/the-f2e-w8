<template lang="pug">
  .step-opening
    .square.bg-black.z-100
    .circle.bg-dark-blue.z-200
    .star.z-300
      .triangle.bb-fuchsia
      .triangle.bb-fuchsia.rotate-180
    .opening-title.z-500
      .title GEOMETRY PERSON
      .subtitle-2 find your core personality type in shapes!
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.step-opening {
  height: 100vh;
  width: 100vw;
  position: relative;
  background-color: $light-blue;
  > * {
    position: absolute;
  }
}

.subtitle-2 {
  line-height: 36px;
}

.opening-title {
  @extend .center;
  width: 100%;
  text-align: center;
  color: $white;
}

.circle {
  @extend .center;
  width: 539px;
  height: 534px;
  // position: absolute;
}

$square-edge: 430px;
.square {
  @extend .center;
  width: $square-edge;
  height: $square-edge;
}

$triangle-bottom: 365px;
$triangle-height: 313px;
.triangle {
  border-left-width: $triangle-bottom / 2;
  border-right-width: $triangle-bottom / 2;
  border-bottom-width: $triangle-height;
}

$star-overlap: 58px;
.triangle.rotate-180 {
  position: absolute;
  top: $star-overlap;
}

.star {
  @extend .center;
  height: $triangle-height + $star-overlap;
}
</style>
