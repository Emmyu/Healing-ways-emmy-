import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was Built By{" "}
        <a href="">Just Emmy</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/landingpage">Landingpage</Link>
        </li>
        <li>
          <Link to="/consultation">Consultation</Link>
        </li>
        <li>
          <Link to="/consultationone">ConsultationOne</Link>
        </li>
        <li>
          <Link to="/aboutuspage">Aboutuspage</Link>
        </li>
        <li>
          <Link to="/contactuspage">Contactuspage</Link>
        </li>
        <li>
          <Link to="/serivicespagereporttranslation">
            SerivicespageReportTranslation
          </Link>
        </li>
        <li>
          <Link to="/serivicespagetourism">SerivicespageTourism</Link>
        </li>
        <li>
          <Link to="/serivicespageconsultancy">SerivicespageConsultancy</Link>
        </li>
        <li>
          <Link to="/serivicespagemedicalaccommodationlogistics">
            SerivicespageMedicalAccommodationLogistics
          </Link>
        </li>
        <li>
          <Link to="/privacypolicypage">Privacypolicypage</Link>
        </li>
        <li>
          <Link to="/termsofusepage">Termsofusepage</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
