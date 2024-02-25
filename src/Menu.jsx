import React from 'react'
import item_8 from './assets/images/professionel.png';
import item_2 from './assets/images/animateur.webp';
import item_1 from './assets/images/parent.jpg';
function Menu() {
  return (
    <section id="menu" class="bg-light">
    <div class="container">
        <div class="row">
            <div class="col-12 intro-text">
                <h1>INTÉRESSÉ PAR L’ÉDUCATION POSITIVE ? </h1>
                <p><b>Nos services </b></p>
            </div>
        </div>
    </div>

    <div class="container">
        <ul class="nav nav-pills mb-4 justify-content-center" id="pills-tab" role="tablist">

            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all"
                    type="button" role="tab" aria-controls="pills-all" aria-selected="true">NeuroNutrition</button>
            </li>

            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-dinner-tab" data-bs-toggle="pill" data-bs-target="#pills-dinner"
                    type="button" role="tab" aria-controls="pills-dinner" aria-selected="true">PsychoNutrition</button>
            </li>

            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-lunch-tab" data-bs-toggle="pill" data-bs-target="#pills-lunch"
                    type="button" role="tab" aria-controls="pills-lunch" aria-selected="true">NeuroEducation</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-lunch-tab" data-bs-toggle="pill" data-bs-target="#pills-lunch"
                    type="button" role="tab" aria-controls="pills-lunch" aria-selected="true">Psychologie Moderne</button>
            </li>
        </ul>

        <div class="tab-content" id="pills-tabContent">

            <div class="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab"
                tabindex="0">

                <div class="row gy-4">
                <div class="col-lg-3 col-sm-6 mx-auto">
                        <div class="menu-item bg-white shadow-on-hover">
                            <img src={item_8} alt="" style={{height:'205px'}}/>
                            <div class="menu-item-content p-4">
                           
                                <h5 class="mt-1 mb-2">Accompagnement et Coaching</h5>
                                <p class="small">Nous sommes déterminés à vous aider à atteindre vos objectifs personnelle et familiale, en vous fournissant le soutien nécessaire pour exceller.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 mx-auto">
                        <div class="menu-item bg-white shadow-on-hover">
                            <img src={item_1} alt="" style={{height:'205px'}}/>
                            <div class="menu-item-content p-4">
                                <h5 class="mt-1 mb-2">Atelier Technique Éducatif</h5>
                                <p class="small">Des ateliers techniques diversifiés, où l'apprentissage devient une expérience immersive. Des pratiques qui vous démarqueront dans votre domaine.</p>                  
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 mx-auto">
                        <div class="menu-item bg-white shadow-on-hover">
                            <img src={item_2}alt="" style={{height:'205px'}}/>
                            <div class="menu-item-content p-4">
                                <h5 class="mt-1 mb-2">Formation professionnelle Certifiée</h5>
                                <p class="small">Expertise reconnue avec nos formations certifiées. Des cours et techniques soigneusement élaborés pour vous offrir un avantage professionnelle compétitif sur le marché du coaching.</p>
                            </div>
                        </div>
                    </div>
              
                 
                    </div>

            </div>
       
         

        </div>

    </div>


</section>
  )
}

export default Menu