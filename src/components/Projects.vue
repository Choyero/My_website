<template>
    <div class="container" >
        <div class="projects-container">
            <div class="projects" data-aos="fade-right">
                <figure class="projects__shape">
                    <img src="../../public/images/project1.jpg" alt="Project img" class="projects__img">
                    <figcaption class="projects__caption">
                        Natours
                        <br>
                        <br>
                        HTML5 | SASS
                    <div class="projects__btn">
                        <a href="#popup" class="projects__link" @click="select('p1', 'http://natours.timothyjgow.com/', 'https://github.com/Choyero/Natours.git')">View Project
                            <svg class="projects__arrow">
                                <use xlink:href="../../public/images/sprite.svg#icon-arrow-long-right"></use>
                            </svg>
                        </a>
                    </div>
                    </figcaption>
                </figure>
            </div>

            <div class="projects" data-aos="fade-left">
                <figure class="projects__shape">
                    <img src="../../public/images/project2.jpg" alt="Project img" class="projects__img">
                    <figcaption class="projects__caption">
                        Web Pantry
                        <br>
                        <br>
                        HTML5 | CSS3 | VUE JS
                        <div class="projects__btn">
                            <a href="#popup" class="projects__link" @click="select('p2', 'http://webpantry.timothyjgow.com/', 'https://github.com/Choyero/webpantry')">View Project
                                <svg class="projects__arrow">
                                    <use xlink:href="../../public/images/sprite.svg#icon-arrow-long-right"></use>
                                </svg>
                            </a>
                        </div>
                    </figcaption>
                </figure>
            </div>

            <div class="projects" data-aos="fade-right">
                <figure class="projects__shape">
                    <img src="../../public/images/project3.jpg" alt="Project img" class="projects__img">
                    <figcaption class="projects__caption">
                        Guitar Guys
                        <br>
                        <br>
                        HTML5 | CSS3 | Bootstrap 4
                        <div class="projects__btn">
                            <a href="#popup" class="projects__link" @click="select('p3', 'http://guitarguys.timothyjgow.com/', 'https://github.com/Choyero/Guitar-guys.git')">View Project
                                <svg class="projects__arrow">
                                    <use xlink:href="../../public/images/sprite.svg#icon-arrow-long-right"></use>
                                </svg>
                            </a>
                        </div>
                    </figcaption>
                </figure>
            </div>


            <div class="projects" data-aos="fade-left">
                <figure class="projects__shape">
                    <img src="../../public/images/project4.jpg" alt="Project img" class="projects__img">
                    <figcaption class="projects__caption">
                        Web Pantry 2.0
                        <br>
                        <br>
                        HTML5 | CSS3 | VUE JS | NODE JS
                        <div class="projects__btn">
                            <a href="#popup" class="projects__link" @click="select('p4', 'http://webpantry2.timothyjgow.com/', 'https://github.com/Choyero/CalTracker.git')">View Project
                                <svg class="projects__arrow">
                                    <use xlink:href="../../public/images/sprite.svg#icon-arrow-long-right"></use>
                                </svg>
                            </a>
                        </div>
                    </figcaption>
                </figure>
            </div>


            <div class="projects" data-aos="fade-right">
                <figure class="projects__shape">
                    <img src="../../public/images/project5.jpg" alt="Project img" class="projects__img">
                    <figcaption class="projects__caption">
                        Trillo
                        <br>
                        <br>
                        HTML5 | SASS
                        <div class="projects__btn">
                            <a href="#popup" class="projects__link" @click="select('p5', 'http://trillo.timothyjgow.com/', 'https://github.com/Choyero/Trillo.git')">View Project
                                <svg class="projects__arrow">
                                    <use xlink:href="../../public/images/sprite.svg#icon-arrow-long-right"></use>
                                </svg>
                            </a>
                        </div>
                    </figcaption>
                </figure>
            </div>



            <div class="projects" data-aos="fade-left">
                <figure class="projects__shape">
                    <img src="../../public/images/project6.jpg" alt="Project img" class="projects__img">
                    <figcaption class="projects__caption">
                        Star Wars Language Translator
                        <br>
                        <br>
                        HTML5 | CSS3 | JavaScript
                        <div class="projects__btn">
                            <a href="#popup" class="projects__link" @click="select('p6', 'http://swtranslate.timothyjgow.com/', 'https://github.com/Choyero/creative-project-2.git')">View Project
                                <svg class="projects__arrow">
                                    <use xlink:href="../../public/images/sprite.svg#icon-arrow-long-right"></use>
                                </svg>
                            </a>
                        </div>
                    </figcaption>
                </figure>
            </div>


            <div class="projects" data-aos="fade-right">
                <figure class="projects__shape">
                    <img src="../../public/images/project7.jpg" alt="Project img" class="projects__img">
                    <figcaption class="projects__caption">
                        Easy Weather Results
                        <br>
                        <br>
                        HTML5 | CSS3 | JavaScript
                        <div class="projects__btn">
                            <a href="#popup" class="projects__link" @click="select('p7', 'http://weather.timothyjgow.com/', 'https://github.com/Choyero')">View Project
                                <svg class="projects__arrow">
                                    <use xlink:href="../../public/images/sprite.svg#icon-arrow-long-right"></use>
                                </svg>
                            </a>
                        </div>
                    </figcaption>
                </figure>
            </div>


            <div class="projects" data-aos="fade-left">
                <figure class="projects__shape">
                    <img src="../../public/images/project8.jpg" alt="Project img" class="projects__img">
                    <figcaption class="projects__caption">
                        Tim's Portfolio
                        <br>
                        <br>
                        HTML5 | SASS | VUE JS
                        <div class="projects__btn">
                            <a href="#popup" class="projects__link" @click="select('p8', 'http://timothyjgow.com/', 'https://github.com/Choyero/My_website.git')">View Project
                                <svg class="projects__arrow">
                                    <use xlink:href="../../public/images/sprite.svg#icon-arrow-long-right"></use>
                                </svg>
                            </a>
                        </div>
                    </figcaption>
                </figure>
            </div>



        </div>

    </div>
