import React from 'react'

export default function Cv() {
    return (
        <div className="cv">
            <div className="cv-wrapper">
                <header>
                    <div className="row my-2 p-4">
                        <div className="col-md-5 col-12 me-info">
                            <h1>Michael Lacroix</h1>
                            <p><i>Développeur Front-End</i></p>
                        </div>
                        <div className="col-md-7 col-12 contact-info">
                            <ul>
                                <li><b>Adresse:</b> 35 avenues desrochers, Rouyn-Noranda, Abitibi-Témiscamingue</li>
                                <li><b>Email:</b> kennycoding111@gmail.com</li>
                                <li><b>Téléphone:</b> 819-880-0461</li>
                                <li><b>Site web:</b> <a href="http://mlweb.info" target="_blank">mlweb.info</a></li>
                                <li><b>Github:</b> <a href="https://github.com/mlcoding111"
                                    target="_blank">github.com/mlcoding111</a></li>
                                <li><b>LinkedIn:</b><a href="https://www.linkedin.com/in/michael-lacroix26" target="_blank">
                                    linkedin.com/in/michael-lacroix26</a></li>
                            </ul>
                        </div>
                    </div>
                </header>

                <section id="a-propos">
                    <h3>A propos de moi</h3>
                    <hr />
                    <p>Du moment que j'ai réalisé mon premier "Hello World" en <b>C++</b> a mes 14 ans, j'ai tout de suite
                accroché au monde de la programmation.
                Le monde de la programmation n'a jamais été "just un emploi", pour moi c'était une passion et un
                passetemps avec cette envie de toujours vouloir en savoir plus et les nombreux défis a surmonter. Ce
                qui a commencé avec un simple "Hello World" , est devenu une passion qui est devenue de plus en plus
                excitante d'année en année.</p>
                </section>

                <section id="objectif">
                    <h3>Objectif</h3>
                    <hr />
                    <p>Mon objectif est de mon trouver un endroit de stage ou un emploi. Ma force se situe avec le framework
                    ReactJS, donc je recherche un emploi qui va me permettre d'exploiter ma force et relever de nouveaux
                    défis ! Emploi/stage en télétravail préférablement .
            </p>
                </section>

                <section id="experience">
                    <h3 className="mb-3">Experience</h3>
                    <div className="row my-3">
                        <div className="col-md-6 col-12 mt-3">
                            <h6>Front-End</h6>
                            <hr />
                            <p>Je maitrise très bien le <b>HTML5</b> ainsi que <b>CSS/SASS</b>. Pour le <i>"layout"</i>,
                        j'utilise
                        principalement <b>bootstrap</b> et les <b>flexbox</b>. Le <b>Javascript/JQuery</b> est aussi ma
                        force, je dirais que
                        je suis plus fort pour la partie programmation que la partie style.
                    </p>
                            <h6>Back-End</h6>
                            <hr />
                            <p>Quand je dois faire moi même le back-end , je fais appel a <b>MongoDB</b> avec
                        <b>NodeJS/ExpressJS</b>. Je suis
                        encore un débutant , mais je me débrouille très bien.
                        Le <b>MERN</b> est le stack que j'utilise le plus.</p>
                        </div>
                        <div className="col-md-6 col-12 mt-3">
                            <h6>Framework</h6>
                            <hr />
                            <p>J'utilise <b>React</b> préférablement, sinon , je vois présentement <b>Angular</b> et <b>Vue</b>,
                        que j'aime bien. Mais pour
                        l'instant , React a une grande place dans mon coeur, comparer au autres framework disponible.
                    </p>
                            <h6>Design</h6>
                            <hr />
                            <p>Quand j'ai des des contrats de pigiste , j'utilise <b>Figma</b> et <b>Photoshop</b> pour le
                        design du site
                        web. Pour ce qui est de la gestion , j'aime bien travaillé avec <a href="https://www.trello.com"
                                    target="_blank"><b>Trello</b></a></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <h6>Portfolio App</h6>
                            <p>Dans cette application React, je démontre mes skills avec le framework React, principalement
                            comment bien intégrer des libraries,
                            comment utiliser des api et faire un crud fonctionnel !
                    </p>
                            <h6>Plan A</h6>
                            <p>Application crée avec le framework React, qui utilise le MERN stack. Mise à part ma formation
                            purement
                        Front-End, j'étudie le back-end donc NodeJs , ExpressJs, MongoDb </p>
                        </div>
                        <div className="col-md-6 col-12">
                            <h6>Site web dessin animer</h6>
                            <p>Site web fait en pure html/css qui présente un de ma série animer préfèrer. Examen fin de session
                        1 en intégration web </p>
                            <h6>Portfolio d'entrée dans mon AEC</h6>
                            <p>Le nombre de candidats dans mon AEC était très élevé , seuls les meilleurs étaient pris !
                            Ne connaissant rien dans la programmation web,
                            j'ai utilisé mon autonomie et j'ai appris le html/css/javascript en un temps éclaire pour
                            préparer ce petit portfolio ! Tout les apps
                            son en pur html/css/javascript.
                    </p>
                        </div>
                    </div>
                </section>

                <section id="education">
                    <h3>Education</h3>
                    <hr />
                    <div className="row my-2">
                        <div className="col-md-3 col-12">
                            <h6 className="font-weight-bold">Cégep de Trois-Rivière</h6>
                        </div>
                        <div className="col-md-6 col-12 ">
                            <p title="Date de fin"><b>AEC FRONT END ( 2021-05-25 )</b></p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3 col-12">
                            <h6 className="font-weight-bold">Commission scolaire de l'Or-et-des-Bois</h6>
                        </div>
                        <div className="col-md-6 col-12 ">
                            <p title="Date de fin"><b>EXTRACTION DE MINERAI ( 2017-12-17 )</b></p>
                        </div>
                    </div>

                </section>

                <section id="references">
                    <h3>Références professionnel</h3>
                    <hr />
                    <div className="ml-1 row mb-2">
                        <b>
                            <h6 className="mr-2">Shany Carle</h6>
                        </b>
                        <p>Professeur de programmation session 1 et 2 </p><br />
                    </div>
                    <div className="ml-1 row">
                        <h6 className="mr-2">Laurent Drolet</h6>
                        <p> Professeur d'integration web session 1 et 2 </p><br />
                    </div>
                </section>


            </div>
        </div>
    )
}
