<template>
  <div id="page-wrap">
    <CategoryGrid :categories="categories" :services="services" />
  </div>
</template>

<script>
import { categories } from "../mock-data";
import { services } from "../mock-data";
import CategoryGrid from "../components/CategoryGrid.vue";

export default {
  name: "CategoryPage",
  components: {
    CategoryGrid,
  },
  data() {
    return {
      categories,
      services,
    };
  },
};
</script>
