<template>
  <div class="grid-wrap">
    <CategoryGridItem
      v-for="category in categories"
      :key="category.id"
      :category="category"
      :services="services"
    />
  </div>
</template>

<script>
import CategoryGridItem from './CategoryGridItem.vue';

export default {
  name: "CategoryGrid",
  props: ["categories", "services"],
  components: {
    CategoryGridItem,
  },
};
</script>

<style scoped>
  .grid-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
  }
</style>