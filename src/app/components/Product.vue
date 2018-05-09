<template>
    <div class="product">
        <div class="product__images">
            <img
                class="product__images__single"
                src="~_images/kit-cama.jpg">
            <img
                class="product__images__single"
                src="~_images/kit-cama.jpg">
            <img
                class="product__images__single"
                src="~_images/kit-cama.jpg">
        </div>

        <div class="product__info">
            <div class="product__info__basic">
                <span class="product__info__basic__name">{{ product.name }}</span>
                <span class="product__info__basic__categories">{{ categories }}</span>
            </div>
            <div class="product__info__price">
                <span class="product__info__price__old">R$98,00</span>
                <span class="product__info__price__per">por</span>
                <span class="product__info__price__current">R$298,00</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Product',

        props: {
            product: {
                type: Object,
                required: true,
            },
        },

        computed: {
            categories() {
                return this.product.categories
                    .map(category => category.name)
                    .join(' · ')
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '~_scss_config/variables';

    .product {
        height: 80px;

        padding: 4px 15px;

        background-color: $color-white;

        display: flex;
        align-items: center;

        &__images {
            margin-right: 20px;

            display: flex;

            &__single {
                width: 60px;
                height: 60px;

                &:not(:first-child) {
                    margin-left: 4px;
                }
            }
        }

        &__info {
            width: 100%;
            height: 100%;

            max-width: 350px;

            display: flex;
            align-items: center;
            justify-content: space-between;

            &__basic {
                display: flex;
                flex-direction: column;

                &__name {
                    margin-bottom: 2px;

                    font-size: 14px;
                }

                &__categories {
                    color: darken($color-grey, 40);
                    font-size: 11px;
                }
            }

            &__price {
                color: darken($color-grey, 30);
                font-size: 14px;

                &__old {
                    text-decoration: line-through;
                }

                &__current {
                    color: black;
                }
            }
        }
    }
</style>
