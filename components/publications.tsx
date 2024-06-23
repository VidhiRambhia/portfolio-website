"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { publicationsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Publication from "@/components/publication";

export default function Publications() {
    const { ref } = useSectionInView("Projects", 0.5);

    return (
        <>
            <section ref={ref} id="publications" className="scroll-mt-28 mb-28">
                <SectionHeading>Publications</SectionHeading>
                <div className="px-12">
                    {publicationsData.map((publication, index) => (
                        <>
                            <React.Fragment key={index}>
                                <Publication {...publication}/>
                            </React.Fragment>
                        </>
                    ))}
                </div>
            </section>
        </>
    );
}
