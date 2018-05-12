<template>
    <div class="prod_list">
        <div class="prod_list__header">
            <h2 class="prod_list__header__title">Lençol avulso</h2>
        </div>

        <div class="prod_list__content">
            <span class="prod_list__content__total">200 produtos encontrados</span>

            <product
                v-for="product in products"
                :key="product.id"
                :product="product" />
        </div>

        <div class="prod_list__actions">actions</div>
    </div>
</template>

<script>
    import Product from '_components/Product.vue'

    export default {
        name: 'ProductList',

        components: {
            Product,
        },

        data() {
            return {
                products: [
                    {
                        id: 1,
                        name: 'Kit de cama 210 fios',
                        categories: [
                            { name: 'Classic I' },
                            { name: 'Solteiro Extra' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Kit de cama 210 fios',
                        categories: [
                            { name: 'Classic I' },
                            { name: 'Solteiro Extra' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Kit de cama 210 fios',
                        categories: [
                            { name: 'Classic I' },
                            { name: 'Solteiro Extra' },
                        ],
                    },
                ],
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '~_scss_config/variables';
    @import '~_scss_components/divider';

    .prod_list {
        &__header {
            height: 80px;

            background-color: $color-grey--light;

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

                display: block;

                color: darken($color-grey, 50);
                font-size: 11px;
                text-transform: uppercase;
            }
        }
    }
</style>

