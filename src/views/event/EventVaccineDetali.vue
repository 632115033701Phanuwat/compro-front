<template>
  <blockquote></blockquote>
  <div>
    <blockquote></blockquote>
    <div>
      <h1 class="vaccine">1. {{ event.vaccine }}</h1>
      <p>date: {{ event.date }} time: {{ event.time }}</p>
    </div>
    <div>
      <h1 class="vaccine2">2. {{ event.vaccine1 }}</h1>
      <p>date: {{ event.date1 }} time: {{ event.time1 }}</p>
    </div>
    <div>
      <h1 class="vaccine3">3. {{ event.vaccine2 }}</h1>
      <p class="p1">date: {{ event.date2 }} time: {{ event.time2 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'event'],
  inject: ['GStore'],
  methods: {
    register() {
      this.GStore.flashMessage =
        'You are successfully register for ' + this.event.name
      setTimeout(() => {
        this.GStore.flashMessage = ''
      }, 3000)
      this.$router.push({
        name: 'EventDetails',
        params: { id: this.event.id }
      })
    }
  }
}
</script>
<style scoped>
.vaccine {
  padding: 20px;
  /* border: 1px solid #39495c; */
  margin-bottom: 18px;
}
.vaccine2 {
  padding: 20px;
  /* border: 1px solid #39495c; */
  margin-bottom: 18px;
}
.vaccine3 {
  padding: 20px;
  /* border: 1px solid #39495c; */
}
h1 {
  color: rgb(255, 255, 255);
  margin: 40px 0px 0px 490px;
  background-color: rgb(229, 143, 143);
  border-radius: 35px;
  height: 100px;
  width: 550px;
}
p {
  margin: -50px 0px 0px 30px;
}
.p1 {
  margin: -30px 0px 0px 30px;
}
</style>
