<template>
  <div>
    <section v-if="destination" class="destination">
      <h1>{{ destination.name }}</h1>
      <GoBack />
      <div class="destination-details">
        <img :src="`/images/${destination.image}`"/>
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section class="experiences">
      <h2>Top Experiences in {{ destination.name }}</h2>
      <div class="cards">
        <router-link
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :to="{ name: 'experience.show', params: { experienceSlug: experience.slug } }"
        >
          <ExperienceCard :experience="experience" />
        </router-link>
      </div>
      <router-view />
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import dades from '../assets/data.json';
import ExperienceCard from './ExperienceCard.vue';

const props = defineProps(['id']);

const destination = computed(() =>
  dades.destinations.find((dest) => dest.id === props.id)
);
</script>
