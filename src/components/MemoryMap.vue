<template>
  <div class="main">
    <div class="overmap">
      <aside class="sidebar left" :class="{active: sidebaropen == 'left'}">
        <div class="sidebar-wrap">
          <ul class="filter-list">
            <li class="filter-item" :class="{inactive: inactivefilters.includes(filter.id)}" v-for="filter in filters" @click="toggleFilter(filter.id)">
              <div class="filter-element">
                <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="35" :fill="filter.color" :stroke="filter.color" stroke-opacity="1" stroke-width="15" fill-opacity="0.5" />
                </svg>
                <span v-html="filter.title"></span>
              </div>
              <div class="filter-legend" :style="{borderColor: filter.color}">
                <h3 v-html="filter.title"></h3>
                <p class="subtitle" v-html="filter.subtitle"></p>
                <img :src="ills[filter.id]" :alt="filter.title">
                <p class="illustred">Ilustrado por {{filter.illustrator}}</p>
                <p class="illustred">{{filter.collab}}</p>
                <p class="text" v-html="filter.text"></p>
              </div>
            </li>
          </ul>
        </div>
      </aside>
      <aside class="sidebar right" :class="{active: sidebaropen == 'right'}">
        <div class="sidebar-wrap">
          <p>A menudo, recorremos la ciudad sin ser conscientes de las historias que esconden sus calles y sus edificios, testigos mudos de una memoria de dolor y de lucha, de gritos y de silencios, de oscuridad y de conquistas.</p>
          <p><strong>#MemoriaDe</strong> es un proyecto conjunto del Instituto 25M y el área de memoria democrática de Podemos. Se trata de una colección de mapas que recorren al pasado reciente de Madrid a través de distintas perspectivas temáticas: el antifranquismo, el feminismo, las luchas LGTBI, el movimiento estudiantil y las luchas vecinales. Cinco abordajes que recogen el trabajo de colectivos o personas expertas en cada uno de estos ejes, y la mirada de un ilustrador o ilustradora que pone trazos y colores a sus investigaciones. Los mapas, editados primero en papel, se recogen ahora en esta página web.</p>
          <p>La ciudad respira memoria. Estos mapas quieren ayudar a recordarla, para que no caminemos sin ver.</p>
          <div class="portadas">
            <div v-for="filter in filters">
              <img :src="ills[filter.id]" :alt="filter.name"></a>
            </div>
          </div>
        </div>
      </aside>
      <div class="overmask2" :class="{active: sidebaropen!=''}" @click="sidebaropen = ''" :style="{background: color}"></div>
      <div class="ensigns">
        <a href="/">
          <img :src="img.memoriade" alt="Mapas de la Memoria">
        </a>
      </div>
      <nav class="content left">
        <div class="menu-wrap">
          <div class="menu" @click="sidebaropen = 'left'">Las rutas</div>
        </div>
      </nav>
      <aside class="content right">
        <div class="menu-wrap">
          <div class="menu" @click="sidebaropen = 'right'">El proyecto</div>
        </div>
      </aside>
      <main class="content main" :class="{active: sidebaropen == 'main'}">
        <img class="icon close" :src="ills['close']" alt="Cerrar" title="Cerrar" @click="sidebaropen = ''">
        <div class="main-wrap">
          <div class="main-thumb">
            <img class="main-thumb" v-if="point.id" :src="ills[point.id]" :alt="point.name">
          </div>
          <div class="main-body" v-html="point.desc"></div>
        </div>
      </main>
      <div class="logos">
        <a href="https://www.guengl.eu/" target="_blank"><img :src="img.GUE" alt="GUE"></a>
        <a href="https://instituto25m.info/" target="_blank"><img :src="img.i25m" alt="i25m"></a>
        <a href="https://podemos.info/" target="_blank"><img :src="img.podemos" alt="Podemos"></a>
      </div>
    </div>

    <d3vue-map-points :lat="lat" :lng="lng" :zoom="zoom"></d3vue-map-points>

  </div>
</template>


<script>
import * as d3 from 'd3'
import EventBus from '../bus'

