<template>
  <div class="category-item">
    <img :src="category.imageUrl" />
    <h3 class="category-name">{{ category.name }}</h3>
    <p class="category-service">
      <span v-for="serviceId in category.services" :key="serviceId">
        <router-link :to="getServiceDetailRoute(serviceId)">
          {{ getServiceName(serviceId) }}
        </router-link>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "CategoryGridItem",
  props: ["category", "services"],
  methods: {
    getServiceName(serviceId) {
      if (serviceId !== null && serviceId !== undefined) {
        const service = this.services.find((service) => service.id.toString() === serviceId.toString());
        return service ? service.name : "Unknown Service";
      }
      return "Unknown Service";
    },
    getServiceDetailRoute(serviceId) {
      return `/service/${serviceId}`;
    },
  },
};
</script>

<style scoped>
  .category-item {
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 2px 5px #888;
    display: flex;
    flex-direction: column;
    margin-bottom: 2%;
    padding: 20px;
    position: relative;
    width: 32%;
  }

  .category-name {
    margin-bottom: 0;
  }

  .category-service {
    margin-bottom: 0;
  }

  img {
    height: 200px;
    width: 200px;
  }

  a {
    width: 100%;
  }

  button {
    width: 100%;
  }
</style>