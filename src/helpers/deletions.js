export function deleteLugar (id) {
  this.$axios.delete(
      `http://127.0.0.1:8000/api/locais/delete/${id}`
      //, this.$store.getters.getHeaderAuth
  )
    .then(() => {
      console.log('sucesso')
      this.buscarLugares()
    })
    .catch(() => {
      console.log('erro')
    })
}
