<template>
    <div class="paginate">
        <i
            :class="{'paginate__item--disabled': (currentPage === 1)}"
            class="paginate__item fas fa-angle-double-left"
            @click="changePage(1)" />
        <i
            :class="{'paginate__item--disabled': (currentPage === 1)}"
            class="paginate__item fas fa-angle-left"
            @click="changePage(currentPage - 1)" />

        <div
            v-for="page in pages"
            :key="page"
            :class="{'paginate__item': true, 'paginate__item--selected': (page === value)}"
            @click="changePage(page)"
        >
            {{ page }}
        </div>

        <i
            :class="{'paginate__item--disabled': (currentPage === totalPages)}"
            class="paginate__item fas fa-angle-right"
            @click="changePage(currentPage + 1)" />
        <i
            :class="{'paginate__item--disabled': (currentPage === totalPages)}"
            class="paginate__item fas fa-angle-double-right"
            @click="changePage(totalPages)" />
    </div>
</template>

<script>
    export default {
        name: 'Paginate',

        props: {
            value: {
                type: Number,
                default: 1,
            },

            totalPages: {
                type: Number,
                default: 1,
            },
        },

        computed: {
            pages() {
                const pages = []
                const limit = 3
                let startPage = this.value === this.totalPages
                    ? this.totalPages - 2
                    : this.value - 1
                startPage = startPage <= 0 ? 1 : startPage
                let endPage = startPage + limit
                endPage = endPage > this.totalPages
                    ? this.totalPages + 1
                    : endPage

                for (startPage; startPage < endPage; startPage += 1) {
                    pages.push(startPage)
                }

                return pages
            },

            currentPage: {
                get() {
                    return this.value
                },
                set(page) {
                    this.$emit('input', page)
                },
            },
        },

        methods: {
            changePage(page) {
                if (page < 1 || page > this.totalPages) {
                    return
                }

                this.currentPage = page
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '~_scss_config/variables';

    $paginate-height : 30px;

    .paginate {
        height: $paginate-height;

        margin: 0 auto;

        cursor: default;

        &__item {
            width: 30px;

            display: inline-block;

            color: darken($color-grey--dark, 50);
            font-size: 18px;
            line-height: $paginate-height;
            text-align: center;

            cursor: pointer;

            &--box {
                background-color: $color-white;

                border: 1px solid darken($color-grey--dark, 20);
                border-radius: 5px;
            }

            &--disabled {
                color: darken($color-grey--dark, 15);

                cursor: default;
            }

            &--selected {
                @extend .paginate__item--box;
            }

            &:not(.paginate__item--disabled):hover {
                @extend .paginate__item--box;
            }
        }
    }
</style>
