import {LocalStorage} from 'quasar'
export function setMyPokemon (state,payload) {
	LocalStorage.set('pokemonList',JSON.stringify(payload))
	state.pokemonList = payload;
}
export function releaseMyPokemon (state,payload) {
	let index = state.pokemonList.findIndex(x => x.id === payload.id);
	let index_cp = state.pokemonList[index].my_pokemon.findIndex(x => x.id === payload.id_cp);
	state.pokemonList[index].my_pokemon.splice(index_cp, 1);
	state.pokemonList[index].owned += -1;
	if(state.pokemonList[index].my_pokemon.length == 0){
		state.pokemonList.splice(index,1);
	}
	LocalStorage.set('pokemonList',JSON.stringify(state.pokemonList))
}
export function updateMyPokemon (state,payload) {
	let obj = state.pokemonList.find(x => x.id === payload.id);
	if(obj != undefined){
		let index = state.pokemonList.findIndex(x => x.id === payload.id);
		console.log(state.pokemonList[index]);
		console.log(state.pokemonList);
		state.pokemonList[index].owned += 1;
		state.pokemonList[index].my_pokemon.push({
			id:payload.newid,
			name:payload.data.name,
			nickname:payload.data.nickname,
		});
		LocalStorage.set('pokemonList',JSON.stringify(state.pokemonList))
	}else{
		state.pokemonList.push({
			id:payload.id,
			my_pokemon:[{
				id:payload.newid,
				name:payload.data.name,
				nickname:payload.data.nickname,
			}],
			owned:1
		})
		LocalStorage.set('pokemonList',JSON.stringify(state.pokemonList))
	}
	console.log(state.pokemonList);
}