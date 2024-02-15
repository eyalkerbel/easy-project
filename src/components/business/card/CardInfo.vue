<template>
  <div class="card-wrapper">
    <div class="logo-container">
      <img :src="business.logo" alt="" class="biz-logo" height="60" loading="lazy" width="60">
      <p class="wrapper-score">{{ business.rating }} {{ business.name }}</p><span class="class-score">{{
        business.rating
      }}</span>
    </div>
    <div class="item-info-wrapper">
      <h2 class="class-name">{{ business.name }}</h2>
      <p class="class-subcategory">{{ business.category }}</p>
      <div class="address-wrapper">
        <p class="biz-address">{{ business.address }}</p>
        <p v-if="business?.openStatus === CLOSED_STRING" class="open-status-warning">
          · {{ translate(`${business?.openStatus}`) }} </p>
        <p v-else class="open-status"> ·
          {{ translate(`${business?.openStatus}`) }} </p>
      </div>
    </div>
  </div>
</template>

<script>
import {useI18n} from 'vue-i18n';
import {CLOSED_STRING} from "@/const"


export default {
  props: {
    business: Object
  },
  data: () => ({
    CLOSED_STRING: CLOSED_STRING
  }),
  setup() {
    const {t} = useI18n();
    const translate = (key) => t(key);

    return {translate};
  },
};
</script>

<style scoped>
.card-wrapper {
  display: flex;
  padding: 0 8px;
}

.biz-logo {
  border: 1px solid #f7f7f7;
  border-radius: 50%;
  height: 48px;
  max-width: 48px;
  -o-object-fit: cover;
  object-fit: cover;
  width: 48px;
}

.item-info-wrapper {
  width: 100%;
}

.class-name {
  color: #058fbd;
  font-size: 1rem;
  font-weight: 700;
  width: calc(100% - 60px);
  margin: 0
}

.class-subcategory {
  font-size: .875rem;
  line-height: 1.1875rem;
  margin: 0;
  color: #657a81;
  padding: 0
}

.address-wrapper {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
}

.biz-address {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: #454545;
  display: -webkit-box;
  margin: 0;
  margin-inline-end: 4px;
  overflow: hidden;
  font-size: .875rem;
  line-height: 1.1875rem;
}

.open-status {
  align-items: center;
  display: flex;
  font-weight: 700;
  margin: 0;
  font-size: .875rem;
  line-height: 1.1875rem;
}

.open-status-warning {
  color: #f03349;
  align-items: center;
  display: flex;
  font-weight: 700;
  margin: 0;
  font-size: .875rem;
  line-height: 1.1875rem;
}

.logo-container {
  height: 48px;
  margin-inline-end: 8px;
  position: relative;
  width: 48px;
}

.wrapper-score {
  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(100%);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.class-score {
  align-items: center;
  background-color: #058fbd;
  border-radius: 50%;
  color: #fff;
  display: flex;
  font-size: .75rem;
  font-weight: 700;
  height: 30px;
  inset: auto 50% -10px auto;
  justify-content: center;
  position: absolute;
  transform: translate(50%);
  width: 30px;
}

</style>