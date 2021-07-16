import Lottie from "react-lottie";

const LottieAnim = ({ height = 80, width = 80, anim }) => {
  console.log(anim);
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: anim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Lottie
      options={defaultOptions}
      height={80}
      width={80}
      style={{ zIndex: "3", position: "absolute" }}
      isStopped={false}
    />
  );
};
export default LottieAnim;
