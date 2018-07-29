<template>
  <div id="app">
    <opening v-if="step==='opening'" @update="()=>step='question1'"></opening>
    <question1 v-if="step==='question1'"></question1>
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
      step: "opening"
    };
  }
};
</script>

<style lang="scss" src="./assets/styles/all.scss"></style>
