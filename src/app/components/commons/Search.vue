<template>
    <input-icon
        :left-icons="{ search: '', times: '' }"
        placeholder="Pesquise aqui" />
</template>

<script>
    import InputIcon from '_commons/inputs/InputIcon.vue'

    export default {
        name: 'Search',

        components: {
            InputIcon,
        },

        props: {
            placeholder: {
                type: String,
                default: '',
            },
        },
    }
</script>

<style lang="scss" scoped>
</style>

