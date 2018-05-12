<template>
    <input-icon
        v-model="search"
        :left-icons="{ search: actionWrapper }"
        :right-icons="{ 'times-circle': clear }"
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

            action: {
                type: Function,
                default: () => {},
            },
        },

        data() {
            return {
                search: '',
            }
        },

        methods: {
            actionWrapper() {
                return () => this.action(this.search)
            },

            clear() {
                this.search = ''
            },
        },
    }
</script>
