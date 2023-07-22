import React, { useState, useEffect, Fragment } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import House from "../asset/images/house.jpg";

const About = () => {
  const [topSeller, setTopseller] = useState([]);
  const [realtors, setRealtors] = useState([]);

  useEffect(() => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
    };

    const getTopSeller = async () => {
      try {
        const res = await axios.get(
          'http://localhost:8000/api/realtors/topseller'
        );
        setTopseller(res.data);
      } catch (err) {}
    };

    getTopSeller();
  }, []);

  useEffect(() => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
    };

    const getRealtors = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/realtors/");
        setRealtors(res.data);
      } catch (err) {}
    };
    getRealtors();
  }, []);
  console.log(realtors.results);

  const getAllRealtors = () => {
    let allRealtors = [];
    let ans = [];
    const itit = realtors.results;
    console.log(itit);
    itit.map((realtor) => {
      return allRealtors.push(
        <Fragment key={realtor.id}>
          <div className="about_display">
            <img className="about_display_image" src={realtor.photos} alt="" />
          </div>
          <h3 className="about_realtor">{realtor.name}</h3>
          <p className="about_contact">{realtor.phone}</p>
          <p className="about_contact">{realtor.email}</p>
          <p className="about_about">{realtor.description}</p>
        </Fragment>
      );
    });

    for (let i = 0; i < realtors.length; i += 3) {
      ans.push(
        <div key={i} className="row">
          <div className="col-1-of-3">{allRealtors[i]}</div>

          <div className="col-1-of-3">
            {allRealtors[i + 1] ? allRealtors[i + 1] : null}
          </div>

          <div className="col-1-of-3">
            {allRealtors[i + 2] ? allRealtors[i + 2] : null}
          </div>
        </div>
      );
    }

    return ans;
  };

  const getTopSeller = () => {
    let result = [];

    topSeller.map((seller) => {
      return result.push(
        <Fragment key={seller.id}>
          <div className="about_display">
            <img className="about_display_image" src={seller.photo} alt="" />
          </div>
          <h3 className="about_topseller">Top seller: </h3>
          <p className="about_realtort">{seller.name}</p>
          <p className="about_contact">{seller.phone}</p>
          <p className="about_contact">{seller.email}</p>
          <p className="about_about">{seller.description}</p>
        </Fragment>
      );
    });

    return result;
  };

  return (
    <main className="about">
      <Helmet>
        <title>Realest Estate -About</title>
        <meta name="description" content="About us" />
      </Helmet>

      <header className="about_header">
        <h1 className="about_heading">About Realest Estate</h1>
      </header>

      <section className="about_info">
        <div className="row">
          <div className="col-3-of-4">
            <h2 className="about_subheading">
              We define the perfect home for you
            </h2>
            <p className="about_paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              erat tortor, laoreet ut est commodo, vulputate condimentum eros.
              Nam tempus, nisl et tempus fermentum, elit tellus dapibus orci, at
              imperdiet tellus libero sit amet elit. Phasellus nisi velit,
              rutrum ac dolor vel, aliquam placerat odio. Cras eu libero nec
              mauris maximus ultricies. Sed at purus
            </p>
            <div className="about_display">
              <img className="about_display_image" src={House} alt="" />
            </div>
            <p className="about_paragraph">
              a lectus sollicitudin maximus. Pellentesque vitae quam vel enim
              tincidunt malesuada. Proin fringilla, dolor nec sollicitudin
              porta, ipsum ipsum iaculis magna, sit amet porta ante erat sit
              amet justo. Maecenas dictum vestibulum tortor,
            </p>
          </div>

          <div className="col-1-of-4">{getTopSeller()}</div>
        </div>
      </section>
      <section className="about_team">
        {/* <div className='row'>
                    <h2 className='about_subheading'>Meet our  awesome team</h2>
                </div> */}
        {/* {getAllRealtors()} */}
      </section>
    </main>
  );
};
export default About;
