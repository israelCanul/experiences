import style from "../scss/Experiences.module.scss";
import Imagen from "../components/image";
import * as animationData from "../animations/lottie-success.json";
import LottieAnim from "./lottie_animation";

const Experience = ({ data, selected = false, selectFunction = (d) => {} }) => {
  return (
    <div
      className={style.experience}
      style={{ backgroundImage: `url("/img/steps/${data.image}.jpg")` }}
      onClick={() => {
        selectFunction(data);
      }}
    >
      {selected ? (
        <LottieAnim anim={animationData.default} height={80} width={80} />
      ) : (
        ""
      )}
      <Imagen
        width={"40px"}
        height="40px"
        className={
          style.icon +
          " " +
          (data.icon === "step1-fish-icon" || data.icon === "step1-food-icon"
            ? style.small
            : "")
        }
        src={"/img/steps/" + data.icon + ".png"}
      />
      <p>{data.name}</p>
    </div>
  );
};
export default Experience;
