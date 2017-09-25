<template>
    <div class="home">
        <scroller class="scroller" :listenScroll="listenScroll" :probeType="probeType" :data="data" :pulldown="pulldown" :pullup="pullup" @scrollEnd="scrollEnd" @scroll="scroll">
            <div class="scroller-wrapper">
                <p>count: {{count}}</p>
                <p>{{countAlias}}</p>
                <p>{{countPlus}}</p>
                <button @click="add()">+1</button>
            </div>
        </scroller>
    </div>
</template>
<script>
import scroller from '../Scroller/BScroller.vue'
import { mapState, mapGetter, mapMutations } from 'vuex';

export default {
    components: {
        scroller
    },
    data() {
        return {
            data: [1, 21, 2, 1, 21, 2, 12, 1],
            probeType: 3,
            listenScroll: true,
            pulldown: true,
            pullup: true
        }
    },
    methods: {
        scrollEnd() {
            console.log('scrollEnd')
        },
        scroll() {
            // console.log('scroll')
        },
        loadMore() {
            alert('loadMore')
        }
    },
    created() {
        console.log(this.$store);
        this.$store.commit('increment')
    },
    methods: {
        add() {
            this.$store.commit('increment')
        }
    },
    computed: mapState({
        count: state => state.count,
        countAlias: 'count',
        countPlus(state) {
            return state.count + this.countAlias
        }
    })
    // computed: {
    //     ...mapState({count:'count'}),
    //     ...mapGetter({todos:'doneTodos'}),
    //     ...mapMutations({add:'increment'})
    // }

}
</script>
<style lang="scss" scoped>
.home {
    position: fixed;
    top: 2rem;
    left: 0;
    width: 100%;
    height: 100%
}

.scroller {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
