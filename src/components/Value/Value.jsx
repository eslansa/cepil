import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import data from "../../utils/accordion";

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left slide */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>
        {/* right slide */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give You</span>
          <span className="secondaryText">
            fwhuiaw hfuaw fhawuhf awu fhwaup fawg fyaw gfywa fawy fwapgf ywag
            fyapwg fwap f
            <br />
            gjiosadhguaguasgusahgusahgpuashguisauisqgfsa7gsauhguaishguisaghuisaghusaig
          </span>
          <Accordion
      className="accordion-container"
      allowMultipleExpanded={false}
      preExpanded={[0]}
    >
      {data.map((item, i) => {
        const [expanded, setExpanded] = useState(false);
        const className = expanded ? "expanded" : "collapsed";

        useEffect(() => {
          setExpanded(false); // set initial state
        }, []);

        return (
          <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
            <AccordionItemHeading>
              <AccordionItemButton className="flexCenter accordionButton">
                <AccordionItemState>
                  {({ expanded }) => {
                    if (expanded !== expanded) {
                      setExpanded(expanded);
                    }
                  }}
                </AccordionItemState>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
