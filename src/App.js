import React from "react";
import "./App.css";
import { Component } from "react";
import Button from "./share-button";
import ReactTooltip from "react-tooltip";
// Min protein percentage 22.5-18.0
//Min fat percentage 8.5-5.5
// try to include web share api and a fallback for unsupported browsers
// link to web share : https://github.com/marcolanaro/react-web-share-api
class MobileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeOption: "fresh",
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }
  handleOptionChange(option) {
    this.setState({
      activeOption: option,
    });
  }
  render() {
    const activeOption = this.state.activeOption;
    const note ="Just remember that this calorie counter is not meant to take the place of your veterinarian's recommendations. It should give you a general idea of what your adult dog should be eating. Every breed is different, every dog is different, and the same dog will need more or less as they age. Your vet knows your dog and they will also know exactly how much your dog needs to eat."
    return (
      <div className="wrapper">
        <ReactTooltip />
        <div className="mobile-view">
          <div className="profile-header"></div>
          <div className="profile-details">
            <div className="profile-picture">
              <div className="image-profile">
                <img
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/smartest-dog-breeds-lead-1587757081.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*"
                  alt="Dog fetching ball"
                  width="120px"
                  style={{ borderRadius: "50%", marginTop: "-60px" }}
                />
              </div>
              <div className="dog-name">Tommy</div>
              <div className="dog-breed">German Shepherd</div>
              <div>Moderately active, 20 kg, Neutered female</div>
            </div>
          </div>
          <div className="meal-results">
            <div className="meal-calories-heading">200-250</div>
            <div>
            <div data-tip={note}>
              Calories per/day{" "}
              <img
                src="https://img.icons8.com/android/24/000000/info.png"
                width="12px"
                height="12px"
              />
              </div>
            </div>
            
            <div className="meal-box">
              <div className="box-items left-item">
                <div className="box-item-heading">24 %</div>
                <div style={{ paddingBottom: "3px", color: "#777171" }}>
                  Protein (min)
                </div>
              </div>
              <div className="box-items right-item">
                <div className="box-item-heading"> 8 %</div>
                <div style={{ paddingBottom: "3px", color: "#777171" }}>
                  Fat (min)
                </div>
              </div>
            </div>
          </div>
          <div style={{ margin: "10px" }}>
            <div className="ingredients__selector">
              <div className="pill-selector">
                <button
                  className={
                    activeOption === "dry"
                      ? "pill-selector__button pill-selector__button_active"
                      : "pill-selector__button"
                  }
                  onClick={() => this.handleOptionChange("dry")}
                >
                  Dry
                </button>
                <button
                  className={
                    activeOption === "fresh"
                      ? "pill-selector__button pill-selector__button_active"
                      : "pill-selector__button"
                  }
                  onClick={() => this.handleOptionChange("fresh")}
                >
                  Fresh Food
                </button>
                <button
                  className={
                    activeOption === "raw"
                      ? "pill-selector__button pill-selector__button_active"
                      : "pill-selector__button"
                  }
                  onClick={() => this.handleOptionChange("raw")}
                >
                  Raw Food
                </button>
              </div>
            </div>
          </div>
          <div className="ingredients_details">
            <div style={{ display: "flex" }}>
              <div className="meals-quantity left-item">
                <img src="https://img.icons8.com/material-sharp/24/000000/measuring-cup.png" />
                <div className="box-item-heading"> 5 Cups</div>
              </div>
              <div className="meals-quantity right-item">
                <img src="https://img.icons8.com/material/24/000000/kitchen-scales.png" />
                <div className="box-item-heading"> 200 Grams</div>
              </div>
            </div>
            <div className="meal-notes">✌🏿 times a day.</div>
          </div>
          <div className="footer">
            <a
              style={{ textDecoration: "none", color: "rgb(119, 113, 113)" }}
              href="https://poonch.in"
            >
              Powered by poonch.in
            </a>
          </div>
        </div>
      </div>
    );
  }
}
class finalPage extends Component {
  render() {
    return <MobileView />;
  }
}
export default finalPage;
