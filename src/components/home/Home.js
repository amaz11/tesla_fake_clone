import React from "react";
import "./home.css";
import Section from "./Section";
import modelS from "../../asstest/images/model-s.jpg";
import modelY from "../../asstest/images/model-y.jpg";
import model3 from "../../asstest/images/model-3.jpg";
import modelX from "../../asstest/images/model-s.jpg";
import SolarPanels from "../../asstest/images/solar-panel.jpg";
import SolarRoof from "../../asstest/images/solar-roof.jpg";
import Accessories from "../../asstest/images/accessories.jpg";

const Home = () => {
  return (
    <div>
      <Section
        id="modelS"
        title="Model S"
        dis="Order Online for Touchless Delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        bgimg={modelS}
      />
      <Section
        id="modelY"
        title="Model Y"
        dis="Order Online for Touchless Delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        bgimg={modelY}
      />
      <Section
        id="model3"
        title="Model 3"
        dis="Order Online for Touchless Delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        bgimg={model3}
      />
      <Section
        id="modelX"
        title="Model X"
        dis="Order Online for Touchless Delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        bgimg={modelX}
      />
      <Section
        id="solarPanels"
        title="Solar Panels"
        dis="Lowest Cost Solar Panels in America"
        leftBtn="ORDER NOW"
        rightBtn="LEARN MORE"
        bgimg={SolarPanels}
      />
      <Section
        id="solarRoof"
        title="Solar Roof"
        dis="Produce Clean Energy From Your Roof"
        leftBtn="ORDER NOW"
        rightBtn="LEARN MORE"
        bgimg={SolarRoof}
      />
      <Section
        title="Accessories"
        // dis="Produce Clean Energy From Your Roof"
        leftBtn="ORDER NOW"
        // rightBtn='LEARN MORE'
        bgimg={Accessories}
      />
    </div>
  );
};

export default Home;
