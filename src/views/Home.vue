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

    <h1 class="section-name" id="projects-section">Projects</h1>

   

    <Projects />


    <h1 class="section-name" id="projects2">Embedded Systems Projects</h1>

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
      <p class="project-link"><a href="../../images/Lab4_report.pdf" download="multiagentdoorsensor.pdf">Multi-Agent MQTT Project</a></p>
    </div>

    </div>


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




</style>