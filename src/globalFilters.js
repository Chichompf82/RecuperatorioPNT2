import Vue from 'vue'

Vue.filter('pasarAMayuscula', function(value) {
    return value.toUpperCase()
})
Vue.filter('pasarAMinuscula', function(value) {
    return value.toLowerCase()
})
Vue.filter('AlternarMayMin', function(value) {
    return value.split("").map((letra, index) => index%2 ? letra.toUpperCase() : letra.toLowerCase())
})
Vue.filter('AlternarMinMay', function(value) {
    return value.split("").map((letra, index) => index%2 ? letra.toLowerCase() : letra.toUpperCase())
})



