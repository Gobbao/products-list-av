<template>
    <div class="search">
        <input
            :placeholder="placeholder"
            class="search__input"
            type="text">
    </div>
</template>

<script>
    export default {
        name: 'Search',

        props: {
            placeholder: {
                type: String,
                default: '',
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '~_scss_config/variables';

    .search {
        &__input {
            width: 100%;
            height: 25px;

            border: 2px solid $color-grey;
            border-radius: 25px;

            &::placeholder {
                color: darken($color-grey, 50);
                opacity: .5;
            }
        }
    }
</style>

