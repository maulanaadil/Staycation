import React from "react";
import Fade from "react-reveal/Fade";
import successIlustration from "assets/images/success.jpg";

export default function Completed() {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center text-center">
          <div className="col-4">
            <Fade bottom delay={100}>
              <img
                src={successIlustration}
                alt="Success Checkout"
                className="img-fluid"
              />
              <p className="text-gray-500">
                We will inform you via email later once the transaction has been
                accepted
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
