<template>
    <div id="app">
        <vue-header />

        <transition
            name="fade"
            mode="out-in"
        >
            <router-view class="container" />
        </transition>
    </div>
</template>

<script>
    import VueHeader from '_components/Header.vue'

    export default {
        name: 'App',

        components: {
            VueHeader,
        },
    }
</script>

<style lang="scss" scoped>
    .container {
        padding: 15px;
    }
</style>
