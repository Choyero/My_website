<template>
    <div class="content">
        <div class="about-Tim" data-aos="fade-right" data-aos-offset="120" data-aos-duration="120" data-aos-delay="50">
            <figure class="about-Tim__shape">
                <img src="../../public/images/portfolio_img.jpg" alt="Portfolio Picture" class="about-Tim__img">
                <figcaption class="about-Tim__caption">
                    Tim Gow
                </figcaption>
            </figure>

        </div>
        <div class="skills">
            <h2 class="skills__header">
                Skills
            </h2>
            <div class="skills__tech-container">
                <div class="skills__tech-card" data-aos="fade-down" data-aos-offset="120" data-aos-duration="120" data-aos-delay="50">
                    <img src="../../public/images/front-end.svg" alt="" class="skills__icon">
                    <h4>Front-End</h4>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3 | SASS</li>
                        <li>JavaScript</li>
                        <li>VUE JS</li>
                    </ul>
                </div>

                <div class="skills__tech-card" data-aos="fade-up" data-aos-offset="120" data-aos-duration="120" data-aos-delay="50">
                    <img src="../../public/images/back-end.svg" alt="" class="skills__icon">
                    <h4>Back-End</h4>
                    <ul>
                        <li>Node JS</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>Python</li>
                    </ul>
                </div>

                <div class="skills__tech-card" data-aos="fade-down" data-aos-offset="120" data-aos-duration="120" data-aos-delay="50">
                    <img src="../../public/images/technology.svg" alt="" class="skills__icon">
                    <h4>IT</h4>
                    <ul>
                        <li>Routing & Switching</li>
                        <li>Scripting</li>
                        <li>Tech Support</li>
                        <li>Security</li>
                    </ul>
                </div>


            </div>

            <div class="skills__text-box">
                <h4>Who am I?</h4>
                <p class="skills__text">
                    I'm a student in the Information Technology Program at Brigham Young University.
                    Web development, networking, UI design, and data analysis with Python are my passions.
                </p>
            </div>

        </div>
    </div>
</template>


<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
   easing: 'ease-in' 
});
export default {
    name: 'Aboutme',
    data() {
        return {

        }
    },
    methods: {

    },
}
</script>

<style lang="scss" scoped>

//#2196f3

.content {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    font-size: 3rem;
    border-radius: 19%;
    
  @media (max-width: 730px) {
    flex-direction: column-reverse;
    align-items: center;
    
    justify-content: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
    
    background: linear-gradient(315deg, #2d3436 0%, #2196f3 74%);
    clip-path: polygon(2% 0, 100% 0, 100% 100%, 35% 100%);

}



.about-Tim {
    max-width: 30%;
    padding-left: 17%;
    
    @media (max-width: 730px) {
        padding-left: 0;
        max-width: 95%;
    }


    &__shape {
        width: 25rem;
        height: 25rem;
        -webkit-shape-outside: circle(50% at 50% 50%);
        shape-outside: circle(50% at 50% 50%);
        -webkit-clip-path: circle(50% at 50% 50%);
        clip-path: circle(50% at 50% 50%);
        transform: translateX(-3rem);
        position: relative;
        margin: 7rem 0;
    }

    &__img {
        height: 100%;
        transform: translate(0, 0) scale(1.6);
        backface-visibility: hidden;
        transition: all .5s;
    }

    &__caption {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 20%);
        color: #fff;
        text-transform: uppercase;
        
        text-align: center;
        opacity: 0;
        transition: all .5s;
        backface-visibility: hidden;
    }

    &:hover &__caption {
        opacity: 1;
        transform: translate(-50%, -50%);
    }

    &:hover &__img {
        transform: translate(-1rem, 0) scale(1.4);
        filter: blur(3px) brightness(60%);
    }


}

.skills {
    max-width: 62%;
    padding-right: 6%;

    @media (max-width: 730px) {
        padding-left: 0;
        max-width: 80%
    }



    &__header {
        margin-top: 4rem;
        text-align: center;
        font-size: 4rem;
        font-weight: 600;
        text-transform: uppercase;
        color: #fff;
        letter-spacing: .5rem;
    }

    &__tech-container {
        
        display: flex;
        justify-content: space-evenly;
        @media (max-width: 430px) {
            flex-direction: column;
            align-items: center;
        }
    }

    &__tech-card {
        margin-top: 3rem;
        color:#fff;
        background: linear-gradient(315deg, #2d3436 0%, #000000 74%);
        font-size: 2.5rem;
        padding: 3rem 4rem;
        width: 30%;
        @media (max-width: 430px) {
            width: 100%;
        }
        text-align: center;
        border-radius: .5rem;
        box-shadow: 0 1.5rem 4rem rgba(#000, .15);
        transition: transform .3s;
        &:hover {
            transform: translateY(-2rem) scale(1.03);
        }

        & h4 {
            margin: 2rem 0;
            font-weight: 700;
            letter-spacing: .2rem;
        }

        & ul {
            list-style: none;
            font-weight: 200;
            letter-spacing: .1rem;
        }

        & li {
            margin: 1.2rem 0;
        }
    }

    &__icon {
        height: 8rem;
        width: 8rem;
    }

    &__text-box {
        margin-top: 4rem;
        font-size: 3rem;
        text-align: center;
        color:#fff;
        width: 100%;
        padding-bottom: 2rem;
        & h4 {
            color: #fff;
            margin: 2rem 0;
            font-weight: 700;
            letter-spacing: .2rem;
        }
       
    }

}


</style>