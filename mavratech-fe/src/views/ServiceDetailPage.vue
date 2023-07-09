<template>
  <div id="page-wrap" v-if="service">
    <div id="img-wrap">
      <img v-bind:src="service.imageUrl" />
    </div>
    <div id="service-details">
      <h1>{{ service.name }}</h1>
      <h4>Description</h4>
      <p>{{ service.description }}</p>
    </div>
  </div>
  <NotFoundPage v-else/>
</template>
<!-- To-Do: -->
<script>
  import { services } from "../mock-data"
  import NotFoundPage from './NotFoundPage.vue';
  export default {
      name: "ServiceDetailPage",
      components: {
        NotFoundPage,
      },
      data() {
        return {
          service: services.find((s) => s.id === this.$route.params.id),
        }
      }
  };
</script>

<style scoped>
  #page-wrap {
    margin-top: 16px;
    padding: 16px;
    max-width: 600px;
  }

  #img-wrap {
    text-align: center;
  }

  img {
    width: 400px;
  }

  #service-details {
    padding: 16px;
    position: relative;
  }
</style>