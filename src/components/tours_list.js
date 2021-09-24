import TourOnList from "./tour_on_list";

const ToursList = ({ data, title, icon }) => {
  const renderTours = data.map((tour) => {
    return <TourOnList key={tour.ConverterID} data={tour} />;
  });

  return (
    <div className="toursResult">
      <div className="title">
        <img width="30" src={icon} alt="icon" />
        <span>{title}</span>
      </div>
      <div className="list_tours">{renderTours}</div>
    </div>
  );
};
export default ToursList;
