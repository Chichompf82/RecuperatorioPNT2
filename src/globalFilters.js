import Vue from 'vue'

Vue.filter('pasarAMayuscula', function(value) {
    return value.toUpperCase()
})
Vue.filter('pasarAMinuscula', function(value) {
    return value.toLowerCase()
})



