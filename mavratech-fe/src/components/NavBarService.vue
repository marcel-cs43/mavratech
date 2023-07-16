<template>
    <div class="navbar-item" @click="isOpen = !isOpen">
        <a href="#">
            <h1>Služby</h1>
        </a>
        <svg viewBox="0 0 1030 638" width="10">
            <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#444"></path>
        </svg>
        <transition name="fade" appear>
            <div class="sub-menu" v-show="isOpen">
                <div v-for="service in services" :key="service.id" class="navbar-item">
                    <a :href="getServiceDetailRoute(service.id)">
                        {{ getServiceName(service.id) }}
                    </a>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { services } from '../mock-data';
export default {
    name: "NavBarService",
    props: ["services"],
    methods: {
        getServiceName(serviceId) {
            console.log('getServiceDetailRoute:', serviceId);
            if (serviceId !== null && serviceId !== undefined) {
                const service = this.services.find((service) => service.id.toString() === serviceId.toString());
                return service ? service.name : "Unknown Service";
            }
            return "Unknown Service";
        },
        getServiceDetailRoute(serviceId) {
            console.log('getServiceName:', serviceId);
            return `/service/${serviceId}`;
        },
    },
    data () {
        return {
            isOpen: false
        }
    },
}
console.log(services)
</script>

<style>
nav .navbar-item .sub-menu {
  position: absolute;
  top: calc(100% + 3px);
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  border-radius: 0px 0px 16px 16px;
  background: radial-gradient(circle at 10% 20%, rgb(238, 56, 56) 0%, rgba(206, 21, 0, 0.92) 90.1%);
  padding: 10px;
  z-index: 1;
}

nav .navbar-item .sub-menu .navbar-item {
  margin-bottom: 10px;
}

nav .navbar-item .sub-menu .navbar-item:last-child {
  margin-bottom: 0;
}

nav .navbar-item .sub-menu .navbar-item router-link {
  display: block;
  color: #FFF;
  text-decoration: none;
  cursor: pointer;
}

</style>