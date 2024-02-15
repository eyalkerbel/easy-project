<template>
  <div :key="badge" class="badge">{{ badge }}</div>
</template>

<script>
export default {
  props: {
    badge: String
  }
}
</script>

<style scoped>
.badge {
  flex: none;
  background-color: #eee;
  padding: 5px 10px;
  margin-right: 8px;
  white-space: nowrap;
  font-size: 0.8rem;
  border-radius: 80px;
  color: #454545;
  display: flex;
  font-size: .75rem;
  justify-content: center;
  line-height: 1rem;
  padding: 6px 10px;
}

.badge:last-child {
  margin-right: 0;
}
</style>