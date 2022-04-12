import LocationComp from "./LocationComp";
import data from "./data";

const cards = data.map((item) => {
  return <LocationComp key={item.id} item={item} />;
});

export default function MainContent() {
  return <div>{cards}</div>;
}
