// WorldWar2.js
import React,{useEffect} from "react";
import './WorldWar2.css'; 
import Aos from "aos"
import "aos/dist/aos.css"

function WorldWar2() {
  useEffect(() => {
    Aos.init({duration:2000});
  }, [])
  return (
    <div className="page-container" id='world-war-2'>
      <div className="world-war2-container">
        <div className="world-war2-text">
          <h1 data-aos="flip-down">Adolf Hitler and World War II</h1>
          <p data-aos="slide-right">
            Adolf Hitler's actions played a significant role in causing and escalating World War II.
            As Chancellor of Germany, Hitler pursued aggressive foreign policies that aimed to
            expand German territory and influence. He sought to overturn the Treaty of Versailles
            and regain territories lost by Germany in World War I.
            Hitler's invasion of Poland in September 1939 triggered the outbreak of World War II
            in Europe. This aggressive act led to the declaration of war by Britain and France
            against Germany. Subsequently, Hitler's forces launched campaigns across Europe,
            including the invasion of France, the Balkans, and the Soviet Union.
          </p>
         
        </div>
        <div className="world-war2-image"data-aos="zoom-out">
          <img
            src="https://cropper.watch.aetnd.com/public-content-aetn.video.aetnd.com/video-thumbnails/AETN-History_VMS/725/175/BRAND_THC_BSFC_181161_SFM_000_2997_15_20150113_00_HD.jpg"
            alt="Adolf Hitler"
          />
        </div>
        <div className="page-container" >
        <p data-aos="fade-left">
            The war resulted in widespread devastation, loss of life, and atrocities committed
            by Nazi Germany, including the Holocaust, in which millions of Jews and other minorities
            were systematically persecuted and murdered. Hitler's aggressive expansionism and
            totalitarian rule brought untold suffering to millions and shaped the course of history
            for generations to come.
            Germany’s war strategy was assumed by Hitler from the first. When the successful campaign against Poland failed to produce the desired peace accord with Britain, he ordered the army to prepare for an immediate offensive in the west. Bad weather made some of his reluctant generals postpone the western offensive. This in turn led to two major changes in planning. The first was Hitler’s order to forestall an eventual British presence in Norway by occupying that country and Denmark in April 1940. Hitler took a close personal interest in this daring operation. From this time onward his intervention in the detail of military operations grew steadily greater. The second was Hitler’s important adoption of General Erich von Manstein’s plan for an attack through the Ardennes (which began May 10) instead of farther north. This was a brilliant and startling success. The German armies reached the Channel ports (which they had been unable to reach during World War I) in 10 days. Holland surrendered after 4 days and Belgium after 16 days. Hitler held back General Gerd von Rundstedt’s tanks south of Dunkirk, thus enabling the British to evacuate most of their army, but the western campaign as a whole was amazingly successful. On June 10 Italy entered the war on the side of Germany. On June 22 Hitler signed a triumphant armistice with the French on the site of the Armistice of 1918.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorldWar2;
