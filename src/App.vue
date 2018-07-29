<template>
  <div id="app">
    <opening v-if="question===0" @update="question++"></opening>
    <question1 v-if="question===1" @update="addScore"></question1>
    <template v-if="question===2">
      <div class="subtitle text-black">That's it for now...</div>
    </template>
  </div>
</template>

<script>
import Opening from "./components/StepOpening";
import Question1 from "./components/StepQuestion1";

export default {
  name: "app",
  components: {
    Opening,
    Question1
  },
  data() {
    return {
      question: 0,
      score: 0
    };
  },
  methods: {
    addScore(val) {
      this.score += val;
      this.question++;
    }
  }
};
</script>

<style lang="scss" src="./assets/styles/all.scss"></style>
