<template>
    <div class="prod_list">
        <div class="prod_list__header">
            <h2 class="prod_list__header__title">Lençol avulso</h2>
        </div>

        <div class="prod_list__content">
            <span class="prod_list__content__total">{{ totalProducts }} produtos encontrados</span>

            <product
                v-for="product in products"
                :key="product.id"
                :product="product"
                class="prod_list__content__product" />
        </div>

        <div class="prod_list__actions">
            <custom-select
                v-model="limit"
                :options="limits"
                sufix="produtos por página"
                class="prod_list__actions__select" />

            <paginate
                v-model="page"
                :total-pages="totalPages"
                class="prod_list__actions__paginate" />
        </div>
    </div>
</template>

<script>
    import CustomSelect from '_commons/Select.vue'
    import Paginate from '_commons/Paginate.vue'
    import Product from '_components/Product.vue'

    export default {
        name: 'ProductList',

        components: {
            CustomSelect,
            Paginate,
            Product,
        },

        data() {
            return {
                limit: '4',
                limits: ['4', '8', '16', '24'],
                page: 1,
            }
        },

        computed: {
            products() {
                return this.$store.state.products.paginate.products || []
            },

            totalProducts() {
                return this.$store.state.products.paginate.count || 0
            },

            totalPages() {
                return this.$store.state.products.paginate.totalPages || 0
            },
        },

        watch: {
            limit() {
                this.page = 1
                this.updateProducts()
            },

            page() {
                this.updateProducts()
            },
        },

        beforeMount() {
            this.updateProducts()
        },

        methods: {
            updateProducts() {
                this.$store.dispatch('getProducts', {
                    limit: this.limit,
                    page: this.page,
                })
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '~_scss_config/screen';
    @import '~_scss_config/variables';
    @import '~_scss_components/divider';

    .prod_list {
        &__header {
            height: 80px;

            margin-top: 2px;

            background-color: $color-grey--light;

            @include divider(darken($color-grey--dark, 5));

            &__title {
                padding: 0 15px;

                color: $color-purple;
                font-weight: 300;
                letter-spacing: -1px;
                line-height: 80px;
            }
        }

        &__content {
            padding: 20px 10vw;

            &__total {
                margin-bottom: 20px;

                display: inline-block;

                color: darken($color-grey, 50);
                font-size: 12px;
                text-transform: uppercase;

                @include divider($color-gold, 3px, 5px);
            }

            &__product {
                &:not(:last-child) {
                    margin-bottom: 2px;
                }
            }
        }

        &__actions {
            height: 120px;

            display: flex;
            flex-direction: column;
            justify-content: space-between;

            padding: 20px 10vw;

            @include media-q() {
                height: 70px;

                flex-direction: row;
            }

            &__select {
                @include media-q($screen-xs) {
                    max-width: 220px;
                }
            }

            &__paginate {
                @include media-q($screen-xs) {
                    margin: 0;
                }
            }
        }
    }
</style>

