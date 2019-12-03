export function insert_pokemonList({commit,getters},payload) {
	commit('setMyPokemon', payload)
}
export function update_list({commit,getters},payload) {
	commit('updateMyPokemon', payload)
}
export function release({commit,getters},payload) {
	commit('releaseMyPokemon', payload)
}