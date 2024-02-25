import React from 'react'

function Features() {
  return (
    <section id="features" class="bg-cover">
    <div class="container">
        <div class="row">
            <div class="col-12 intro-text">
                <h1 class="text-white">Pourquoi nous choisir?</h1>
                <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sint
                    temporibus natus optio
                    eveniet nobis accusantium?</p>
            </div>
        </div>
        <div class="row gy-4">
            <div class="col-lg-3 col-sm-6">
                <div class="feature p-4 text-center">
                    <div class="feature-icon">
                    < i class="ri-team-fill"></i>
                    </div>
                    <h4 class="text-white mt-4 mb-2">Innovation pédagogique</h4>
                    <p class="text-white">Nous embrassons constamment l'innovation pour façonner des approches éducatives avant-gardistes, adaptées aux
besoins changeants de l'apprenant moderne.
                    </p>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="feature p-4 text-center">
                    <div class="feature-icon">
                        <i class="ri-timer-2-fill"></i>
                    </div>
                    <h4 class="text-white mt-4 mb-2">Excellence académique</h4>
                    <p class="text-white">Nous nous engageons fermement envers l'excellence académique, 
                    offrant des programmes rigoureux et des services de haute qualité pour
garantir le succès éducatif de chaque apprenant.
                    </p>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="feature p-4 text-center">
                    <div class="feature-icon">
                    < i class="ri-mental-health-line"></i>
                    </div>
                    <h4 class="text-white mt-4 mb-2">Collaboration</h4>
                    <p class="text-white">La collaboration entre apprenants, éducateurs et parents est essentielle. Nous croyons en une approche collective pour créer un
environnement propice à la réussite éducative.
                    </p>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="feature p-4 text-center">
                    <div class="feature-icon">
                        <i class="ri-global-fill"></i>
                    </div>
                    <h4 class="text-white mt-4 mb-2">L'intégrité</h4>
                    <p class="text-white">L'intégrité guide nos actions. <br></br>
                    Nous sommes déterminés à maintenir des normes éthiques élevées, favorisant la transparence,
la confiance et le respect mutuel.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>  )
}

export default Features