import React from 'react'
import backgroundImage from './assets/images/background.webp'
function Footer() {
  return (
    <footer class="bg-cover">
        <div class="footer-top">
            <div class="container">
                <div class="row gy-5">
                    <div class="col-lg-4">
                        <img src="./assets/images/Qrispy_white.svg" class="mb-4" alt=""/>
                        <p><b>Aroua Chermiti </b>
                        <br></br>
                        Ceo et formatrice de INspiring NOVAtive Center</p>
                        <div class="social-links">
                            <a href="#"><i class="ri-facebook-circle-fill"></i></a>
                            <a href="#"><i class="ri-instagram-fill"></i></a>
                            <a href="#"><i class="ri-youtube-fill"></i></a>
                            <a href="#"><i class="ri-google-play-fill"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 ms-auto">
                        <h6 class="text mb-4">CONTACT</h6>
                        <p class="mb-1">P:(+216)21 053 660</p>
                        <p class="mb-1">E:chermiti.aroua@gmail.com</p>
                        <p class="mb-0">A: Mustpha Hjeïj , Ariana Médina, Tunisia</p>
                    </div>
                    <div class="col-lg-3">
                        <h6 class="text mb-4">Heure de travail</h6>
                        <p class="mb-1">Lundi-Vendredi : 08:00 - 00:00</p>
                        <p>Samedi-Dimanche : 08:00 - 00:00</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row gy-3 justify-content-between">
                    <div class="col-auto">
                        <p class="mb-0">Copyrights all rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer