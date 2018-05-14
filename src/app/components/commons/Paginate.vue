<template>
    <div class="paginate">
        <i class="paginate__item fas fa-angle-double-left paginate__item--disabled" />
        <i class="paginate__item fas fa-angle-left paginate__item--disabled" />

        <div class="paginate__item paginate__item--selected">1</div>
        <div class="paginate__item">2</div>
        <div class="paginate__item">3</div>

        <i class="paginate__item fas fa-angle-right" />
        <i class="paginate__item fas fa-angle-double-right" />
    </div>
</template>

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

            &--box {
                background-color: $color-white;

                border: 1px solid darken($color-grey--dark, 20);
                border-radius: 5px;
            }

            &--disabled {
                color: darken($color-grey--dark, 15);
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
