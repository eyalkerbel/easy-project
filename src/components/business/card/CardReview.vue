<template>
  <div v-if="business.review?.length > 0" class="review-wrapper">
    <img v-if="business.review[0]?.image" :src="business.review[0]?.image" alt="" class="img-class" loading="lazy">
    <span>{{ business.review[0]?.title }}</span>
  </div>
</template>

<script>


export default {
  props: {
    business: Object
  }
}
</script>

<style scoped>

.img-class {
  border-radius: 50%;
  height: 32px;
  margin-inline-end: 8px;
  -o-object-fit: cover;
  object-fit: cover;
  width: 32px;
}

.review-wrapper {
  align-items: center;
  background-color: #e5f5fa;
  border-radius: 80px;
  display: flex;
  margin-top: 8px;
  padding: 8px 16px;
  position: relative;
  width: 100%;
  font-weight: 400;
}

.review-wrapper span {
  color: #454545;
  font-size: .75rem;
  font-weight: 700;
  line-height: 1rem;
  font-weight: 400
}
</style>