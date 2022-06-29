<template>

  <section>
    <input type="text" v-model="texto">
    <br>
    <h6>{{cantidadLetras.texto}}  {{cantidadLetras.cantidad}}</h6>
    
    {{texto }}
    <br>
    {{texto | pasarAMayuscula}}
    <br>
    {{texto | pasarAMinuscula}}
    <br>
    {{texto}}
    <br>
    {{texto}}
    <br>
    <br>
    <hr>
    <p>1:c 2:b 3:c 4:a 5:b</p>
    </section>

</template>

<script>

  export default  {
    name: 'src-components-binding',
    props: [],
    mounted () {

    },
    data () {
      return {
        texto:"",
        

      }
    },
    methods: {
      

    },
    computed: {
      cantidadLetras(){
        let texto = "cantidad:"
        let cant = this.texto.length
        return {
          texto: texto,
          cantidad: cant
        }
      }

    }
}


</script>

<style scoped lang="css">
  .src-components-binding {

  }
</style>
