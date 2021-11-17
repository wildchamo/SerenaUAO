import React, { useState, useEffect } from "react";
import "./Calendario.css";

import buildCalendar from "./Build";
import dayStyles, { beforeToday } from "./Styles";
import Cabecera from "./Cabecera";

export default function Calendario({ value, onChange }) {

    const [calendar, setCalendar] = useState([]);

    useEffect(() => {
        setCalendar(buildCalendar(value));
    }, [value]);

    return (
        <div className="calendario">
            <Cabecera value={value} setValue={onChange} />
            {/* <div className="cal-body">
                {calendar.map((week) => (
                    <div className="conte-dias">
                        {week.map((day) => (
                            <div className="dia" onClick={() => !beforeToday(day) && onChange(day)}>
                                <div className={dayStyles(day, value)}>
                                    {day.format("D").toString()}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div> */}
            <div className="wrapper wrapper-cal">
                <table className="cal-table">
                    <tr className="week-head">
                        <th>D</th>
                        <th>L</th>
                        <th>M</th>
                        <th>M</th>
                        <th>J</th>
                        <th>V</th>
                        <th>S</th>
                    </tr>
                    
                        {calendar.map((week) => (
                            <tr className="t-body week-body">
                                {week.map((day) => (
                                    <th className="dia" onClick={() => !beforeToday(day) && onChange(day)}>
                                        <div className={dayStyles(day, value)}>
                                            {day.format("D").toString()}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        ))}
                        {/* <th className="t-b-text">15</th>
                        <th className="t-b-text">16</th>
                        <th className="t-b-text">17</th>
                        <th className="t-b-text">18</th>
                        <th className="t-b-text">19</th>
                        <th className="t-b-text">20</th>
                        <th className="t-b-text">21</th> */}
                    
                </table>
            </div>
        </div>
    );
}