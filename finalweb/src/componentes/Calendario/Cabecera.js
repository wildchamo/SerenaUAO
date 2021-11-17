import React from "react";
import back from "../../imagenes/flechaizquierda.png"
import next from "../../imagenes/flechaderecha.png"

export default function Cabecera({value, setValue}) {
    function currMonth(){
        return value.format("MMMM")
    }

    function currYear(){
        return value.format("YYYY")
    }

    function prevWeek(){
        return value.clone().subtract(1, "week")
    }

    function nextWeek(){
        return value.clone().add(1, "week")
    }

    function thisWeek(){
        return value.isSame(new Date(), "week")
    }

    return (
        <div className="cal-head">
                <div className="previous" onClick={() => !thisWeek() && setValue(prevWeek())}>{!thisWeek() ? <img src={back}></img> : null}</div>
                <div className="current">
                    {currMonth()} {currYear()}
                </div>
                <div className="next" onClick={() =>setValue(nextWeek())}><img src={next}></img></div>
        </div>
    )
}