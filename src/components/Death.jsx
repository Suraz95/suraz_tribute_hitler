// WorldWar2.js
import React,{useEffect} from "react";
import "./WorldWar2.css";
import Aos from "aos"
import "aos/dist/aos.css"

function WorldWar2() {
  useEffect(() => {
    Aos.init({duration:2000});
  }, [])
  return (
    <div className="page-container" id="world-war-2">
      <div className="world-war2-container">
        <div className="world-war2-text">
          <h1 data-aos="zoom-in">The Death</h1>
          <p>
            Adolf Hitler, chancellor and dictator of Nazi Germany from 1933 to
            1945, committed suicide via a gunshot to the head on 30 April 1945
            in the Führerbunker in Berlin after it became clear that Germany
            would lose the Battle of Berlin, which led to the end of World War
            II in Europe. Eva Braun, his wife of one day, also committed suicide
            by cyanide poisoning. In accordance with Hitler's prior written
            and verbal instructions, that afternoon their remains were carried
            up the stairs and through the bunker's emergency exit to the Reich
            Chancellery garden, where they were doused in petrol and
            burned. The news of Hitler's death was announced on German
            radio the next day, 1 May. Eyewitnesses who saw Hitler's body
            immediately after his suicide testified that he died from a
            self-inflicted gunshot, which has been established to have been a
            shot to the temple. Otto Günsche, Hitler's personal
            adjutant, who handled both bodies, testified that while Braun's
            smelled strongly of burnt almonds – an indication of cyanide
            poisoning – there was no such odour about Hitler's body, which
            smelled of gunpowder. Dental remains extracted from the soil in
            the garden were matched with Hitler's dental records in May
            1945. The dental remains were later confirmed as being
            Hitler's. The Soviet Union restricted the release of information and
            released many conflicting reports about Hitler's death. Historians
            have largely rejected these as part of a deliberate disinformation
            campaign by Joseph Stalin to sow confusion regarding Hitler's
            death,or have attempted to reconcile them. Soviet
            records allege that the burnt remains of Hitler and Braun were
            recovered,despite eyewitness accounts that they were almost
            completely reduced to ashes. In June 1945, the Soviets began seeding
            two contradictory narratives: that Hitler died by taking cyanide
            and that he had survived and fled to another country.
            Following extensive review, West Germany issued a death certificate
            in 1956. Conspiracy theories about Hitler's death continue to
            attract interest.
          </p>
        </div>
        <div className="world-war2-image" data-aos="zoom-out">
          <img src="https://wehco.media.clients.ellingtoncms.com/img/photos/2018/08/02/resized_272427-death-of-a-nation-0803_29-24932_t800.jpg?90232451fbcadccc64a17de7521d859a8f88077d" alt="Adolf Hitler" />
        </div>
        
      </div>
    </div>
  );
}

export default WorldWar2;
