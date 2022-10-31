import apiClient from '@/services/AxiosClient.js'
export default {
  addComment(id, comment) {
    return apiClient.post('/comments/event/' + id, comment)
  }
}
