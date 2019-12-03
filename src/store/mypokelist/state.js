import {LocalStorage} from 'quasar'
export default {
  pokemonList:JSON.parse(LocalStorage.getItem('pokemonList'))
}
