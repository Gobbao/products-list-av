<template>
    <input-icon
        v-model="search"
        :action="() => action(search)"
        :left-icons="{ search: () => action(search) }"
        :right-icons="{ 'times-circle': clear }"
        :placeholder="placeholder" />
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
            clear() {
                this.search = ''
            },
        },
    }
</script>
