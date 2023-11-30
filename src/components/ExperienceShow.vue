<template>
  <section>
    <h1>{{ experience.name }}</h1>
    <img :src="`/images/${experience.image}`" class="large-image" />
    <p>{{ experience.description }}</p>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import dades from '../assets/data.json';

const props = defineProps(['id', 'experienceSlug']);

const destination = ref(null);

const experience = computed(() => {
  return destination.value?.experiences.find(
    (experience) => experience.slug === props.experienceSlug
  ) || {};
});

onMounted(() => {
  destination.value = dades.destinations.find(
    (destination) => destination.id === props.id
  );
});
</script>
