<template>
    <div id="page-wrap">
        <div class="grid-wrap">
            <div 
                v-for="category in categories" 
                class="category-item"
                v-bind:key="category.id"
            >
                <img v-bind:src="category.imageUrl" />
                <h3 class="category-name">{{ category.name }}</h3>
                <p class="category-service">
                    <span v-for="serviceId in category.services" :key="serviceId">
                        <router-link :to="getServiceDetailRoute(serviceId)">
                            {{ getServiceName(serviceId) }}
                        </router-link>
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import { categories } from "../mock-data";
    import { services } from "../mock-data";
    export default {
        name: "CategoryPage",
        data() {
            return  {
                categories, services
            }
        },
        methods: {
            getServiceName(serviceId) {
                if (serviceId !== null && serviceId !== undefined) {
                    const service = this.services.find((service) => service.id === serviceId.toString());
                    return service ? service.name : "Unknown Service";
                    }
                return "Unknown Service";
            },
            getServiceDetailRoute(serviceId) {
                return `/service/${serviceId}`;
            }
        },
    };
</script>

<!-- To-do: Fix the style of whole web-site according to plan  -->

<style scoped>
  .grid-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
  }

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