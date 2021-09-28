import { Fragment, useEffect } from "react";
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
          title="Please click on the experiences that would best suit you during your stay "
          description="Choose up to three activities from the selection below"
        />
        <ExperiencesList />
      </div>
    </Fragment>
  );
};
export default Home;
