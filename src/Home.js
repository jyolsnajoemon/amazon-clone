import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product 
          title="The lean startup: How Constant Innovation Creates Radically Successful Buisness Paperback"
          price={11.96}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating={5}
          />
          <Product 
          id="49893739"
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-Baker, Dough Hook and Whisk, 5 lutre Glass Bowl"
          price={239}
          rating={4}
          image="https://m.media-amazon.com/images/I/419Lt9UNP2L._SX300_SY300_QL70_FMwebp_.jpg"
          /> 
        </div>

        <div className="home__row">
          <Product 
          id="82874883"
          title="Samsung LC933739 49' Curved LED Gaming Monitor"
          price={199.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/81l8a7Ohl4L._SX425_.jpg"
          />
          <Product 
          id="83838229"
          title="Amazon Echo (3rd gen) | Smart speaker with Alex, Charcol Fabric"
          price={98.99}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product 
          id="38378822"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver(4th gen)"
          price={598.98}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product 
          id="97828733"
          title="Samsung LC933739 49' Curved LED Gaming Monitor"
          price={1094.98}
          rating={3}
          image="https://m.media-amazon.com/images/I/511uzbAnMOL._SY300_SX300_QL70_FMwebp_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
