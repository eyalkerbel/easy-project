<template>
  <div class="business-card">
    <div class="label-wrapper">
      <span class="class-distance">{{ business?.distance }} {{ translate(KILOMETERS_STRING) }}
      </span>
    </div>
    <CardInfo :business="business"/>
    <CardBadges :business="business"/>
    <CardReview :business="business"/>
  </div>
</template>

<script>
import CardInfo from "@/components/business/card/CardInfo"
import CardBadges from "@/components/business/card/badge/CardBadges"
import CardReview from "@/components/business/card/CardReview"
import {KILOMETERS_STRING} from "@/const"
import {useI18n} from 'vue-i18n';


export default {
  props: {
    business: Object
  },
  components: {
    CardReview,
    CardInfo,
    CardBadges
  },
  data: () => ({
    KILOMETERS_STRING: KILOMETERS_STRING
  }),
  setup() {
    const {t} = useI18n();
    const translate = (key) => t(key);

    return {translate};
  },
}
</script>

<style scoped>


.business-card {
  background-color: #fff;
  background-color: whitesmoke;
  border-radius: 32px;
  box-shadow: 0 6px 10px -3px rgba(0, 0, 0, .1);
  cursor: pointer;
  display: block;
  margin: 16px auto;
  padding: 16px 8px 8px;
  position: relative;
  text-align: start;
  transition: all .2s ease-in-out;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  width: 100%;
  max-width: 65%;
}

@media (max-width: 768px) {
  .business-card {
    max-width: 100%;
    width: 100%;

  }
}

.class-distance {
  background-color: #3f484a;
  border-radius: 14px;
  color: #fff;
  text-color: #fff;
  font-size: .625rem;
  font-weight: 700;
  line-height: .8125rem;
  padding: 2px 6px
}

.label-wrapper {
  align-items: center;
  display: flex;
  inset-inline-end: 16px;
  position: absolute;
  top: 16px;
}
</style>