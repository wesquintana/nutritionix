export default class Food {
  constructor(f) {
    this.name = f.food_name;
    this.fat = f.nf_total_fat;
    this.calories = f.nf_calories;
    this.carbohydrates = f.nf_total_carbohydrates;
    this.protein = f.nf_protein;
    this.servingQty = f.serving_qty;
    this.servingUnit = f.serving_unit;
    this.imgUrl = f.photo.highres;
  }
}
