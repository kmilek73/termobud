import React from "react";

function Arrow() {


    return (

        <section id="arrowL">

        <div className="content">
            <div className="form-img">
                <h2>Potrzebujesz wykonać przegląd swojego kotła gazowego?<br />

                    <br /> Zadzwoń i zapytaj o termin przeglądu.
                    <br /> <span className="red">793 505 500</span>
                    <p> lub wypełnij formularz. Oddzwonimy.</p>
                </h2>

            </div>

            <div className="form-content">
                <form className="needs-validation" noValidate>
                    <div>

                        <input type="text" className="form-control" id="validationCustom01" placeholder="Wpisz imię"
                            required>
                        </input><br />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div>

                        <input type="text" className="form-control" id="validationCustom02" placeholder="Podaj telefon"
                            required></input><br />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                    </div>
                    <div>
                        <label  className="form-label">Wybierz temat</label>
                        <select className="form-select" id="validationCustom04" required
                            placeholder="Czego ma dotyczyć kontakt:?">
                            <option value="co">Przegląd pieca co</option>
                            <option value="co">Ogrzewanie gazowe</option>
                            <option value="pompa">Pompy ciepła</option>
                            <option value="klimatyzacja">Klimatyzacja</option>
                            <option value="hydraulika">Usługi Hydrauliczne</option>
                            <option value="awarie">Awarie domowe</option>
                            <option value="inne">Inne</option>
                        </select>
                        <div className="invalid-feedback">
                            Ptosze wybrać temat.
                        </div>
                    </div>

                    <div>
                        <br />
                        <textarea name="message" className="form-control" id="message"
                            placeholder="Wpisz wiadomość"></textarea>
                        <br />
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
                                <label className="form-check-label" htmlFor="invalidCheck">
                                    Wyraż zgodę na przetważanie danych
                                </label>
                                <div className="invalid-feedback">
                                    You must agree before submitting.
                                </div>
                        </div>
                    </div>
                    <div> <br />
                        <input type="submit" className="btn btn-outline-secondary" value="WYŚLIJ"></input>
                    </div>
                </form>

            </div>


        </div>
        </section>
                          
    )

} export default Arrow;
