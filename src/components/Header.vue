<template>
    <div class="header">





    <div class="nav-big">
        <div class="navigation-main">
            <div class="navigation-main__icon-box">
                <img class="navigation-main__icon" src="../../public/images/interface.svg" alt="">
                <h3 class="navigation__text">
                    Tim Gow
                </h3>
            </div>

            <div class="link-box">
                <a href="" class="navigation-main__link">Projects</a>
                <a href="" class="navigation-main__link">About</a>
                <a href="" class="navigation-main__link">Contact</a>
                <a href=""><img class="navigation-main__icon" src="../../public/images/github.svg" alt=""></a>
                <a href=""><img class="navigation-main__icon" src="../../public/images/in.svg" alt=""></a>
            </div>
        </div>

        <div class="navigation">

            <div class="navigation-main__icon-box" :class="{'navbar--hidden': !showNavbar}">
                <img class="navigation-main__icon" src="../../public/images/interface.svg" alt="">
                <h3 class="navigation__text">
                    Tim Gow
                </h3>
            </div>

            <h1></h1>
            <input type="checkbox" class="navigation__checkbox" id=navi-toggle>

            <label for="navi-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
            </label>

            <div class="navigation__background">&nbsp;</div>

            <nav class="navigation__nav">
                <ul class="navigation__list">
                    <li class="navigation__item"><a href="#" class="navigation__link"><span>01</span>Projects</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link"><span>02</span>About</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link"><span>03</span>Contact</a></li>
                </ul>
            </nav>
        </div>


    </div>


        <div class="header__hello-box">
            

            <p class="header__text baffleText" > 
            <span class="header__letter">H</span>
            <span class="header__letter">E</span>
            <span class="header__letter">L</span>
            <span class="header__letter">L</span>
            <span class="header__letter">O</span>, my name is Tim. I am a Fullstack Developer</p>
            
        </div>
        <div class="header__btn">
            <a href="" class="header__link">View Portfolio
                <svg class="header__arrow">
                    <use xlink:href="../../public/images/sprite.svg#icon-arrow-long-right"></use>
                </svg>
            </a>
        </div>
    </div>
</template>


<script>
import baffle from 'baffle';
export default {
    name: 'Header',
    data() {
        return {
            Active: true,
            notActive: false,
            blinking: true,
            btnActive: true,
            HeadAnimation: false,
            isSmall: false,
            showNavbar: true,
            lastScrollPosition: 0
        }
    },
    mounted () {
        // on mounted property start obfuscating
        this.obscureText();
        window.addEventListener('scroll', this.onScroll)
    },

    beforeDestroy () {
        window.removeEventListener('scroll', this.onScroll)
    },

    methods: {

        onScroll() {
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScrollPosition < 0) {
                return;
            }
            if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
                return;
            }
            this.showNavbar = currentScrollPosition < this.lastScrollPosition;
            this.lastScrollPosition = currentScrollPosition;
        },

        randomGen(length) {
            let arr = new Uint16Array(length);
            window.crypto.getRandomValues(arr);
            let str = '';
            for (let i = 0; i < arr.length; i++) {
                str += String.fromCharCode(arr[i]);
            }
            return str;
        },

        obscureText() {
            let b = baffle('.baffleText', {
                characters: this.randomGen(15),
                speed: 50
                });
                b.reveal(1000);
            }
            
    },


}
</script>

<style lang="scss" scoped>

.header {
    background-color: #2d3436;
    background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);
    height: 100vh;
    color: #fff;
    font-size: 3rem;
    letter-spacing: .6rem;
    position: relative;
    transition: all .4s;

    &__hello-box {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-top: 46vh;
        padding-left: 6rem;
        padding-right: 6rem;
        color:#2196f3;

    }




    &__text {
        box-sizing: inherit;
        white-space: pre-wrap;
        padding: 0 .8rem;
        border-left: .4rem solid #fff;
        border-right: .4rem solid #fff;
    }

    &__btn {
        position: absolute;
        top: 70vh;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: .6rem 0;
        border: .4rem solid #fff;
        display: inline-block;
        transition: all 1.5s;
        &:hover .header__link .header__arrow {
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
            padding: 1.5rem 4rem;
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



.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -10rem, 0);
}






//Navigation Big

.navigation {
    display: none;
}

.navigation-main {
    display: flex;
    justify-content: space-between;
    padding-top: 4vh;
    font-size: 2rem;

    &__icon-box {
        display: flex;
        align-items: center;
    }


    &__icon {
        margin:0 4rem;
        width: 4rem;
        transition: all .6s;
    }
    
    &__link {
        &:link,
        &:visited {
            font-weight: 200;
            margin-right: 2rem;
            color: #fff;
            text-decoration: none;
            text-transform: uppercase;
            transition: all .9s;
            display: inline-block;
        }

        &::after {
            content: '';
            display: block;
            width: 0;
            height: .2rem;
            background: #2196f3;
            transition: width .3s;
        }

        &:hover::after {
            width: 100%;
            transition: width .3s;
        }
    }
}







//Navigation 

@media screen and (max-width: 760px) {
    .navigation-main {
        display: none;
    }



    .navigation {
        
        .navigation-main__icon-box {
            position: fixed;
            top: 6rem;
            left: 6rem;
        }

        display: block;
   &__checkbox {
    display: none;
   } 

   &__button {
    background-color: #fff;
    height: 7rem;
    width: 7rem;
    position: fixed;
    top: 6rem;
    right: 6rem;
    border-radius: 50%;
    z-index: 2000;
    box-shadow: 0 1rem 3rem rgba(#000, .1);
    text-align: center;
    cursor: pointer;

   }

   &__background {
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    position: fixed;
    top: 6.5rem;
    right: 6.5rem;
    background-image: radial-gradient(#2d3436, #2196f3 );
    z-index: 1000;
    transition: transform .8s cubic-bezier(.86, 0, .07, 1);
    

   }

   &__nav {
    height: 100vh;
    
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1500;

    opacity: 0;
    width: 0;
    transition: all .8s cubic-bezier(.68, -.55, .265, 1.55 );
   }

   &__list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
    width: 100%;
   }

   &__item {
    margin: 1rem;
   }

   &__link {
        &:link,
        &:visited {
            display: inline-block;
            font-size: 3.5rem;
            font-weight: 300;
            padding: 1rem 2rem;
            color: #fff;
            text-decoration: none;
            text-transform: uppercase;
            background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #2d3436 50%);
            background-size: 220%;
            transition: all .4s;

            span {
                margin-right: 1.5rem;
                display: inline-block;
            }
        }

        &:hover,
        &:active {
            background-position: 100%;
            color:#2196f3;
            transform: translateX(1rem);
        }

   }

   &__checkbox:checked ~ &__background {
       transform: scale(100);
   }

   &__checkbox:checked ~ &__nav {
    opacity: 1;
    width: 100%;
}

&__icon {
    position: relative;
    margin-top: 3.5rem;
    &,
    &::before,
    &::after {
        width: 3rem;
        height: 2px;
        background-color: #2196f3;
        display: inline-block;
    }

    &::before,
    &::after {
        content: "";
        position: absolute;
        left: 0;
        transition: all .4s;
    }

    &::before {
        top: -.8rem;
    }
    &::after {
        top: .8rem;
    }

}

&__button:hover &__icon::before {
    top: -1rem;
}

&__button:hover &__icon::after {
    top: 1rem;
}

&__checkbox:checked ~ &__button &__icon {
    background-color: transparent;
}

&__checkbox:checked ~ &__button &__icon::before {
    top: 0;
    transform: rotate(135deg);
}

&__checkbox:checked ~ &__button &__icon::after {
    top: 0;
    transform: rotate(-135deg);
}

}
}





</style>