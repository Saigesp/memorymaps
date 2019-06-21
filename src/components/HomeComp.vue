<template>

  <div>
    <main class="homemain">
      <div class="homemain-header" :style="{backgroundImage: 'url('+ img.back + ')'}">
        <div class="homemain-body">
          <p>¿Cómo cartografiamos el mundo? Los mapas configuran el modo en que vemos nuestras ciudades, nuestros países, las relaciones geopolíticas. Mapas Para La Acción es un proyecto del Instituto 25M y la Secretaría de Europa de Podemos para entender qué silencios alberga el modo en que dibujamos el territorio. Dos colecciones, editadas primero en papel, que se recogen ahora en esta página web y que ponen colores y trazos al trabajo de colectivos y personas expertas desde la perspectiva de diversos ilustradores e ilustradoras. Para mirar de otro modo, y luego hacer.</p>
        </div>
      </div>
      <div class="homemain-wrap">
        <div class="homemaps">
          <div class="homemap">
            <div class="homemap-thumb">
              <img :src="ills['europa.png']" alt="Europa Fortaleza">
            </div>
            <div class="homemap-body">
              <h2>Europa en Mapas</h2>
              <p>Conocemos bien el mapa de Europa, pero... ¿qué pasa si lo miramos desde otro punto de vista? Las fronteras cambian, los países se redimensionan, los puntos clave se iluminan bajo otra luz.</p>
              <p><strong>#EuropaEnMapas</strong> es un proyecto que quiere cartografiar aspectos cruciales pra una visión crítica y transformadora de la Europa contemporánea, como son las migraciones y la evasión fiscal. Los mapas, editados primero en papel, se recogen ahora en esta página web.</p>
              <div class="portadas">
                <router-link :to="{name:'money'}"><img :src="ills['dinero.png']" title="La rutal del dinero" alt="La rutal del dinero"></router-link>
                <router-link :to="{name:'fort'}"><img :src="ills['fortaleza.png']" title="Europa Fortaleza" alt="Europa Fortaleza"></router-link>
              </div>
            </div>
          </div>
          <div class="homemap">
            <div class="homemap-thumb">
              <img :src="ills['memoria.png']" alt="Mapas de la Memoria">
            </div>
            <div class="homemap-body">
              <h2>Mapas de la Memoria</h2>
              <p>A menudo, recorremos la ciudad sin ser conscientes de las historias que esconden sus calles y sus edificios, testigos mudos de una memoria de dolor y de lucha, de gritos y de silencios, de oscuridad y de conquistas.</p>
              <p><strong>#MemoriaDe</strong> recorre el pasado reciente de Madrid a través de distintas perspectivas temáticas: el antifranquismo, el feminismo, las luchas LGTBI, el movimiento estudiantil y las luchas vecinales. La ciudad respira memoria. Estos mapas quieren ayudar a recordarla, para que no caminemos sin ver.</p>
              <div class="portadas">
                <router-link :to="{name:'memory'}"><img :src="ills['feminismo.jpg']" title="Memoria de Nosotras" alt="Memoria de Nosotras"></router-link>
                <router-link :to="{name:'memory'}"><img :src="ills['democracia.jpg']" title="Memoria de lucha democrática" alt="Memoria de lucha democrática"></router-link>
                <router-link :to="{name:'memory'}"><img :src="ills['estudiantes.jpg']" title="Memoria de lucha estudiantil" alt="Memoria de lucha estudiantil"></router-link>
                <router-link :to="{name:'memory'}"><img :src="ills['orgullo.jpg']" title="Memoria de Orgullo" alt="Memoria de Orgullo"></router-link>
                <router-link :to="{name:'memory'}"><img :src="ills['vecinos.jpg']" title="Memoria de Barrio" alt="Memoria de Barrio"></router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="homemain-footer">
        </div>
      </div>
    </main>
    <footer class="footer">
      <div class="footer-logos">
        <a href="https://www.guengl.eu/" target="_blank"><img :src="img.GUE" alt="GUE"></a>
        <a href="https://instituto25m.info/" target="_blank"><img :src="img.i25m" alt="i25m"></a>
        <a href="https://podemos.info/" target="_blank"><img :src="img.podemos" alt="Podemos"></a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomeComp',
  data() {
    return {
      img: {
        back:      require('../assets/img/back.png'),
        europa:    require('../assets/img/logos/europa.svg'),
        GUE:       require('../assets/img/logos/GUE.svg'),
        i25m:      require('../assets/img/logos/i25m.svg'),
        podemos:   require('../assets/img/logos/podemos.svg'),
      },
      ills: {
        'dinero.png':       require('../assets/img/home/dinero.png'),
        'fortaleza.png':    require('../assets/img/home/fortaleza.png'),
        'europa.png':       require('../assets/img/home/europa.png'),
        'memoria.png':      require('../assets/img/home/memoria.png'),
        'feminismo.jpg':    require('../assets/img/memory/feminismo.jpg'),
        'democracia.jpg':   require('../assets/img/memory/democracia.jpg'),
        'estudiantes.jpg':  require('../assets/img/memory/estudiantes.jpg'),
        'orgullo.jpg':      require('../assets/img/memory/orgullo.jpg'),
        'vecinos.jpg':      require('../assets/img/memory/vecinos.jpg'),
      }
    }
  },
  created: function() {},
  mounted: function() {}
}

</script>

<style>
body {
  background: #e8e8e8;
}

.homemain-header {
  padding: 80px 40px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.homemain-body {
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
  color: white;
  font-size: 16px;
}

.homemain-body p:last-child {
  margin-bottom: 0;
}

.homemain {
  background: white;
}

.homemain h1 {
  text-align: center;
  font-size: 36px;
  margin-bottom: 40px;
}

.homemain p {}

.homemain-wrap {
  display: block;
  padding: 40px 20px;
  max-width: 820px;
  margin: 0 auto;
}

.homemain-footer {}

.homemaps {}

.homemap {
  margin: 40px 0 100px;
  display: flex;
  flex-wrap: wrap;
}

.homemap .homemap-thumb {
  flex: 1 1 50%;
  /*margin: 30px 0 30px -5px;*/
}

.homemap .homemap-body {
  flex: 1 1 100%;

}

.homemaps a {
  transition: opacity 350ms ease;
}

.homemaps a:hover {
  opacity: 0.5;
}

.homemaps h2 {
  margin-top: 20px;
}

.homemaps img {
  width: 100%;
  height: auto;
}

.homemaps .portadas {
  display: flex;
  flex-wrap: nowrap;
}

.homemaps .portadas a {
  display: block;
  flex: 0 1 67px;
  margin-right: 3px;
}

.homemaps .portadas img {
  width: 100%;
  height: auto;
}

.footer-logos {
  text-align: center;
}

.footer-logos img {
  width: 100%;
  max-width: 100px;
}

.footer {
  margin-top: 40px;
}



@media only screen and (min-width: 670px) {
  .homemap {
    flex-wrap: nowrap;
  }

  .homemap .homemap-body {
    margin-left: 40px;
    flex: 1 1 calc(50% - 40px);
  }

  .homemaps h2 {
    margin-top: 0;
  }

  .homemain-body>p {
    max-width: 420px;
  }
}

</style>
