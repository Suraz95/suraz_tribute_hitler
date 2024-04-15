// Dictator.js
import React,{useEffect} from "react";
import "./Dictator.css"; 
import Aos from "aos"
import "aos/dist/aos.css"

function Dictator() {
  useEffect(() => {
    Aos.init({duration:2000});
  }, [])
  return (
    <div className="page-container">
      <div className="dictator-container" id="dictator">
        <div className="dictator-image">
          <img
            src="https://collections.ushmm.org/iiif-b/assets/702390"
            alt="Adolf Hitler"
            data-aos="flip-left"
          />
        </div>
        <div className="dictator-text">
          <h1 data-aos="fade-center">Dictatorship of Adolf Hitler</h1>
          <p data-aos="zoom-in">
            Once in power, Hitler established an absolute dictatorship. He
            secured the president’s assent for new elections. The Reichstag
            fire, on the night of February 27, 1933 (apparently the work of a
            Dutch Communist, Marinus van der Lubbe), provided an excuse for a
            decree overriding all guarantees of freedom and for an intensified
            campaign of violence. In these conditions, when the elections were
            held (March 5), the Nazis polled 43.9 percent of the votes. On March
            21 the Reichstag assembled in the Potsdam Garrison Church to
            demonstrate the unity of National Socialism with the old
            conservative Germany, represented by Hindenburg. Two days later the
            Enabling Bill, giving full powers to Hitler, was passed in the
            Reichstag by the combined votes of Nazi, Nationalist, and Centre
            party deputies (March 23, 1933). Less than three months later all
            non-Nazi parties, organizations, and labor unions ceased to exist.
            The disappearance of the Catholic Centre Party was followed by a
            German Concordat with the Vatican in July.
          </p>
          <p data-aos="zoom-in">
            Hitler had no desire to spark a radical revolution. Conservative
            “ideas” were still necessary if he was to succeed to the presidency
            and retain the support of the army; moreover, he did not intend to
            expropriate the leaders of industry, provided they served the
            interests of the Nazi state. Ernst Röhm, however, was a protagonist
            of the “continuing revolution”; he was also, as head of the SA,
            distrusted by the army. Hitler tried first to secure Röhm’s support
            for his policies by persuasion. Hermann Göring and Heinrich Himmler
            were eager to remove Röhm, but Hitler hesitated until the last
            moment. Finally, on June 29, 1934, he reached his decision. On the
            “Night of the Long Knives,” Röhm and his lieutenant Edmund Heines
            were executed without trial, along with Gregor Strasser, Kurt von
            Schleicher, and others. German soldiers swearing allegiance to Adolf
            Hitler German soldiers swearing allegiance to Adolf Hitler German
            soldiers swearing an oath of allegiance to Adolf Hitler at the
            Rathenower Strasse barracks in Berlin, August 2, 1934. The army
            leaders, satisfied at seeing the SA broken up, approved Hitler’s
            actions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dictator;
