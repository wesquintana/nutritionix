<template>
  <div class="logs container-fluid">
    <header class="row">
      <div class="col">
        <h1>Logs</h1>
      </div>
    </header>
    <main class="row">
      <div v-for="log in logs" :key="log._id" class="col-12">
        <log-component :logData="log" />
      </div>
    </main>
  </div>
</template>
<script>
import LogComponent from "@/components/Log";
export default {
  name: "Logs",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getLogs");
  },
  computed: {
    logs() {
      return this.$store.state.logs;
    }
  },
  methods: {},
  components: {
    LogComponent
  }
};
</script>
<style>
</style>