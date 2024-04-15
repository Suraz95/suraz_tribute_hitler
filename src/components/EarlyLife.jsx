// EarlyLife.js
import React, { useEffect } from "react";
import "./EarlyLife.css";
import Aos from "aos"
import "aos/dist/aos.css"
function EarlyLife() {
  useEffect(() => {
    Aos.init({duration:2000});
  }, [])
  return (
    <div className="page-container" id="early-life" data-aos="fade-right">
      <div className="early-life-container">
        <div className="early-life-image">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Hitler_as_young_man.jpg/1200px-Hitler_as_young_man.jpg" alt="Adolf Hitler" />
        </div>
        <div className="early-life-intro">
          <h1>Early Life of Adolf Hitler</h1>
          <p>
            Adolf Hitler was born on April 20, 1889, in Braunau am Inn, Austria.
            He was the fourth of six children born to Alois Hitler and Klara
            Pölzl. Hitler's early years were marked by hardship and
            disappointment. After his father’s retirement from the state customs
            service, Adolf Hitler spent most of his childhood in Linz, the
            capital of Upper Austria. It remained his favourite city throughout
            his life, and he expressed his wish to be buried there. Alois Hitler
            died in 1903 but left an adequate pension and savings to support his
            wife and children. Although Hitler feared and disliked his father,
            he was a devoted son to his mother, who died after much suffering in
            1907. With a mixed record as a student, Hitler never advanced beyond
            a secondary education. After leaving school, he visited Vienna, then
            returned to Linz, where he dreamed of becoming an artist. Later, he
            used the small allowance he continued to draw to maintain himself in
            Vienna. He wished to study art, for which he had some faculties, but
            he twice failed to secure entry to the Academy of Fine Arts. For
            some years he lived a lonely and isolated life, earning a precarious
            livelihood by painting postcards and advertisements and drifting
            from one municipal hostel to another. Hitler already showed traits
            that characterized his later life: loneliness and secretiveness, a
            bohemian mode of everyday existence, and hatred of cosmopolitanism
            and of the multinational character of Vienna. In 1913 Hitler moved
            to Munich. Screened for Austrian military service in February 1914,
            he was classified as unfit because of inadequate physical vigour;
            but when World War I broke out, he petitioned Bavarian King Louis
            III to be allowed to serve, and one day after submitting that
            request, he was notified that he would be permitted to join the 16th
            Bavarian Reserve Infantry Regiment. After some eight weeks of
            training, Hitler was deployed in October 1914 to Belgium, where he
            participated in the First Battle of Ypres. He served throughout the
            war, was wounded in October 1916, and was gassed two years later
            near Ypres. He was hospitalized when the conflict ended. During the
            war, he was continuously in the front line as a headquarters runner;
            his bravery in action was rewarded with the Iron Cross, Second
            Class, in December 1914, and the Iron Cross, First Class (a rare
            decoration for a corporal), in August 1918.
            </p>
        </div>
      </div>
    </div>
  );
}

export default EarlyLife;
