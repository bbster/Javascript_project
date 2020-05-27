import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import { Link } from "react-router-dom";
import { GiCupcake } from "react-icons/gi";
import { DiCoffeescript } from "react-icons/di";
import styles from "./Home.module.css";

export default function Home() {
  const carouselUrls = [
    "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAFERbL.img?h=1119&w=1119&m=6&q=60&o=f&l=f&x=584&y=374",
    "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAFERbL.img?h=1119&w=1119&m=6&q=60&o=f&l=f&x=584&y=374",
    "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAFERbL.img?h=1119&w=1119&m=6&q=60&o=f&l=f&x=584&y=374",
  ];
  return (
    <div className={`container ${styles.flex}`}>
      <Carousel className="carousel">
        {carouselUrls.map((url, index) => (
          <img src={url} alt="싸발적이고" key={index} width={"100%"} />
        ))}
      </Carousel>
      <div className={styles.btnContainer}>
        <div>
          <Link to={"/menu"}>
            <DiCoffeescript size="5rem" />
            <p>Coffee</p>
          </Link>
        </div>
        <div>
          <Link to={"/menu"}>
            <GiCupcake size="5rem" />
            <p>Food</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
