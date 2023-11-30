<template>
  <div class="card">
    <img :src="`/images/${experience.image}`"/>
    <span class="card__text">
      {{ experience.name }}
    </span>
  </div>
</template>

<script setup lang="ts">

const props = defineProps(['experience']);
</script>
