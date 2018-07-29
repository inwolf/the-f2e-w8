<script>
export default {
  mounted() {
    this.initAnimation();
  },
  beforeDestroy() {},
  methods: {
    initAnimation() {
      var self = this;
      var square = document.getElementsByClassName("square");
      var star = document.getElementsByClassName("star");
      var circle = document.getElementsByClassName("circle");
      var overlay = document.getElementsByClassName("overlay");
      setTimeout(() => {
        TweenLite.to(square, 5, { rotation: -360 });
        TweenLite.to(circle, 5, { rotation: -360 });
        TweenLite.to(star, 5, { rotation: 360 });
        TweenLite.to(circle, 0.5, { scale: 1.1 });
        TweenLite.to(circle, 4, { scale: 0.9, delay: 0.5 });
        TweenLite.to(circle, 0.5, { scale: 1, delay: 4.5 });

        TweenLite.to(square, 0.7, { scale: 7, delay: 4.8 });
        TweenLite.to(circle, 0.7, { scale: 7, delay: 5.1 });
        TweenLite.to(star, 0.8, { scale: 7, delay: 5.4 });
        TweenLite.to(overlay, 0.4, { opacity: 1, delay: 5.8 });
        TweenLite.set(overlay, {
          css: { className: "-=bg-dark-blue" },
          delay: 6.2
        });
        TweenLite.set(overlay, {
          css: { className: "+=bg-light-blue" },
          delay: 6.2,
          onComplete: function() {
            self.$emit("update", true);
          }
        });
      }, 6e2);
    }
  }
};
</script>


<template lang="pug">
  .step-opening
    .square.bg-black.z-100
    .circle.bg-dark-blue.z-200
    .star.z-300
      .triangle.bb-fuchsia
      .triangle.bb-fuchsia.rotate-180
    .opening-title.z-400
      .title GEOMETRY PERSON
      .subtitle-2 find your core personality type in shapes!
    .overlay.bg-dark-blue.z-500
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
  overflow: hidden;
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

.overlay {
  width: 100vw;
  height: 100vh;
  opacity: 0;
}
</style>
