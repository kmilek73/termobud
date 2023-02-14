import React from 'react';
import piec from '../img/piec.jpg';
import { Fade } from "react-awesome-reveal";


function Cards() {
    return (





        <section id="gas-boiler">


            <div className="container">


                <div className="row">


                    <div className="col-12 col-lg-6 col-sm-6 col-xl-3 pb-3 ">
                    <Fade direction='left'>
                            <div className="card">

                                <img src={piec} className="card-img-top mg-fluid" alt="..." />

                                <div className="card-body">
                                    <h5>Usługi</h5>
                                    <i className="fa-solid fa-check"></i>
                                    <h6>Usługi hydrograficzne</h6>
                                    <p className="ms-3" >Konserwacja, czyszczenie, naprawa.</p>
                                    <i className="fa-solid fa-check"></i>
                                    <h6>Awarie</h6>
                                    <p className="ms-3">Pierwsze uruchomienia autoryzacyjne</p>
                                    <i className="fa-solid fa-check"></i>
                                    <h6>Montaż kuchenek gazowych</h6>
                                    <p className="ms-3">Montaż piecy/kotłów, podłączanie do instalacji, modyfikace
                                        instalacji
                                    </p>

                                </div>
                            </div>
                            </Fade>
                    </div>



                    <div className="col-12 col-lg-6 col-sm-6 col-xl-3 pb-3 mx-auto" >
                    <Fade bottom>
                            <div className="card">
                                <img src={piec} className="card-img-top mg-fluid" alt="..." ></img>

                                <div className="card-body"  >
                                    <h5>Piece CO</h5>
                                    <i className="fa-solid fa-check"></i>
                                    <h6>Przeglądy, Naprawa</h6>
                                    <p className="ms-3">Przeglądy, konserwacja, naprawa.</p>
                                    <i className="fa-solid fa-check"></i>
                                    <h6>Montaż</h6>
                                    <p className="ms-3">Montaż pieców/kotłów, podłączanie do instalacji, modyfikace
                                        instalacji
                                    </p>
                                    <i className="fa-solid fa-check"></i>
                                    <h6>Uruchomienia</h6>
                                    <p className="ms-3">Pierwsze uruchomienia autoryzacyjne</p>

                                </div>
                            </div>
                            </Fade>

                    </div>



                    <div className="col-12 col-lg-6 col-sm-6 col-xl-3 pb-3 mx-auto">
                    <Fade direction='bottom' >
                            <div className="card">
                                <img src={piec} className="card-img-top mg-fluid" alt="..." />

                                <div className="card-body">
                                    <h5>Klimatyzacje</h5>
                                    <i className="fa-solid fa-check"></i>
                                    <h6>Usługi hydrograficzne</h6>
                                    <p className="ms-3">Konserwacja, czyszczenie, naprawa.</p>
                                    <i className="fa-solid fa-check"></i>
                                    <h6>Awarie</h6>
                                    <p className="ms-3">Pierwsze uruchomienia autoryzacyjne</p>
                                    <i className="fa-solid fa-check"></i>
                                    <h6>Montaż kuchenek gazowych</h6>
                                    <p className="ms-3">Montaż piecy/kotłów, podłączanie do instalacji, modyfikace
                                        instalacji
                                    </p>
                                </div>
                            </div>
                            </Fade>
                    </div>


                    <div className="col-12 col-lg-6 col-sm-6 col-xl-3 pb-3 mx-auto ">
                    <Fade direction='right' >
                            <div className="card" >
                                <img src={piec} className="card-img-top mg-fluid" alt="..." />

                                <div className="card-body">
                                    <h5>Usługi</h5>
                                    <i className="fa-solid fa-check"></i>
                                    <h6>Pompy ciepła</h6>
                                    <p className="ms-3">Konserwacja, czyszczenie, naprawa.</p>
                                    <i className="fa-solid fa-check"></i>
                                    <h6>Awarie</h6>
                                    <p className="ms-3">Pierwsze uruchomienia autoryzacyjne</p>
                                    <i className="fa-solid fa-check"></i>
                                    <h6>Montaż kuchenek gazowych</h6>
                                    <p className="ms-3" >Montaż piecy/kotłów, podłączanie do instalacji, modyfikace
                                        instalacji
                                    </p>
                                </div>
                            </div>

                            </Fade>
                    </div>


                </div>

            </div>


        </section >



    )
}

export default Cards;