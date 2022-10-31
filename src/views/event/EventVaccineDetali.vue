<template>
  <blockquote></blockquote>
  <div>
    <blockquote></blockquote>
    <div>
      <h1 class="vaccine">1. {{ event.vaccine }}</h1>
    </div>
    <div>
      <h1 class="vaccine2">2. {{ event.vaccine1 }}</h1>
    </div>
    <div>
      <h1 class="vaccine3">3. {{ event.vaccine2 }}</h1>
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
  margin: auto;
  margin-block: 50px;
  background-color: rgb(181, 81, 81);
  border-radius: 35px;
  height: 100px;
  width: 550px;
}
p {
  margin: -50px 0px 0px 30px;
}
.p1 {
  margin: -80px 0px 0px 30px;
}
</style>