</template>


<script>

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    offset: 300,
    delay: 0,
    duration: 500,
    easing: 'ease',
    once: false,
    mirror: false
});
export default {
    name: 'Projects',
    methods: {
        select(val, site, code) {
            this.$root.$data.projectSelected = val;
            this.$root.$data.projectSiteLink = site;
            this.$root.$data.projectCodeLink = code;
        }
    }
}

</script>


<style lang="scss" scoped>

.container {
    padding: 0 10%;
}

.projects-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.projects {
    position: relative;
    

    &__shape {
        background: #000;
        width: 100%;
        height: 50rem;

    }

    &__img {
        height: 100%;
        backface-visibility: hidden;
        transition: all .5s;
        


    }

    &__caption {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        text-transform: uppercase;
        font-size: 3rem;
        text-align: center;
        opacity: 0;
        transition: all .4s ease-in-out;
        backface-visibility: hidden;
        z-index: 200;
    }

    &:hover &__caption {
        opacity: 1;
        
    }

    &:hover &__img {
        
            filter: opacity(0);
    }

    &__btn {
        
        margin-top: 3rem;
        padding: 0 0;
        border: .4rem solid #fff;
        display: block;
        transition: all .4s;
        &:hover .projects__link .projects__arrow {
            fill:#2196f3;
            transform: rotate(90deg);
        }

        &:hover .header__link {
            color: #2196f3;
        }

        &:hover {
            border-color: #2196f3;
        }
    }

    &__link {
        &,
        &:link,
        &:visited {
            text-transform: uppercase;
            text-decoration: none;
            padding: 1.5rem 2rem;
            display: inline-block;
            border-radius: 10rem;
            transition: all .2s;
            position: relative;
            color: #fff;  
            font-size: 2.5rem;
            border: none;
            cursor: pointer;
            transition: all .4s;
            }
        }

        &__arrow {
            height: 2rem;
            width: 2rem;
            fill: #fff;
            backface-visibility: hidden;
            transform: scale(1);
            transition: all .4s;
        }

}

</style>