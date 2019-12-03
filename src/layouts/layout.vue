<template>
  <q-layout view="lHh lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn v-if="$route.name == 'details'" icon="arrow_back" @click="$router.go(-1)" flat/>
        <q-toolbar-title>
          <template v-if="$route.name != 'details'">
            {{$route.meta.title}}
          </template>
          <template v-else>
            {{$route.params.title.split('-').join(' ')}}
          </template>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated id="cf-footer" v-if="$route.name != 'details'">
      <q-toolbar>
        <q-toolbar-title>
          <div class="row">
            <q-btn class="col-6" flat icon="home" to="/" :class="$route.name == 'home' ? 'active' : ''" label="Home"/>
            <q-btn class="col-6" flat icon="face" to="/mypokemon" :class="$route.name == 'my pokemon' ? 'active' : ''" label="My Pokemon"/>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
