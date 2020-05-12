<template>
    <div class="container">

        <section class="contact">
            <h1 class="section-name" id="contact-section">Contact</h1>
            <form class="inner-wrapper" id="contact-form" @submit.prevent="sendEmail">
                <div class="input-fields">
                    <input name="name" type="text" id="name" class="input" placeholder="Name">
                    <input name="email" type="email" id="email" class="input" placeholder="Email">
                    <textarea name="message" id="Message" placeholder="Message"></textarea>
                </div>
                <input type="submit" class="send-btn" value="Send">
            </form>
        </section>
    </div>

</template>

<script>

import emailjs from 'emailjs-com';
export default {
    name: 'Contact',

    methods: {
        sendEmail: (e) => {
            emailjs.sendForm('gmail', 'myGmail', e.target, 'user_Q334NMMyp93jcan368Rd2')
            .then((result) => {
                console.log('SUCCESS!', result.status, result.text);
            }, (error) => {
                console.log('FAILED...', error);
            });
            let frm = document.getElementById('contact-form');
            frm.reset();
            return false;
        },
    }
}
</script>


<style lang="scss" scoped>


.contact {
  margin-top: -15%;
  background-color: #2d3436;
  position: relative;
  height: 190rem;
  clip-path: polygon(50% 45%, 100% 38%, 100% 100%, 0 100%, 0% 38%);
  @media (max-width: 350px) {
      clip-path: polygon(50% 40%, 100% 38%, 100% 100%, 0 100%, 0% 38%);
  }
 
}

.section-name {
  color: #2196f3;
  font-size: 4rem;
  font-weight: 200;
  margin-bottom: 10rem;
  text-align: center;
  text-transform: uppercase;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
}


.inner-wrapper {
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    background: rgba(0,0,0,0.8);
    padding: 2% 4%;
    border-radius: .5rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 2rem;
    font-size: 2.7rem;
    @media (max-width: 700px) {
        width: 80%;
    }
    @media (max-width: 411px) {
        width: 94%;
    }
}

.input-fields {
    display: flex;
    flex-direction: column;
}

.input {
    margin-bottom: 5rem;
    background: transparent;
    border: 0;
    border-bottom: .3rem solid #fff;
    color: #2196f3;
    font-size: inherit;
    transition: all .4s;
    &:focus {
        outline: none;
        border-color: #2196f3;
    }
}

#Message {
    background: transparent;
    border: .3rem solid #fff;
    color: #2196f3;
    font-size: 4rem;
    height: 30rem;
    margin-bottom: 5rem;
    transition: all .4s;
    &:focus {
        outline: none;
        border-color: #2196f3;
    }
}

.send-btn {
    width: 12rem;
    color: #fff;
    background: transparent;
    font-size: 3rem;
    align-self: flex-end;
    padding: .5rem 1rem;
    transition: all .4s;
    &:hover {
        border-color: #2196f3;
        color: #2196f3;
    }
}





</style>