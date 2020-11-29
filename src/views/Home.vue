<template>
  <div class="home">
    
    <Header />
    <div class="container">
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#2d3436" fill-opacity="1" d="M0,192L48,160C96,128,192,64,288,37.3C384,11,480,21,576,53.3C672,85,768,139,864,165.3C960,192,1056,192,1152,165.3C1248,139,1344,85,1392,58.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
      <section class="about-me">
        <h1 class="section-name">About</h1>
        <Aboutme />
      </section>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#2d3436" fill-opacity="1" d="M0,192L48,160C96,128,192,64,288,37.3C384,11,480,21,576,53.3C672,85,768,139,864,165.3C960,192,1056,192,1152,165.3C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>

    </div>

    <svg xmlns="http://www.w3.org/2000/svg" class="divider" viewBox="0 0 1440 320">
      <path fill="#2d3436" fill-opacity="1" d="M0,128L1440,256L1440,0L0,0Z"></path>
    </svg>

    <h1 class="section-name" id="projects-section">Professional Projects</h1>

    <div class="prof_project">
      <div class="prof_project__card" data-aos="fade-left">
        <img src="../../public/images/professional/cannon.jpg" alt="">
          <div class="projects__btn">
            <a href="https://cannonreservations.byu.edu/#/" class="projects__link">Visit Site
              <svg class="projects__arrow">
                <use xlink:href="../../public/images/sprite.svg#icon-arrow-long-right"></use>
              </svg>
            </a>
          </div>
      </div>
      <div class="prof_project__card" data-aos="fade-right">
        <img src="../../public/images/professional/christmas.jpg" alt="">
          <div class="projects__btn">
            <a href="https://christmas2020.byu.edu" class="projects__link">Visit Site
              <svg class="projects__arrow">
                <use xlink:href="../../public/images/sprite.svg#icon-arrow-long-right"></use>
              </svg>
            </a>
          </div>
      </div>
      <div class="prof_project__card" data-aos="fade-left">
        <img src="../../public/images/professional/dining.jpg" alt="">
          <div class="projects__btn">
            <a href="https://dining.byu.edu" class="projects__link">Visit Site
              <svg class="projects__arrow">
                <use xlink:href="../../public/images/sprite.svg#icon-arrow-long-right"></use>
              </svg>
            </a>
          </div>
      </div>
      <div class="prof_project__card" data-aos="fade-right">
        <img src="../../public/images/professional/des.jpg" alt="">
          <div class="projects__btn">
            <a href="https://des.byu.edu" class="projects__link">Visit Site
              <svg class="projects__arrow">
                <use xlink:href="../../public/images/sprite.svg#icon-arrow-long-right"></use>
              </svg>
            </a>
          </div>
      </div>
      <div class="prof_project__card" data-aos="fade-left">
        <img src="../../public/images/professional/creamery.jpg" alt="">
          <div class="projects__btn">
            <a href="https://creamery.byu.edu" class="projects__link">Visit Site
              <svg class="projects__arrow">
                <use xlink:href="../../public/images/sprite.svg#icon-arrow-long-right"></use>
              </svg>
            </a>
          </div>
      </div>
      <div class="prof_project__card" data-aos="fade-right">
        <img src="../../public/images/professional/cougartails.jpg" alt="">
          <div class="projects__btn">
            <a href="https://cougartails.byu.edu" class="projects__link">Visit Site
              <svg class="projects__arrow">
                <use xlink:href="../../public/images/sprite.svg#icon-arrow-long-right"></use>
              </svg>
            </a>
          </div>
      </div>
      
    </div>

    <h1 class="section-name" id="projects-section">Personal Projects</h1>

    <Projects />


    <!-- <h1 class="section-name" id="projects2">Embedded Systems Projects</h1>

    <div class="container-projects">
      <div class="link-container">
      <p class="project-link"><a href="../../images/project1.pdf" download="trafficLightPI.pdf">Stop Light IOT Device Raspberry Pi</a></p>
    </div>
    <div class="link-container">
      <p class="project-link"><a href="../../images/Lab2-IT&C441.pdf" download="trafficLightWemos.pdf">Stop Light IOT Device Arduino Wemos D1 Mini</a></p>
    </div>
    <div class="link-container">
      <p class="project-link"><a href="../../images/Lab3_IT441.pdf" download="DistanceIndicator.pdf">Arduino Distance Indicator</a></p>
    </div>
    <div class="link-container">
      <p class="project-link"><a href="../../images/lab4_report.pdf" download="multiagentdoorsensor.pdf">Multi-Agent MQTT Project</a></p>
    </div>

    </div> -->


    <Contact />

    

    <Footer />

    <Popup />




  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Aboutme from '@/components/Aboutme.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'
import Popup from '@/components/Popup.vue'
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
  name: 'Home',
  components: {
    Header,
    Aboutme,
    Projects,
    Contact,
    Footer,
    Popup
  }
}
</script>

<style lang="scss" scoped>



.divider {
  margin-top: -1rem;
}

.about-me {
  padding: 5% 10%;
}

.section-name {
  color: #2196f3;
  font-size: 4rem;
  font-weight: 200;
  margin-bottom: 10rem;
  text-align: center;
  text-transform: uppercase;
}

#projects2 {
  margin-top: 10rem;
}

.project-link {
  font-size: 3rem;
  text-align: left;
  
}

.project-link a {
 
  color: #000;
}

.container-projects {
  display: flex;
}

.link-container {
  padding: 0 10%;
  margin: 5rem 0;
}

.prof_project {
  width: 80%;
  margin: 15rem auto;
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;
  justify-content: center;
  &__card {
    margin: 2rem 1rem;
  }
  &__card img{
    width: auto;
    height: 40rem;
  }
}


.projects__btn {
        
        margin-top: 1.2rem;
        padding: 0 0;
        border: .4rem solid #000;
        display: block;
        width: 50rem;
        margin-right: auto;
        margin-left: auto;
        transition: all .4s;
        color: #2196f3;
        &:hover .projects__link .projects__arrow {
            fill:#000;
            transform: scale(1.1);
        }

        &:hover .header__link {
            color: #000;
        }

        &:hover {
            border-color: #2196f3;
        }
    }

    .projects__link {
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
            color: #2196f3;
            font-size: 2.5rem;
            border: none;
            cursor: pointer;
            transition: all .4s;
            }
        }

        .projects__arrow {
            height: 2rem;
            width: 2rem;
            fill:#2196f3;
            backface-visibility: hidden;
            transform: scale(1);
            transition: all .4s;
        }


</style>