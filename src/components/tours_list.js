import TourOnList from "./tour_on_list";

const ToursList = ({ data, title, icon }) => {
  const renderTours = data.map((tour) => {
    console.log(tour);
    // return "";
    return <TourOnList key={tour.ConverterClassID} data={tour} />;
  });

  return (
    <div className="toursResult">
      <div className="title">
        <img width="30" height="28" src={icon} alt="icon" />
        <span>{title}</span>
      </div>
      <div className="list_tours">{renderTours}</div>
    </div>
  );
};
export default ToursList;
