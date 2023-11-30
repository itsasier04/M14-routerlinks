<template>
  <div class="home">
    <h1>All Destinations</h1>
    <div class="destinations">
      <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }"
        class="destination-link"
      >
        <div class="destination-info">
          <h2>{{ destination.name }}</h2>
          <img :src="`/images/${destination.image}`"/>
        </div>
        <router-view />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import dades from '../assets/data.json';

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      destinations: dades.destinations.map(destination => ({
        ...destination,
        showExperiences: false,
      })),
    };
  },
});
</script>
