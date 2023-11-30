<template>
  <div class="nav-bar" id="nav">
    <ul>
      <router-link :to="'/'" tag="li">
        <h2 class="nav-link">Home</h2>
      </router-link>
      <router-link
        v-for="destination in data"
        :key="destination.id"
        :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }"
        tag="li"
      >
        <h2 class="nav-link">{{ destination.name }}</h2>
      </router-link>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import dades from '../assets/data.json'
const data = ref(dades.destinations)
</script>

