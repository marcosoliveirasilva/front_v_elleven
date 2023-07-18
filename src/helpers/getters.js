export async function getLugares (filtros) {
  // const header = this.$store.getters.getHeaderAuth.headers
  try {
    const response = await this.$axios.get(
      'http://127.0.0.1:8000/api/locais',
      {
        // headers: header,
        params: {
          id: filtros.id,
          descricao: filtros.descricao,
          latitude: filtros.latitude,
          longitude: filtros.longitude,
          poligono: filtros.poligono
        }
      }
    )

    // this.$store.commit('setRefreshToken', true)
    return response.data
  } catch (error) {
    return 'ERROR'
  }
}
