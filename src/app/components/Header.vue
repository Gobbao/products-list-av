<template>
    <div class="header">
        <img
            class="header__image"
            src="~_images/mmartan.png">

        <search
            class="header__search"
            placeholder="Lençol avulso" />
    </div>
</template>

<script>
    import Search from '_commons/inputs/Search.vue'

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

        background-color: $color-grey;

        border-bottom: 1px solid darken($color-grey, 2);

        &__image {
            width: 100px;
            height: 20px;
        }

        &__search {
            width: 200px;
        }
    }
</style>
