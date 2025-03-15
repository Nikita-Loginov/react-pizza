import React from "react";

import Filter from "../Filter";
import Sort from "../Sort";

import "./index.scss"

export default function Top() {
    return (
        <section className="top">
            <div className="container">
                <div className="top__inner">
                    <Filter />

                    <Sort />
                </div>
            </div>
        </section>
    )
}