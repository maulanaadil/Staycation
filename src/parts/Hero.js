import React from "react";

import ImageHero from "assets/images/img-hero.jpg";
import ImageHeroFrame from "assets/images/img-hero-frame.jpg";
import IconCities from "assets/icons/icons-cities.svg";
import IconTraveler from "assets/icons/icons-traveler.svg";
import IconTreasure from "assets/icons/icons-treasure.svg";

import Button from "elements/Button";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 530 }}>
          <h1 className="h2 font-weight-bold line-height-1 mb-3">
            Forget Busy Work,
            <br />
            Start Next Vacation
          </h1>
          <p className="mb-5 font-weight-light text-gray-500 w-75">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="btn px-5"
            isPrimary
            hasShadow
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>
          <div className="row mt-5">
            <div className="col-auto text-center" style={{ marginRight: 30 }}>
              <img
                width="36"
                height="36"
                src={IconTraveler}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-3">
                {props.data.travelers}{" "}
                <span className="text-gray-500 font-weight-light">
                  Travelers
                </span>
              </h6>
            </div>
            <div className="col-auto text-center" style={{ marginRight: 30 }}>
              <img
                width="36"
                height="36"
                src={IconTreasure}
                alt={`${props.data.treasures} Treasure`}
              />
              <h6 className="mt-3">
                {props.data.treasures}{" "}
                <span className="text-gray-500 font-weight-light">
                  Treasure
                </span>
              </h6>
            </div>
            <div className="col-auto text-center" style={{ marginRight: 30 }}>
              <img
                width="36"
                height="36"
                src={IconCities}
                alt={`${props.data.cities} Cities`}
              />
              <h6 className="mt-3">
                {props.data.cities}{" "}
                <span className="text-gray-500 font-weight-light">Cities</span>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-6 pl-5">
          <div className="image-hero">
            <img
              src={ImageHero}
              alt="Image hero"
              className="img-fluid position-absolute"
              style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
            />
            <img
              src={ImageHeroFrame}
              alt="Image hero frame"
              className="img-fluid position-absolute"
              style={{ margin: "0 15px -15px 0" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}