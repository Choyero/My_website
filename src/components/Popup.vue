<template>
    <div class="container">
        <div class="popup" id="popup">
            <div class="popup__content">
                <a href="#section-projects" class="popup__close">&times;</a>
                
                <div class="popup__video-box">
                    <img class="popup__project-video" :src="require(`../../public/images/${url}.gif`)" alt="">
                    <div class="popup__link-container">
                        <a :href="this.$root.$data.projectSiteLink" class="popup__link">Visit Site</a>
                        <a :href="this.$root.$data.projectCodeLink" class="popup__link">View Code</a>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script>


export default {
    name: 'Popup',
    data() {
        return {
            img: "<img class='popup__project-video' :src='require(`../../public/images/${this.url}.gif`)'>"
        }
    },
    computed: {
        url: function() {
            return this.$root.$data.projectSelected;
        }
    }
}
</script>


<style lang="scss" scoped>

.popup {
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(#000, .8);
    z-index: 5000;
    transition: all .3s;
    backdrop-filter: blur(5px);
    opacity: 0;
    visibility: hidden;
    transition: all .3s;
    

    &__content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(.25);
        transition: all .4s .2s;
        opacity: 0;
        width: 50%;
        @media (max-width: 810px) {
            width: 80%;
        }
        @media (max-width: 500px) {
            height: 60rem;
        }
        @media (max-width: 350px) {
            width: 90%;
        }
        height: 70rem;
        background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);
        box-shadow: 0 2rem 4rem rgba(#000, .2);
        border-radius: .3rem;
    }

    &:target {
        opacity: 1;
        visibility: visible;
    }

    &:target &__content {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }

    &__close {
        &:link,
        &:visited {
            color: #fff;
            position: absolute;
            top: 2.5rem;
            right: 2.5rem;
            font-size: 5rem;
            text-decoration: none;
            display: inline-block;
            transition: all .2s;
            line-height: 1rem;

            &:hover {
                color: #2196f3;
            }
        }
    }

    &__video-box {
        margin-top: 8%;
        color: #000;
        height: 75%;
        width: 100%;
        overflow: hidden;
        z-index: 6000;
    }

    &__project-video {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    &__link-container {
        position: absolute;
        bottom: 3%;
        right: 2%;
    }

        &__link {
        &,
        &:link,
        &:visited {
            text-transform: uppercase;
            text-decoration: none;
            padding: 1.5rem 2rem;
            display: inline-block;
            border-radius: .5rem;
            transition: all .2s;
            
            color: #fff;  
            font-size: 2.5rem;
            border: .3rem solid #fff;
            cursor: pointer;
            transition: all .4s;
            &:not(:last-child) {
                margin-right: 3rem;
            }
            }
        &:hover {
            color: #2196f3;
            border-color:  #2196f3;
        }
        
        }
}


</style>