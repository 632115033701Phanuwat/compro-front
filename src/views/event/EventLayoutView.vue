<template>
  <div v-if="GStore.event">
    <!-- <h1>{{ GStore.event.tit}}</h1> -->
    <div id="nav">
      <router-link class="list" :to="{ name: 'EventDetails' }"
        >Details</router-link
      >
      <router-link class="list" :to="{ name: 'EventVaccineDetali' }"
        >Vaccine Details</router-link
      >
      <router-link class="list" :to="{ name: 'EventEdit' }"
        >View Comment</router-link
      >
      <router-link class="list" :to="{ name: 'Doctor' }"
        >Docter Comment</router-link
      >
      <router-link class="list" :to="{ name: 'ChangeRole' }"
        >ChangeRole</router-link
      >
    </div>
    <router-view :event="GStore.event" />
  </div>
</template>
<script>
import AuthService from '@/services/AuthService.js'
export default {
  inject: ['GStore'],
  computed: {
    currentUser() {
      return localStorage.getItem('user')
    },
    isAdmin() {
      return AuthService.hasRoles('ROLE_ADMIN')
    }
  }
}
</script>
<style>
.list {
  padding: 1rem;
  background-color: none;
  border-radius: 25px;
  background-color: #9fe2bf;
  color: black;
  margin: 0px 0px 0px 40px;
}
.list:hover {
  background-color: #40e0d0;
  transition: 0.5s;
  color: #fff;
}
</style>
