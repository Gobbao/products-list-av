<template>
    <div class="header">
        mmartan

        <search
            class="header__search"
            placeholder="Lençol avulso" />
    </div>
</template>

<script>
    import Search from '_commons/Search.vue'

    export default {
        name: 'Header',

        components: {
            Search,
        },
    }
</script>

<style lang="scss" scoped>
    @import '~_scss_config/variables';

    .header {
        width: 100%;
        height: 50px;

        padding: 0 15px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        background-color: #F7F7F7;

        border-bottom: 2px solid $color-grey--border;

        &__search {
            width: 200px;
        }
    }
</style>

