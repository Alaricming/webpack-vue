<template>
    <div class="header">
        {{count}}
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    computed: {
        count(){
            // this.$store.commit('increment');
            return this.$store.state.count
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
