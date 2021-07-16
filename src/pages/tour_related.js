import Header from "../sections/header";
import Skeleton from "../components/skeleton_tours_selected";
const TourList = () => {
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
    </div>
  );
};
export default TourList;
