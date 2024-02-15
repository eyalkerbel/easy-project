<template>
  <div class="business-list">
    <BusinessCard
        v-for="business in businesses"
        :key="business.id"
        :business="business"/>
  </div>
</template>
<script>
import BusinessCard from './card/BusinessCard.vue';


export default {
  components: {
    BusinessCard
  },
  props: {
    businesses: Array
  }
}
</script>

<style>
.business-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
  overflow-y: auto;
  max-height: 70vh;
  width: 100%;
}
</style>
