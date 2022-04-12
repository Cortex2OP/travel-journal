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
          <a href={props.item.gmLink} className="gmLink">View on Google Maps</a>
        </div>
        <h1 className="info--lokacija">{props.item.lokacija}</h1>
        <p className="stayDate">{props.item.stayDate}</p>
        <p className="description">{props.item.description}</p>
      </div>
    </div>
  );
}

/*
export default function LocationComp() {
  return (
    <div className="compDiv">
      <img
        src="https://c4.wallpaperflare.com/wallpaper/95/433/285/serbia-serbia-belgrad-belgrade-belgrade-fortress-hd-wallpaper-preview.jpg"
        className="img"
      ></img>
      <div className="info">
        <div className="gpsAndCountry">
          <img
            src="https://icon-library.com/images/small-map-icon/small-map-icon-4.jpg"
            className="gpsIcon"
          ></img>
          <p className="info--lokacijaDrzava">SERBIA</p>
          <p className="gmLink">View on Google Maps</p>
        </div>
        <h1 className="info--lokacija">Kalemegdan</h1>
        <p className="stayDate">27 May, 2021 - 8 Jun 2021</p>
        <p className="description">
          The Kalemegdan Park is the largest park and the most important
          historical monument in Belgrade. It is located on a 125-metre-high
          cliff, at the junction of the River Sava and the Danube. Kalemegdan
          Park, split in two as the Great and Little Parks, was developed in the
          area that once was the town field within the Belgrade Fortress. Today
          residents often erroneously refer to the entire fortress as the
          Kalemegdan Fortress or just Kalemegdan, even though the park occupies
          the smaller part, especially of the historical fortress, and it is
          some two millennia younger.
        </p>
      </div>
    </div>
  );
}
*/
