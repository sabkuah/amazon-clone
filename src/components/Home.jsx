import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="hero"
        />

        <div className="home__row">
          <Product
            id="1"
            title="The Lean Startup: How constant innovation creates radically successful
          businesses."
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="Bose SoundLink Revolve+ Portable and Long-Lasting Bluetooth 360 Speaker - Triple Black"
            price={299.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81To0nRciPL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Eddie Bauer 216689 Cabin Plaid Flannel Sherpa Throw, Red"
            price={36.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81qj0YxbnXL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="4"
            title="Spikeball Game Set (3 Ball Kit) - Outdoor Indoor Gift for Teens, Family - Yard, Lawn, Beach, Tailgate - Includes Playing Net, 3 Balls, Drawstring Bag, Rule Book- As Seen on Shark Tank"
            price={79.99}
            image="https://images-na.ssl-images-amazon.com/images/I/613F9k5QUbL._AC_SL1194_.jpg"
            rating={4}
          />
          <Product
            id="5"
            title="Hydro Flask Water Bottle - Standard Mouth Flex Lid - 18 oz, Hibiscus"
            price={46.79}
            image="https://images-na.ssl-images-amazon.com/images/I/51ZxZTleAmL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="100 Animals: An Adult Coloring Book with Lions, Elephants, Owls, Horses, Dogs, Cats, and Many More! Paperback – Large Print"
            price={11.47}
            image="https://images-na.ssl-images-amazon.com/images/I/81DarbmirxL.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
