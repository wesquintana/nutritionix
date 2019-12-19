<template>
  <div class="food-details">
    <ul>
      <li v-for="food in foodData" :key="food.name">
        <p>This is {{food.name}}</p>
        <p>Calories: {{food.calories}}</p>
        <p>Fat: {{food.fat}}</p>
        <p>Carbs: {{food.carbohydrates}}</p>
        <p>Protein: {{food.protein}}</p>
        <p>Serving Quantity: {{food.servingQty}} {{food.servingUnit}}</p>
        <img :src="food.imgUrl" />
      </li>
    </ul>
    <button type="button" @click="addToLog">Add to Log</button>
  </div>
</template>
<script>
export default {
  name: "FoodDetails",
  data() {
    return {};
  },
  computed: {
    foodData() {
      return this.$store.state.activeFoods;
    }
  },
  methods: {
    addToLog() {
      this.$store.dispatch("createLog");
    }
  }
};
</script>
<style>
</style>