export default {
  name: 'MemoryMap',
  data: function() {
    return {
      lat: 40.402974,
      lng: -3.706255,
      zoom: 13,
      inactivefilters: [],
      sidebaropen: '',
      point: {
        id: '',
        name: '',
        desc: '',
      },
      filters: [],
      color: '#000',
      datum: require('../assets/data/memorydata.js').default,
      img: {
        memoriade: require('../assets/img/logos/memoriade.svg'),
        GUE: require('../assets/img/logos/GUE.svg'),
        i25m: require('../assets/img/logos/i25m.svg'),
        podemos: require('../assets/img/logos/podemos.svg'),
      },
      ills: {
        d00: require('../assets/img/memory/d00.jpg'),
        d01: require('../assets/img/memory/d01.jpg'),
        d02: require('../assets/img/memory/d02.jpg'),
        d03: require('../assets/img/memory/d03.jpg'),
        d04: require('../assets/img/memory/d04.jpg'),
        d05: require('../assets/img/memory/d05.jpg'),
        d06: require('../assets/img/memory/d06.jpg'),
        d07: require('../assets/img/memory/d07.jpg'),
        d08: require('../assets/img/memory/d08.jpg'),
        d09: require('../assets/img/memory/d09.jpg'),
        d10: require('../assets/img/memory/d10.jpg'),
        d11: require('../assets/img/memory/d11.jpg'),
        d12: require('../assets/img/memory/d12.jpg'),
        d13: require('../assets/img/memory/d13.jpg'),
        d14: require('../assets/img/memory/d14.jpg'),
        d15: require('../assets/img/memory/d15.jpg'),
        e00: require('../assets/img/memory/e00.jpg'),
        e01: require('../assets/img/memory/e01.jpg'),
        e02: require('../assets/img/memory/e02.jpg'),
        e03: require('../assets/img/memory/e03.jpg'),
        e04: require('../assets/img/memory/e04.jpg'),
        e05: require('../assets/img/memory/e05.jpg'),
        e06: require('../assets/img/memory/e06.jpg'),
        e07: require('../assets/img/memory/e07.jpg'),
        e08: require('../assets/img/memory/e08.jpg'),
        e09: require('../assets/img/memory/e09.jpg'),
        e10: require('../assets/img/memory/e10.jpg'),
        e11: require('../assets/img/memory/e11.jpg'),
        e12: require('../assets/img/memory/e12.jpg'),
        e13: require('../assets/img/memory/e13.jpg'),
        e14: require('../assets/img/memory/e14.jpg'),
        e15: require('../assets/img/memory/e15.jpg'),
        f00: require('../assets/img/memory/f00.jpg'),
        f01: require('../assets/img/memory/f01.jpg'),
        f02: require('../assets/img/memory/f02.jpg'),
        f03: require('../assets/img/memory/f03.jpg'),
        f04: require('../assets/img/memory/f04.jpg'),
        f05: require('../assets/img/memory/f05.jpg'),
        f06: require('../assets/img/memory/f06.jpg'),
        f07: require('../assets/img/memory/f07.jpg'),
        f08: require('../assets/img/memory/f08.jpg'),
        f09: require('../assets/img/memory/f09.jpg'),
        f10: require('../assets/img/memory/f10.jpg'),
        f11: require('../assets/img/memory/f11.jpg'),
        f12: require('../assets/img/memory/f12.jpg'),
        f13: require('../assets/img/memory/f13.jpg'),
        f14: require('../assets/img/memory/f14.jpg'),
        f15: require('../assets/img/memory/f15.jpg'),
        o00: require('../assets/img/memory/o00.jpg'),
        o01: require('../assets/img/memory/o01.jpg'),
        o02: require('../assets/img/memory/o02.jpg'),
        o03: require('../assets/img/memory/o03.jpg'),
        o04: require('../assets/img/memory/o04.jpg'),
        o05: require('../assets/img/memory/o05.jpg'),
        o06: require('../assets/img/memory/o06.jpg'),
        o07: require('../assets/img/memory/o07.jpg'),
        o08: require('../assets/img/memory/o08.jpg'),
        o09: require('../assets/img/memory/o09.jpg'),
        o10: require('../assets/img/memory/o10.jpg'),
        o11: require('../assets/img/memory/o11.jpg'),
        o12: require('../assets/img/memory/o12.jpg'),
        o13: require('../assets/img/memory/o13.jpg'),
        o14: require('../assets/img/memory/o14.jpg'),
        o15: require('../assets/img/memory/o15.jpg'),
        v00: require('../assets/img/memory/v00.jpg'),
        v01: require('../assets/img/memory/v01.jpg'),
        v02: require('../assets/img/memory/v02.jpg'),
        v03: require('../assets/img/memory/v03.jpg'),
        v04: require('../assets/img/memory/v04.jpg'),
        v05: require('../assets/img/memory/v05.jpg'),
        v06: require('../assets/img/memory/v06.jpg'),
        v07: require('../assets/img/memory/v07.jpg'),
        v08: require('../assets/img/memory/v08.jpg'),
        v09: require('../assets/img/memory/v09.jpg'),
        v10: require('../assets/img/memory/v10.jpg'),
        v11: require('../assets/img/memory/v11.jpg'),
        v12: require('../assets/img/memory/v12.jpg'),
        v13: require('../assets/img/memory/v13.jpg'),
        v14: require('../assets/img/memory/v14.jpg'),
        v15: require('../assets/img/memory/v15.jpg'),

        democracia: require('../assets/img/memory/democracia.jpg'),
        estudiantes: require('../assets/img/memory/estudiantes.jpg'),
        feminismo: require('../assets/img/memory/feminismo.jpg'),
        orgullo: require('../assets/img/memory/orgullo.jpg'),
        vecinos: require('../assets/img/memory/vecinos.jpg'),

        close: require('../assets/img/icons/close.svg'),
      }
    }
  },
  created: function() {
    var self = this
    EventBus.$on('map_move', function(data) {
      self.lat = data.lat;
      self.lng = data.lng;
      self.zoom = data.zoom;
    });
    EventBus.$on('point_click', function(data) {
      self.point = data;
      self.color = data.color;
      self.sidebaropen = 'main';
    });
  },
  mounted: function() {
    var self = this;
    var points = []

    this.datum.maps.forEach(function(map) {
      points = points.concat(map.items);
      delete map.items;
      self.filters.push(map)
    })
    EventBus.$emit('addpoints', points);
    setTimeout(function() { self.showFilters(); }, 0);
  },
  methods: {
    toggleFilter(filter) {
      if (filter) {
        var index = this.inactivefilters.indexOf(filter);
        if (index > -1) this.inactivefilters.splice(index, 1)
        else this.inactivefilters.push(filter)
      } else this.inactivefilters = [];
    },
    showFilters() {
      d3.selectAll('.point').classed('inactive', false);
      this.inactivefilters.forEach(function(v) {
        d3.selectAll('.point.c-' + v).classed('inactive', true);
      })
    }
  },
  watch: {
    sidebaropen: function(val) { if (!val) this.point = {}; },
    inactivefilters: function(val) { this.showFilters(); },
  }
}

