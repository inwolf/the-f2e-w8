<script>
export default {
  data() {
    return {
      selected: 0,
      done: false
    };
  },
  mounted() {
    this.initAnimation();
  },
  beforeDestroy() {},
  methods: {
    initAnimation() {
      var overlay = document.getElementsByClassName("overlay");
      var square = document.getElementsByClassName("square");
      var triangle = document.getElementsByClassName("triangle");
      var circle = document.getElementsByClassName("circle");
      setTimeout(() => {
        TweenLite.to(overlay, 1, { width: "422px" });
        TweenLite.to(square, 1, { top: 108, delay: 1 });
        TweenLite.to(triangle, 1.2, { top: 320, delay: 1 });
        TweenLite.to(circle, 1.3, { top: 504, delay: 1 });

        TweenLite.to(square, 4.5, { rotation: 360, delay: 2.6 });
        TweenLite.to(triangle, 4.5, { rotation: -360, delay: 2.6 });
        TweenLite.to(circle, 2.25, { left: 60, delay: 2.6 });
        TweenLite.to(circle, 2.25, { left: 82, delay: 4.6 });
      }, 6e2);
    },
    endAnimation() {
      var self = this;
      var overlay = document.getElementsByClassName("overlay");
      setTimeout(() => {
        TweenLite.to(overlay, 1, {
          width: "100%",
          onComplete: function() {
            self.$emit("update", self.selected);
          }
        });
      }, 6e2);
    },
    submit(score) {
      if (this.selected) {
        return;
      }
      this.selected = score;
      setTimeout(() => {
        this.done = true;
        this.endAnimation();
      }, 5e2);
    }
  }
};
</script>


<template lang="pug">
  .step-question-1
    .question-container(:class="{hidden:done}")
      .title.text-fuchsia Q1
      .subtitle.text-white If one day you get a gift that can change the rule of the world, which ability will you choose?
      .subtitle-2.text-dark-blue Choose the answer appeared in your mind instantly
      button.button(type="button", @click="submit(1)", :class="{active: selected===1}") Destroy all humans in the world
      button.button(type="button", @click="submit(3)", :class="{active: selected===3}") Make the war never happened
      button.button(type="button", @click="submit(5)", :class="{active: selected===5}") You won’t get old and live forever
    .overlay.bg-dark-blue.z-100
      .square.bg-fuchsia.z-200(:class="{hidden:done}")
      .triangle.bb-white.z-300(:class="{hidden:done}")
      .circle.bg-black.z-400(:class="{hidden:done}")
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.step-question-1 {
  height: 100vh;
  min-height: 768px;
  min-width: 1024px;
  // overflow: hidden;
  position: relative;
  background-color: $light-blue;
  color: $white;
  > * {
    position: absolute;
  }
}

.question-container {
  margin-left: 122px;
}

$circle-radius: 402px;
.circle {
  width: $circle-radius;
  height: $circle-radius;
  top: 100%;
  left: 82px;
}

$square-edge: 170px;
.square {
  width: $square-edge;
  height: $square-edge;
  top: 100%;
  left: 69px;
}

$triangle-bottom: 147px;
$triangle-height: 127.3px;
.triangle {
  border-left-width: $triangle-bottom / 2;
  border-right-width: $triangle-bottom / 2;
  border-bottom-width: $triangle-height;
  top: 100%;
  left: 299px;
}

.overlay {
  height: 100%;
  overflow: hidden;
  right: 0;
  > * {
    position: absolute;
  }
}
</style>
