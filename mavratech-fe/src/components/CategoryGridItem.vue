<template>
  <div class="category">
    <div class="card">
      <div class="imgBx">
        <img :src="category.imageUrl" class="image" />
      </div>
      <div class="content">
        <h2>{{ category.name }}</h2>
        <h3>{{ category.description }}</h3>
        <div>
          <div class="service" v-for="serviceId in category.services" :key="serviceId">
              <router-link :to="getServiceDetailRoute(serviceId)">
                {{ getServiceName(serviceId) }}
              </router-link>
          </div>
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
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 100px 50px;
    padding: 100px 50px;
  }
  .category .card {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 350px;
    height: 305px;
    background: radial-gradient(circle at 10% 20%, rgb(238, 56, 56) 0%, rgba(206, 21, 0, 0.92) 90.1%);
    border-radius: 20px;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
    transition: 0.5s;
  }
  .category .card:hover {
    height: 400px;
  }
  .category .card .imgBx {
    position: absolute;
    top: 20px;
    width: 300px;
    height: 220px;
    border-radius: 12px;
    overflow: hidden;
    transition: 0.5s;
  }
  .category .card:hover .imgBx {
    top: -100px;
    scale: 0.75;
  }
  .category .card .imgBx img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .category .card .content {
    position: absolute;
    top: 250px;
    width: 100%;
    padding: 0 30px;
    height: 31px;
    overflow: hidden;
    text-align: center;
    color: #444;
    font-family: 'montseratt', sans-serif;
    transition: 0.5s;
  }
  .category .card:hover .content{
    top: 150px;
    height: 250px;
  }
  .category .card .content h2 {
    font-size: 1.5em;
    font-weight: 700;
    color: inherit;
    font-family: inherit;
  }
  .category .card .content h3 {
    font-weight: 700;
    color: inherit;
    font-family: inherit;
  }
  .category .card .content .service a {
    color: inherit;
    text-decoration: none;
    font-family: inherit;
  }
</style>

