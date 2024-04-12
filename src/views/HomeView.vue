<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Vue3 + ts boilerplate by ssumthingood" />
    {{ dummyData.name }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import dummyData from '@/data/dummy';

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  data() {
    return {
      dummyData: dummyData,
    };
  },
});
</script>
