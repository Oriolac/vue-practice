<template>
  <div id="app">
    <Cabecera/>
    <Lista/>
  </div>
</template>

<script>
import Cabecera from './components/Cabecera.vue'
import Lista from './components/Lista.vue'

export default {
  name: 'app',
  components: {
    Cabecera,
    Lista
  }
}
</script>