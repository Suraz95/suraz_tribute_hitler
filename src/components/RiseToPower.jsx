// RiseToPower.js
import React, { useEffect } from "react";
import "./RiseToPower.css"; 
import Aos from "aos"
import "aos/dist/aos.css"

function RiseToPower() {
  useEffect(() => {
    Aos.init({duration:2000});
  }, [])
  return (
    <div className="page-container" id="rise-to-power">
      <div className="rise-to-power-container">
        <div className="rise-to-power-text">
          <h1 data-aos="flip-left">Rise to Power</h1>
          <p data-aos="fade-right">
            Discharged from the hospital amid the social chaos that followed
            Germany’s defeat, Hitler took up political work in Munich in
            May–June 1919. As an army political agent, he joined the small
            German Workers’ Party in Munich (September 1919). In 1920 he was put
            in charge of the party’s propaganda and left the army to devote
            himself to improving his position within the party, which in that
            year was renamed the National-sozialistische Deutsche Arbeiterpartei
            (Nazi). Conditions were ripe for the development of such a party.
            Resentment at the loss of the war and the severity of the peace
            terms added to the economic woes and brought widespread discontent.
            This was especially sharp in Bavaria, due to its traditional
            separatism and the region’s popular dislike of the republican
            government in Berlin. In March 1920 a coup d’état by a few army
            officers attempted in vain to establish a right-wing government.
            Munich was a gathering place for dissatisfied former servicemen and
            members of the Freikorps, which had been organized in 1918–19 from
            units of the German army that were unwilling to return to civilian
            life, and for political plotters against the republic. Many of these
            joined the Nazi Party. Foremost among them was Ernst Röhm, a staff
            member of the district army command, who had joined the German
            Workers’ Party before Hitler and who was of great help in furthering
            Hitler’s rise within the party. It was he who recruited the “strong
            arm” squads used by Hitler to protect party meetings, to attack
            socialists and communists, and to exploit violence for the
            impression of strength it gave. In 1921 these squads were formally
            organized under Röhm into a private party army, the SA
            (Sturmabteilung). Röhm was also able to secure protection from the
            Bavarian government, which depended on the local army command for
            the maintenance of order and which tacitly accepted some of his
            terrorist tactics.
          </p>
        </div>
        <div className="rise-to-power-image">
          <img
            src="https://assets.editorial.aetnd.com/uploads/2009/10/adolf-hitler-gettyimages-119505258.jpg?width=768"
            alt="Adolf Hitler"
            data-aos="zoom-in"
          />
        </div>
        <div className="rise-to-power-text">
            <p data-aos="fade-left">
            The advent of the Depression in 1929, however, led to a new period of political instability. In 1930 Hitler made an alliance with the Nationalist Alfred Hugenberg in a campaign against the Young Plan, a second renegotiation of Germany’s war reparation payments. With the help of Hugenberg’s newspapers, Hitler was able for the first time to reach a nationwide audience. The alliance also enabled him to seek support from many of the magnates of business and industry who controlled political funds and were anxious to use them to establish a strong right-wing, antisocialist government. The subsidies Hitler received from the industrialists placed his party on a secure financial footing and enabled him to make effective his emotional appeal to the lower middle class and the unemployed, based on the proclamation of his faith that Germany would awaken from its sufferings to reassert its natural greatness. Hitler’s dealings with Hugenberg and the industrialists exemplify his skill in using those who sought to use him. But his most important achievement was the establishment of a truly national party (with its voters and followers drawn from different classes and religious groups), unique in Germany at the time.
            </p>
        </div>
      </div>
    </div>
  );
}

export default RiseToPower;
