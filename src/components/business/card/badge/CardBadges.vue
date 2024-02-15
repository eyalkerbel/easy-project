<template>
  <div class="badges-scroll-container">
    <BadgeItem
        v-for="(badge, index) in business.badges"
        :key="index"
        :badge="badge"/>
  </div>
</template>

<script>
import BadgeItem from "@/components/business/card/badge/BadgeItem"


export default {
  components: {BadgeItem},
  props: {
    business: Object
  },
};
</script>

<style scoped>
.badges-scroll-container {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  margin: 1rem 0 0;
}

.badges-scroll-container::-webkit-scrollbar {
  height: 2px; /* height of the horizontal scrollbar */
}

.badges-scroll-container::-webkit-scrollbar-track {
  background: #f1f1f1; /* Use a very light color for the tracking area, consider making it closer to the background color */
}

.badges-scroll-container::-webkit-scrollbar-thumb {
  background: #ccc; /* Use a very light color for the scroll thumb to make it less noticeable */
  border-radius: 2px; /* Optional: Adjust the roundness of the scroll thumb */
}

.badges-scroll-container::-webkit-scrollbar-thumb:hover {
  background: #bbb; /* Use a slightly darker color on hover to indicate interactivity without drawing too much attention */
}
</style>