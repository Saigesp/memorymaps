import Vue from 'vue'
import Router from 'vue-router'
require('./components')

Vue.use(Router)

let ComponentFactory = function(htmltag){
    return { template: '<'+htmltag+'></'+htmltag+'>' }
}

export default new Router({
  routes: [
    // Home
    { path: '/',                           component: ComponentFactory('HomeComp'),        name: 'home'},
    { path: '/europafortaleza',            component: ComponentFactory('FortMap'),         name: 'fort'},
    { path: '/larutadeldinero',            component: ComponentFactory('MoneyMap'),        name: 'money'},
    { path: '/memory',                     component: ComponentFactory('MemoryMap'),       name: 'memory'},
 
  ]
})