</script>
<style>
/* GENERAL

*****************************************/
html,
body {
  height: 100%;
}

.main {
  position: relative;
  height: 100%;
}

.overmap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
  pointer-events: none;
}

.overmask2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 200ms ease-in-out;
  pointer-events: none;
  z-index: 99;
  opacity: 0;
  background: rgb(68, 68, 68);
}

.overmask2.active {
  opacity: 0.8;
  pointer-events: all;
}

/* SIDEBARS

*****************************************/
.sidebar {
  position: absolute;
  top: 0;
  background: #e9efeb;
  height: 100%;
  width: 50%;
  z-index: 999;
  pointer-events: all;
  max-width: 400px;
}

.sidebar.left {
  left: -50%;
  transition: left 200ms ease-in-out;
  max-width: 320px;
}

.sidebar.right {
  right: -80%;
  width: 80%;
  transition: right 200ms ease-in-out;
  overflow-y: scroll;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  max-width: 700px;
}

.sidebar.right::-webkit-scrollbar {
  width: 0 !important;
}

.sidebar.left.active {
  left: 0;
}

.sidebar.right.active {
  right: 0;
}

.sidebar .sidebar-wrap {
  padding: 50px 20px;
}

.sidebar .portadas {
  display: flex;
  flex-wrap: wrap;
}

.sidebar .portadas>div {
  flex: 1 1 auto;
  margin-right: 5px;
  margin-bottom: 5px;
}

.sidebar .portadas img {
  width: 100%;
}

@media only screen and (min-width: 870px) {
  .right .sidebar-wrap {
    padding: 60px;
    right: calc(-50% - 40px);
  }
}

@media only screen and (min-width: 1020px) {
  .sidebar .portadas {
    flex-wrap: nowrap;
  }
}

