<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="addLog">
          <span>Date:&nbsp;</span>
          <input type="date" min="2019-01-01" max="2019-12-19" v-model="date" />
          <button type="submit">Create Log</button>
        </form>
        <form @submit="findFood">
          <input type="text" placeholder="What did you eat?" v-model="query" />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div class="col-12">
        <food-details />
      </div>
    </div>
  </div>
</template>
<script>
import foodDetails from "@/components/FoodDetails";
export default {
  name: "Home",
  data() {
    return {
      date: "",
      query: ""
    };
  },
  computed: {
    food() {
      this.$store.state.activeFood;
    }
  },
  methods: {
    findFood() {
      this.$store.dispatch("findFood", this.query);
      // console.log(this.$store.state.activeFood);
    },
    addLog() {
      this.$store.dispatch("createLog", this.date);
    }
  },
  components: {
    foodDetails
  }
};
</script>
<style>
</style>