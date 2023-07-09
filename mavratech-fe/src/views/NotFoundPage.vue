<template>
  <div>
    <div class="content">
      <h1>404: Stránka sa nenašla</h1>
      <img src="../assets/PageError.jpeg" alt="Page not found">
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFoundPage",
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.content h1 {
  margin-bottom: 0.5rem;
}

.content img {
  width: 100%;
  max-width: 500px;
  height: auto;
  margin-top: 1rem;
}
</style>
