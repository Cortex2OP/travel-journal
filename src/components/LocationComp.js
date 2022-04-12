import react from "react";

export default function LocationComp(props) {
  return (
    <div className="compDiv">
      <img src={props.item.img} className="img"></img>
      <div className="info">
        <div className="gpsAndCountry">
          <img
            src="https://icon-library.com/images/small-map-icon/small-map-icon-4.jpg"
            className="gpsIcon"
          ></img>
          <p className="info--lokacijaDrzava">{props.item.lokacijaDrzava}</p>
          <a href={props.item.gmLink} className="gmLink" target="_blank" >View on Google Maps</a>
        </div>
        <h1 className="info--lokacija">{props.item.lokacija}</h1>
        <p className="stayDate">{props.item.stayDate}</p>
        <p className="description">{props.item.description}</p>
      </div>
    </div>
  );
}

