<template>
  <div id="app">
    <div className="content">
      <SearchBox @search="handleSearch"/>
      <div className="gap"></div>
      <BusinessList :businesses="filteredBusinesses"/>
    </div>
  </div>
</template>
<script>
import SearchBox from './components/SearchBox.vue'
import BusinessList from "@/components/business/BusinessList"
import {calculateDistance} from "@/utils/distance"
import {getOpenStatus} from "@/utils/time"


export default {
  name: 'App',
  components: {
    SearchBox,
    BusinessList
  },
  data() {
    return {
      searchQuery: '',
      businesses: [],
      filteredBusinesses: [],
      userLocation: {latitude: 32.0599258, longitude: 34.7741895},
    }
  },
  methods: {
    handleSearch(query) {
      this.filteredBusinesses = this.businesses.filter(business =>
          business.name.toLowerCase().includes(query.toLowerCase())
      )
      this.filteredBusinesses.sort((a, b) => a.distance - b.distance);

    },
    async fetchData() {
      try {
        const module = await import('@/assets/list.json');
        this.businesses = module.default;
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    },
    async getUserLocation() {
      if (navigator.geolocation) {
        try {
          const pos = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
          this.userLocation.latitude = pos.coords.latitude
          this.userLocation.longitude = pos.coords.longitude

        } catch (e) {
          console.error(e)
        }
      }

    }
  },
  async mounted() {
    await this.fetchData();
    await this.getUserLocation();
    this.businesses = this.businesses.map(business => ({
      ...business,
      distance: calculateDistance(
          this.userLocation.latitude,
          this.userLocation.longitude,
          business.lat,
          business.lng,
      ).toFixed(2),
      openStatus: getOpenStatus(business.openhours)
    }));
    this.businesses.sort((a, b) => a.distance - b.distance);

    this.filteredBusinesses = [...this.businesses];
  },
  watch: {
    searchQuery(newQuery) {
      this.handleSearch(newQuery);
    }
  }
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  direction: rtl;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding-top: 1.5rem;
}

.gap {
  height: 1rem;
}

@media (max-width: 768px) {
  .content {
    width: 100%;
  }
}

body {
  background-color: #f5fffa;
  height: 100vh;
  overflow-y: hidden;
}
</style>