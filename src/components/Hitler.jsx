// Hitler.js
import React,{useEffect} from "react";
import Aos from "aos"
import "aos/dist/aos.css"

import "./Hitler.css"; 
function Hitler() {
  useEffect(() => {
    Aos.init({duration:2000});
  }, [])
  return (
    <div className="page-container">
      <div className="hitler-container">
        <div className="hitler-image">
        <h1 id="titl" data-aos="zoom-in">ADOLF HITLER</h1>
          <img id="hit"
            src="https://m.media-amazon.com/images/I/91PzrveHByL._AC_UF1000,1000_QL80_.jpg"
            alt="Adolf Hitler"
            data-aos="flip-right"
          />
        </div>
        <div className="hitler-intro" id="hitler">
          <p>
            Adolf Hitler was a German politician and leader of the Nazi Party.
            He rose to power as Chancellor of Germany in 1933 and later Führer
            in 1934. Hitler initiated World War II in Europe by invading Poland
            in September 1939. Adolf Hitler (born April 20, 1889, Braunau am
            Inn, Austria—died April 30, 1945, Berlin, Germany) was the leader of
            the Nazi Party (from 1920/21) and chancellor (Kanzler) and Führer of
            Germany (1933–45). His worldview revolved around two concepts:
            territorial expansion and racial supremacy. Those themes informed
            his decision to invade Poland, which marked the start of World War
            II, as well as the systematic killing of six million Jews and
            millions of others during the Holocaust. Hitler’s father, Alois
            (born 1837), was illegitimate. For a time he bore his mother’s name,
            Schicklgruber, but by 1876 he had established his family claim to
            the surname Hitler. Adolf never used any other surname.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hitler;
