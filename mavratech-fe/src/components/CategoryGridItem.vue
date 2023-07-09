<template>
  <div class="category">
    <div class="category-inner">
      <div class="category-image-wrap">
        <img :src="category.imageUrl" class="image" />
      </div>
      <div class="category-detail">
        <h2>{{ category.name }}</h2>
        <h3>{{ category.description }}</h3>
      </div>
      <div class="category-service">
            <div v-for="serviceId in category.services" :key="serviceId">
                <router-link :to="getServiceDetailRoute(serviceId)">
                    {{ getServiceName(serviceId) }}
                </router-link>
            </div>
      </div>
    </div>
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
    .category {
        flex: 1;
        width: 100%;
        padding: 25px;   
    }

    .category-inner {
        position: relative;
        padding: 25px;
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
        perspective: 1000px;
        background-image: linear-gradient(to bottom right, #ff0000, #6b6b6b54 75%);
    }

    .category-image-wrap {
        position: relative;
        z-index: 1;
        transform-origin: center;
    }

    .category-image-wrap .image {
        width: 100%;
        filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.25));
    }

    .category-detail {
        background-color: #FFF;
        padding: 25px;
        margin: 0px -25px -25px;
    }

    .category-detail h2 {
        font-size: 24px;
        font-weight: 700;
        color: #676767;
        margin-bottom: 15px;
    }

    .category-detail h3 {
        font-size: 12px;
        line-height: 1.5;
        font-weight: 300;
        color: #676767;
    }

    .category-service {
        margin-bottom: 5px;
        opacity: 0;
    }
</style>