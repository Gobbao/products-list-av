<template>
    <form class="input_icon input">
        <i
            v-for="icon in Object.keys(leftIcons)"
            :key="icon"
            :class="getIconClasses(icon)"
        />

        <input
            :type="type"
            :placeholder="placeholder"
            class="input_icon__input input-placeholder">

        <i
            v-for="icon in Object.keys(rightIcons)"
            :key="icon"
            :class="getIconClasses(icon, 'right')"
        />
    </form>
</template>

<script>
    export default {
        name: 'InputIcon',

        props: {
            leftIcons: {
                type: Object,
                default() { return {} },
            },

            rightIcons: {
                type: Object,
                default() { return {} },
            },

            type: {
                type: String,
                default: 'type',
            },

            placeholder: {
                type: String,
                default: '',
            },
        },

        methods: {
            getIconClasses(icon, position = 'left') {
                return ['fas', `fa-${icon}`, 'input_icon__icon', `input_icon__icon--${position}`]
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '~_scss_components/input';

    $margin-between-icons : 5px;

    .input_icon {
        display: flex;

        background-color: #FFF;

        &__icon {
            height: $input-height;

            color: $input-color;
            font-size: 14px;
            line-height: $input-height;

            cursor: pointer;

            transition: color .2s ease-in-out;

            &:hover {
                color: darken($input-color, 20);
            }

            &--left {
                margin-right: $margin-between-icons;
            }

            &--right {
                margin-left: $margin-between-icons;
            }
        }

        &__input {
            width: 100%;

            border: none;
            outline: none;
        }
    }
</style>

