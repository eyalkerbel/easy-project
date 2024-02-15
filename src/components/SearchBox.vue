<template>
  <div class="search-box">
    <input v-model="query" placeholder="חיפוש..." type="text" @input="handleInput">
    <i class="fas fa-search search-icon"></i>
  </div>
</template>

<script>
import _ from 'lodash';


export default {

  data() {
    return {
      query: '',
    };
  },
  methods: {
    handleInput: _.debounce(function () {
      this.$emit('search', this.query);
    }, 200)
  }
};
</script>

<style scoped>
.search-box {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

.search-box input {
  width: 100%;
  padding: 0.75rem;
  padding-right: 2.5rem;
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s ease;
}

.search-icon {
  position: absolute;
  left: 10px;
  color: #058fbd
}
</style>