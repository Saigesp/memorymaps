<template>
  <div class="hello">
    <div id="map" class="moneymap"></div>
    <div id="overmap">
      <div class="overmask" :class="{active: sidebar != ''}" @click="sidebar = ''"></div>
      <div class="top right">
        <div class="topmenu">
          <img :src="img.europa" alt="EuropaEnMapas" @click="sidebar='about'">
        </div>
      </div>
      <div class="bottom right">
        <div class="logos">
          <a href="https://www.guengl.eu/" target="_blank"><img :src="img.GUE" alt="GUE"></a>
          <a href="https://instituto25m.info/" target="_blank"><img :src="img.i25m" alt="i25m"></a>
          <a href="https://podemos.info/" target="_blank"><img :src="img.podemos" alt="Podemos"></a>
        </div>
      </div>
      <div class="top left main" :class="{active:sidebar=='about'}">
        <div class="about">
          <p><strong>#EuropaEnMapas</strong> es un proyecto conjunto del Instituto 25M y la Secretaría de Europa de Podemos. Su vocación es cartografiar aspectos cruciales pra una visión crítica y transformadora de la Europa contemporánea, como son las migraciones y la evasión fiscal. Los mapas, editados primero en papel, se recogen ahora en esta página web.</p>
        </div>
      </div>
    </div>
    <main id="sections" class="moneycontent">
      <div class="section-wrap">
      </div>
      <div class="section-wrap">
        <section class="section"><span @click="goToTop()" style="cursor: pointer;">Volver al inicio</span><br><br></section>
      </div>
    </main>
  </div>
</template>

<script>
import * as d3Base from 'd3'
import { graphScroll } from "graph-scroll";
const d3 = Object.assign(d3Base, { graphScroll });

export default {
  name: 'MoneyMap',
  data() {
    return {
      content: {},
      current: -1,
      innerHeight: window.innerHeight,
      sidebar: '',
      img: {
        europa: require('../assets/img/logos/europa.svg'),
        GUE: require('../assets/img/logos/GUE.svg'),
        i25m: require('../assets/img/logos/i25m.svg'),
        podemos: require('../assets/img/logos/podemos.svg'),
      },
      map: require('../assets/img/moneyworld.svg'),
      datum: require('../assets/data/moneydata.js').default,
      ills: {
        'ruta.svg': require('../assets/img/logos/ruta.svg'),
        '01.png': require('../assets/img/money/01.png'),
        '02.png': require('../assets/img/money/02.png'),
        '03.png': require('../assets/img/money/03.png'),
        '04.png': require('../assets/img/money/04.png'),
        '05.png': require('../assets/img/money/05.png'),
        '06.png': require('../assets/img/money/06.png'),
      }
    }
  },
  created: function() {
    var self = this;
    d3.xml(this.map).then(world => {

        d3.select('#map').node().append(world.documentElement);

        self.svg = d3.select('#world')

        self.zoom = d3.zoom().on('zoom', function() {
          self.canvas.attr('transform', d3.event.transform);
        })

        self.canvas = self.svg.call(self.zoom)

        var sections = d3.select('.section-wrap').selectAll('.section')
          .data(this.datum.stories).enter()
          .append('section')
          .attr('class', 'section')
          .attr('style', 'margin-bottom:' + (innerHeight * 4 / 5) + 'px; margin-top:' + (innerHeight / 2) + 'px')

        sections.filter(function(d) { return d.ill; })
          .append('img')
          .attr('src', function(d) { return self.ills[d.ill] })

        sections.filter(function(d) { return d.title; }).append('h1').text(function(d) { return d.title })
        sections.append('div').html(function(d) { return d.content })

        d3.graphScroll()
          .sections(d3.selectAll('.section'))
          .on('active', function(i) {
            self.content = self.datum.stories[i]
            self.current = i
          })

    })
  },
  mounted: function() {
    var self = this;
    
    window.onresize = function(event) {
      self.loadContent(self.content, 1500)
    };
    
  },
  methods: {
    centerPoint(x, y, scale = 1, duration = 1500) {
      this.zoom.transform(this.svg.transition().duration(duration),
        d3.zoomIdentity.scale(scale)
        .translate(
          ((-x * scale) + ((scale - 1) * 1000) + (window.innerWidth / 2)) / scale,
          ((((-y + 1000) * scale) - (((scale - 1) * 500) + 1000)) + window.innerHeight / 2) / scale
        )
      );
    },
    loadContent(item, duration = item.duration) {
      var self = this;
      this.centerPoint(item.x, item.y, item.scale, duration)

      //unmark all countries
      self.svg.selectAll('path[data-name]').classed('active', false)

      //mark all countries
      item.countries.forEach(function(country) {
        self.svg.selectAll('path[data-name="' + country + '"]')
          .classed('active', true)
      });

      self.svg.selectAll('g').classed('active', false);

      if (item.class) {
        if (item.class == 'all') {
          self.svg.selectAll('.animations > g').classed('active', true);
        } else {
          self.svg.selectAll('.' + item.class).classed('active', true);
        }
      }

    },
    goToTop() {
      window.scrollTo(0, 0);
    }
  },
  watch: {
    current(val) {
      window.dispatchEvent(new Event('resize'));
      this.loadContent(this.content)
    }
  }
}

</script>


<style>
.moneymap {
    background: #d54a3e;
}
.moneymap path{
    fill:#f5f2c7;
    stroke:#f5f2c7;
}
.moneymap path.active{
    fill: #000000;
}
.moneycontent .section {
    background: rgba(213, 73, 62, 0.95);
    color: #f9f8e6;
}
</style>