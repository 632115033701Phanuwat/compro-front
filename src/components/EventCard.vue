<template>
  <router-link
    class="event-link"
    :to="{ name: 'EventLayoutView', params: { id: event.id } }"
  >
    <div class="event-card">
      <img class="img" v-if="event.addimg" :src="event.addimg" alt="" />
      <img v-for="url in event.imageUrls" :key="url" :src="url" />

      <h4>{{ event.name }}</h4>
      <span>case</span>
      <h5>{{ event.organizer.name }}</h5>
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped>
.event-card {
  padding: 25px;
  width: 300px;
  cursor: pointer;
  border: 3px solid #000000;
  margin-bottom: 18px;
  background-color: rgb(112, 216, 157);
  border-radius: 25px;
  margin: 35px;
  font-weight: bold;
}
.event-card:hover {
  transform: scale(1.2);
  box-shadow: 20px 10px 20px 10px rgba(155, 3, 92, 0.2);
  background-color: palevioletred;
  color: #fff;
  font-weight: bold;
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
img {
  /* border: 1px solid #ddd; 
  border-radius: 4px;  */
  padding: 5px; /* Some padding */
  margin: 5px; /* Some margin */
  width: 150px; /* Set a small width */
  height: 150px;
}
</style>
