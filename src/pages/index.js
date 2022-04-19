import { Fragment, useEffect } from "react";
import { getTexto } from "../libs/language";
import ExperiencesList from "../components/experiences_list";
import Header from "../sections/header";
import { saveParams } from "../libs/cookieManager";

const Home = ({ params }) => {
  useEffect(() => {
    saveParams(params);
  }, [params]);
  return (
    <Fragment>
      <div className="home">
        <Header
          templateP={params.template}
          title={getTexto(
            "Please click on the experiences that would best suit you during your stay"
          )}
          description={getTexto(
            "Choose up to three activities from the selection below"
          )}
        />
        <ExperiencesList templateP={params.template} />
      </div>
    </Fragment>
  );
};
export default Home;
