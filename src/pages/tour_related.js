import Header from "../sections/header";
import Skeleton from "../components/skeleton_tours_selected";
import ToursList from "../components/tours_list";
import { useTours } from "../hooks/index";
import "../scss/tours_list.scss";
import { getTexto } from "../libs/language";
import { useHistory } from "react-router-dom";

const TourList = () => {
  const tours = useTours();
  let history = useHistory();
  const goBack = (evt) => {
    evt.preventDefault();
    history.goBack();
  };
  return (
    <div className="tourlist">
      <Header
        title="Select the experience that would best suit you 
        during your stay"
      />
      {!tours ? (
        <div style={{}}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <div style={{}}>
          <ToursList
            title={"Catamaran"}
            icon={"/temporal/img/icon_yatch.png"}
            data={tours}
          />
          <ToursList
            title={"Catamaran"}
            icon={"/temporal/img/icon_yatch.png"}
            data={tours}
          />
          <ToursList
            title={"Catamaran"}
            icon={"/temporal/img/icon_yatch.png"}
            data={tours}
          />
        </div>
      )}
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
