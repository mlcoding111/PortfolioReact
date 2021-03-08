import React from 'react'

export default function DayInfo(props) {
    const { date, icon, temp, feels_like, tempState } = props
    return (
        <>

  
            <div className="col-lg-2 col-sm-4 element text-center">
                {/* data.dt_txt */}
                <h5>{date}</h5>
                {/* weather[0].main */}
                <span className=""><img src={icon} alt="icon"></img><br /></span>
                {/* weather.main.temp |  weather.main.feels_like */}
                <span>{temp}°</span><span className="text-white-50 ml-2">{feels_like}°<br /></span>
                {/* weather[0].main */}
                <span>{tempState}</span>
            </div>

        </>
    )
}
