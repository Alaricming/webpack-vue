<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        click: {
            type: Boolean,
            default: true
        },
        scrollX: {
            type: Boolean,
            default: false
        },
        scrollY: {
            type: Boolean,
            default: true
        },
        listenScroll: {
            type: Boolean,
            default: false
        },
        data: {
            type: Array,
            default: null
        },
        pullup: {
            type: Boolean,
            default: false
        },
        pulldown: {
            type: Boolean,
            default: false
        },
        beforeScroll: {
            type: Boolean,
            default: false
        },
        refreshDelay: {
            type: Number,
            default: 20
        }
    },
    data() {
        return {
            scroll
        }
    },
    mounted() {
        console.log('mina');
        let that = this;
        setTimeout(function() {
            that._initScroll();
        }, 20);
    },
    methods: {
        _initScroll() {
            if (!this.$refs.wrapper) {
                return
            };
            this.scroll = new BScroll(this.$refs.wrapper, {
                probeType: this.probeType,
                click: this.click,
                scrollX: this.scrollX,
                data: this.data,
                pulldown: this.pulldown
            });
            if (this.listenScroll) {
                this.scroll.on('scroll', (pos) => {
                    this.$emit('scroll', pos)
                })
            };
            if (this.pullup) {
                this.scroll.on('scrollEnd', () => {
                    this.$emit('scrollEnd')
                })
            };
            if (this.pulldown) {
                this.scroll.on('pulldown', () => {
                    this.$emit('pulldown')
                })
            }
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
