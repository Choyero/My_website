<template>
    <div class="container">
        <div class="logos">
            <a href="https://github.com/Choyero/" class="logos__link">
                <img class="logos__img" src="../../public/images/github.svg" alt="">
            </a>
            <a href="https://linkedin.com/in/tim-gow" class="logos__link">
                <img class="logos__img" src="../../public/images/in.svg" alt="">
            </a>
        </div>
        <h1>Timothy Gow <span>&copy;2020</span></h1>


    </div>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style lang="scss" scoped>


.container {
    height: 38rem;
    background: #000;
    font-size: 1.5rem;
    color: #fff;
    font-weight: 100;
    text-transform: uppercase;
    & span {
        color: #2196f3;
    }
}

.logos {
    display: flex;
    justify-content: center;

    &__link:not(:last-child) {
        margin-right: 5%;
    }

    &__img {
        margin: 8rem 0;
        height: 8rem;
        width: 8rem;
    }
}

</style>