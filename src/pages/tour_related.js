import Header from "../sections/header";
import Skeleton from "../components/skeleton_tours_selected";
import ToursList from "../components/tours_list";
import { useTours } from "../hooks/index";
import "../scss/tours_list.scss";
import { getTexto, getLanguage } from "../libs/language";
import { useHistory } from "react-router-dom";
import {
  getCookieForm,
  checkForCookies,
  getExperiencesSelected,
} from "../libs/cookieManager";

const TourList = () => {
  const tours = useTours();
  let history = useHistory();

  if (!checkForCookies()) {
    //checamos que existan las cookies de info
    history.push("/error_page/?error=missing params");
  }
  const goBack = (evt) => {
    evt.preventDefault();
    history.goBack();
  };
  const experiencesSelected = getExperiencesSelected();
  if (experiencesSelected.length >= 1 && tours) {
    let resortSelected = getCookieForm("resort", getLanguage());
    //tour filtred before adding to tourlist Item
    const renderExp = experiencesSelected.map((experience) => {
      let toursByExperience = [];
      let title = "ss";
      let icon = "/temporal/img/icon_yatch.png";
      tours.map((tour) => {
        //validamos que el tour sea uno de los correspondientes al converterClass y al asignados al resort
        if (
          parseInt(tour.ConverterClassID) === parseInt(experience) &&
          tour.ConverterProperty === resortSelected
        ) {
          //agregamos el tour listo para anexar a la lista
          toursByExperience.push(tour);
        }
        return true;
      });
      if (toursByExperience.length > 0) {
        return (
          <ToursList
            key={experience}
            title={title}
            icon={icon}
            data={toursByExperience}
          />
        );
      }
    });
    return (
      <div className="tourlist">
        <Header
          title="Select the experience that would best suit you 
          during your stay"
        />
        {renderExp}
        <div className="actions">
          {history.length > 2 ? (
            <a href="/" onClick={goBack}>
              {getTexto("<< Back")}
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="tourlist">
      <Header
        title="Select the experience that would best suit you 
        during your stay"
      />
      <div style={{}}>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
      <div className="actions">
        {history.length > 2 ? (
          <a href="/" onClick={goBack}>
            {getTexto("<< Back")}
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default TourList;
