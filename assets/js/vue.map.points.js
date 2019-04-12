Vue.component('d3vuemap-points', {
    data: function () {
        return {
            points: [],
        }
    },
    props: ['lat', 'lng', 'zoom'],
    template: `
    <div id="map" style="height: 100%;"></div>
    `,
    mounted: function(){
        var self = this;

        self.map = new D3MapPoints(d3.select(self.$el), self.points ,{
            lat: self.lat,
            lng: self.lng,
            zoom: self.zoom,
            height: d3.select(self.$el).attr('height'),
        });

        self.map.on('move', (data)=>{
            EventBus.$emit('map_move', data);
        })

        EventBus.$on('addpoints', (data)=>{
            self.points = data;
        })
    },
    watch: {
        points: function(val){
            //console.log('d3vuemap addpoints', val);
            this.map.loadPoints(this.points);
        }
    }
})