import { getTexto } from "../libs/language";

const SkeletonTours = () => {
  return (
    <div className="toursRersult skeleton">
      <div className="title">
        <span></span>
      </div>
      <div className="list_tours">
        <div className="tour">
          <div className="info"></div>
          <a href="/" className="select">
            &#160;
          </a>
        </div>
        <div className="tour">
          <div className="info"></div>
          <a href="/" className="select">
            &#160;
          </a>
        </div>
        <div className="tour">
          <div className="info"></div>
          <a href="/" className="select">
            &#160;
          </a>
        </div>
      </div>
    </div>
  );
};
export default SkeletonTours;