/* OVERCONTENT

*****************************************/
.content {
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.content.left {
  left: 0;
}

.content.right {
  right: 0;
}

.content .content-wrap {
  padding: 20px;
}

.content .menu {
  pointer-events: all;
  margin: 100px 20px 0;
  display: inline-block;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  transition: opacity 350ms ease;
}

.content .menu:hover {
  opacity: 0.6;
}

.content.right .menu-wrap {
  text-align: right;
}

/* Content main */
.content.main {
  width: 80%;
  height: 80%;
  left: 10%;
  top: 100%;
  z-index: 99;
  background: #e9efeb;
  pointer-events: all;
  transition: top 200ms ease-in-out;
}

.content.main.active {
  top: 10%;
}

.content.main .close {
  width: 20px;
  padding: 15px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  transition: opacity 350ms ease;
}

.content.main .close:hover {
  opacity: 0.5;
}

.main-wrap {
  padding: 20px;
  height: calc(100% - 40px);
  overflow-y: scroll;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
}

.main-wrap::-webkit-scrollbar {
  width: 0 !important;
}

.main-thumb {
  width: 80%;
  max-width: 400px;
  height: auto;
  display: block;
  margin: 0 auto 20px;
}

.main-thumb {
  width: 100%;
  height: auto;
}

.main-title {
  text-align: center;
}

.main-body {}

/* Ensigns */
.ensigns {
  position: absolute;
  top: 0;
  width: 100%;
  overflow: hidden;
}

.ensigns a {
  pointer-events: all;
  max-width: 260px;
  margin: 0 auto;
  display: block;
  width: 100%;
}

.ensigns img {}

/* Logos */
.logos {
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: center;
}

.logos a {
  pointer-events: all;
}

.logos img {
  width: 100px;
  height: auto;
}

/* Filters */
.filter-list {}

.filter-item {
  padding: 10px 0;
  cursor: pointer;
  position: relative;
}

.filter-item.inactive .filter-element {
  opacity: 0.4;
}

.filter-legend {
  display: none;
  position: absolute;
  left: calc(100% + 30px);
  background: #212121;
  color: white;
  padding: 20px;
  width: calc(100% - 20px);
  top: -7px;
  border-left-width: 4px;
  border-left-style: solid;
}

.filter-item:hover .filter-legend {
  display: block;
}

.filter-element {
  transition: opacity 350ms ease;
}

.filter-element:hover {
  opacity: 0.3;
}

.filter-item.inactive .filter-element:hover {
  opacity: 0.8;
}

.filter-item h3 {
  margin-top: 0;
}

.filter-item img {
  width: 100%;
}

.filter-item p:last-child {
  margin-bottom: 0;
}

.filter-item .subtitle {}

.filter-item .illustred {
  margin-top: 5px;
  font-size: smaller;
  text-align: right;
}

.filter-item .text {
  display: none;
}

.filter-item svg {
  width: 20px;
  height: 20px;
  display: inline-block;
  vertical-align: middle;
  transition: opacity 350ms ease;
}

.filter-item.inactive svg {
  opacity: 0;
}

.filter-item.inactive .filter-element:hover svg {
  opacity: 0.8;
}

.filter-item span {
  vertical-align: middle;
}

@media only screen and (min-width: 600px) {
  .content .menu {
    margin-top: 20px;
  }
}

@media only screen and (min-width: 870px) {
  .content.main {
    width: 800px;
    left: calc(50% - 400px);
    height: auto;
  }

  .main-wrap {
    display: flex;
    padding: 40px;
  }

  .main-thumb {
    flex: 0 0 300px;
  }

  .main-body {
    flex: 1 1 auto;
    margin-left: 40px;

  }

  .filter-legend {
    width: 470px;
  }

  .filter-legend h3 {
    margin-bottom: 0;
  }

  .filter-legend img {
    width: 200px;
    float: left;
    margin: 0 20px 10px 0;
  }

  .filter-item .subtitle {
    margin-bottom: 13px;
  }

  .filter-item .illustred {
    text-align: left;
    margin-bottom: 5px;
    margin-top: 0;
  }

  .filter-item .text {
    display: block;
  }
}

@media only screen and (min-width: 1020px) {
  .content.main {
    width: 980px;
    left: calc(50% - 490px);
  }

  .filter-legend {
    width: 640px;
    padding: 40px;
  }
}


/* MAP

*****************************************/
#d3vuemap {
  z-index: 0;
}
#d3vuemap .point.inactive {
  display: none;
}

</style>
