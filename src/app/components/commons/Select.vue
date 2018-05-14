<template>
    <div class="select">
        <ul :class="{ 'select__list': true, 'select__list--opened': isOpened }">
            <li
                v-for="(option, index) in options"
                :key="index"
                class="select__list__option"
                @click="toggleModal(option)"
            >
                {{ `${option} ${sufix}` }}
            </li>

            <li
                class="select__list__option select__list__option--selected"
                @click="toggleModal(selected)"
            >
                {{ `${selected || (options.length ? options[0] : '')} ${sufix}` }}
            </li>

            <i class="select__list__arrow fas fa-chevron-down" />
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Select',

        props: {
            options: {
                type: Array,
                default: () => [],
            },

            sufix: {
                type: String,
                default: '',
            },

            value: {
                type: String,
                default: '',
            },
        },

        data() {
            return {
                isOpened: false,
            }
        },

        computed: {
            selected: {
                get() {
                    return this.value
                },
                set(selected) {
                    this.$emit('input', selected)
                },
            },
        },

        methods: {
            toggleModal(option) {
                this.isOpened = !this.isOpened
                this.selected = option
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '~_scss_config/variables';

    $select-height : 30px;

    .select {
        width: 100%;
        height: $select-height;

        position: relative;

        &__list {
            width: 100%;

            position: absolute;
            bottom: 0;
            left: 0;

            border: 1px solid darken($color-grey--dark, 20);
            border-radius: 5px;
            box-shadow: 0 0 1px 0 darken($color-grey--dark, 10);

            background-color: $color-white;

            color: darken($color-grey--dark, 50);

            &--opened {
                & .select__list {
                    &__option {
                        display: block;

                        &:hover {
                            background-color: $color-grey--dark;

                            color: darken($color-grey--dark, 80);
                        }
                    }

                    &__arrow {
                        transform: rotate(180deg);
                    }
                }
            }

            &__option {
                height: $select-height;

                padding: 0 15px;

                display: none;

                line-height: $select-height;

                cursor: pointer;

                &:not(:last-child) {
                    border-bottom: 1px solid darken($color-grey--dark, 5);
                }

                &--selected {
                    display: block;
                }
            }

            &__arrow {
                position: absolute;
                bottom: 5px;
                right: 15px;

                color: darken($color-grey--dark, 10);
                font-size: 20px;

                cursor: pointer;

                transform: rotate(0);

                transition: transform .4s;
            }
        }
    }
</style>
