<template>
  <h1 class="color">Vaccine Detail</h1>

  <div class="events">
    <div class="search-box">
      <BaseInput v-model="keyword" type="text" @input="updateKeyword" />
    </div>
    <div class="events2">
      <EventCard
        v-for="event in events"
        :key="event.id"
        :event="event"
      ></EventCard>
    </div>
    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'EventList', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
      >
        Prev Page
      </router-link>

      <router-link
        id="page-next"
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
      >
        Next Page
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

export default {
  name: 'EventListView',
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  components: {
    EventCard
  },
  data() {
    return {
      events: null,
      totalEvents: 0,
      keyword: null
    }
  },
  // eslint-disable-next-line no-unused-vars
  beforeRouteEnter(routeTo, routeFrom, next) {
    EventService.getEvents(3, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        next((comp) => {
          comp.events = response.data
          comp.totalEvents = response.headers['x-total-count']
        })
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  beforeRouteUpdate(routeTo) {
    var queryFunction
    if (this.keyword == null || this.keyword === '') {
      queryFunction = EventService.getEvents(
        3,
        parseInt(routeTo.query.page) || 1
      )
    } else {
      queryFunction = EventService.getEventByKeyword(
        this.keyword,
        3,
        parseInt(routeTo.query.page) || 1
      )
    }

    queryFunction
      .then((response) => {
        this.events = response.data // <---
        this.totalEvents = response.headers['x-total-count'] // <---
      })
      .catch(() => {
        return { name: 'NetworkError' } // <---
      })
  },
  methods: {
    updateKeyword() {
      var queryFunction
      if (this.keyword === '') {
        queryFunction = EventService.getEvents(3, 1)
      } else {
        queryFunction = EventService.getEventByKeyword(this.keyword, 3, 1)
      }

      queryFunction
        .then((response) => {
          this.events = response.data
          console.log(this.events)
          this.totalEvents = response.headers['x-total-count']
          console.log(this.totalEvents)
        })
        .catch(() => {
          return { name: 'NetworkError' }
        })
    }
  },

  computed: {
    hasNextPage() {
      let totalPages = Math.ceil(this.totalEvents / 3)
      return this.page < totalPages
    }
  }
}
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.events2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
}
.pagination {
  display: flex;
  width: 830px;
  font-size: 25px;
  border: 1px #39495c;
  border-radius: 25px;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}

.search-box {
  width: 300px;
  margin: 10px 0 0 0px;
}
.color {
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 400px;
  margin: auto;
  background-color: none;
  border-radius: 25px;
  background-color: #3c915e;
  color: #fff;
}
</style>
