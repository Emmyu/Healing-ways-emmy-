import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Termsofusepage = React.lazy(() => import("pages/Termsofusepage"));
const Privacypolicypage = React.lazy(() => import("pages/Privacypolicypage"));
const SerivicespageMedicalAccommodationLogistics = React.lazy(
  () => import("pages/SerivicespageMedicalAccommodationLogistics"),
);
const SerivicespageConsultancy = React.lazy(
  () => import("pages/SerivicespageConsultancy"),
);
const SerivicespageTourism = React.lazy(
  () => import("pages/SerivicespageTourism"),
);
const SerivicespageReportTranslation = React.lazy(
  () => import("pages/SerivicespageReportTranslation"),
);
const Contactuspage = React.lazy(() => import("pages/Contactuspage"));
const Aboutuspage = React.lazy(() => import("pages/Aboutuspage"));
const ConsultationOne = React.lazy(() => import("pages/ConsultationOne"));
const Consultation = React.lazy(() => import("pages/Consultation"));
const Landingpage = React.lazy(() => import("pages/Landingpage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/landingpage" element={<Landingpage />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/consultationone" element={<ConsultationOne />} />
          <Route path="/aboutuspage" element={<Aboutuspage />} />
          <Route path="/contactuspage" element={<Contactuspage />} />
          <Route
            path="/serivicespagereporttranslation"
            element={<SerivicespageReportTranslation />}
          />
          <Route
            path="/serivicespagetourism"
            element={<SerivicespageTourism />}
          />
          <Route
            path="/serivicespageconsultancy"
            element={<SerivicespageConsultancy />}
          />
          <Route
            path="/serivicespagemedicalaccommodationlogistics"
            element={<SerivicespageMedicalAccommodationLogistics />}
          />
          <Route path="/privacypolicypage" element={<Privacypolicypage />} />
          <Route path="/termsofusepage" element={<Termsofusepage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
