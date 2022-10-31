<template>
  <blockquote></blockquote>
  <br />
  <br />
  <div class="color2">
    <h1>{{ event.name }}</h1>
    <h1>{{ comment }}</h1>
  </div>
  <blockquote></blockquote>
  <br />
  <div class="color">
    <div class="imgg">
      <img class="img" v-if="event.addimg" :src="event.addimg" alt="" />

      <!-- <img class="img" :src="event.imageUrls" alt="" /> -->
      <img v-for="url in event.imageUrls" :key="url" :src="url" />
    </div>
    <h3>Address: {{ event.location }}</h3>
    <h3>Age: {{ event.age }}</h3>
  </div>
  <br />
  <div class="stats">
    <!-- <router-link
            class="event-link"
            :to="{ name: 'ChangeRoleToDoctor', params: { id: GStore.user.id } }"
-->
    <button
      v-if="isAdmin"
      class="btn hvr-underline-from-center"
      @click="change"
    >
      <h5>Set to doctor</h5>
    </button>
    <!-- </router-link>
          <router-link
            class="event-link"
            :to="{ name: 'ChangeRoleToPeople', params: { id: GStore.user.id } }"
-->
    <button
      v-if="isAdmin"
      class="btn hvr-underline-from-center"
      @click="change"
    >
      <h5>Set to people</h5>
    </button>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService.js'
export default {
  props: ['id', 'event'],
  inject: ['GStore'],
  computed: {
    currentUser() {
      return localStorage.getItem('user')
    },
    isAdmin() {
      return AuthService.hasRoles('ROLE_ADMIN')
    },
    isDoctor() {
      return AuthService.hasRoles('ROLE_DOCTOR')
    }
  }
}
</script>
<style scoped>
img {
  /* border: 1px solid #ddd; 
  border-radius: 4px;  */
  padding: 5px; /* Some padding */
  margin: 5px; /* Some margin */
  width: 150px; /* Set a small width */
  height: 150px;
}
/* Add a hover effect (blue shadow) */
img:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}
.color {
  padding: 10px;
  width: 550px;
  margin: auto;
  background-color: none;
  border-radius: 60px;
  background-color: #ade7ba;
  color: black;
  font-weight: bold;
  border: solid 2px black;
}
.color2 {
  padding: 10px;
  width: 700px;
  margin: auto;
  background-color: none;
  border-radius: 60px;
  background-color: #ade7ba;
  color: black;
  font-weight: bold;
  border: solid 2px black;
}
/* .img {
  height: 150px;
  width: 150px;
} */
.imgg {
  margin: auto;
}
button {
  font-weight: bold;
}
</style>
