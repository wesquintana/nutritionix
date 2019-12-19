<template>
  <div class="log">
    <form action="addFoodToLog">
      <input type="text" />
    </form>
  </div>
</template>
<script>
export default {
  name: "Log",
  data() {
    return {};
  },
  methods: {},
  props: ["logData"]
};
</script>
<style>
</style>