<template>
  <div class="row">
    <div class="col-6">
      <CommentForm @comment-submited="addComment" />
    </div>
    <div class="col-6">
      <CommentList
        v-if="GStore.comment"
        :comments="GStore.event.id"
        :commentsHistory="GStore.event"
      />
    </div>
  </div>
</template>
<script>
import CommentForm from '@/components/CommentFrom.vue'
import CommentList from '@/components/CommentList.vue'
import GStore from '@/store'
export default {
  inject: ['GStore'],
  components: {
    CommentForm,
    CommentList
  },
  methods: {
    addComment(comment) {
      console.log(comment)
      GStore.comments.push(comment)
      GStore.event.doctorRec = GStore.comment.filter(
        (event) => GStore.event.id == event.id
      )
    }
  }
}
</script>
<style scoped>
.row {
  margin: auto;
}
</style>
