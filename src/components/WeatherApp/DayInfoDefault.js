import React from 'react'

export default function DayInfo() {
    return (
        <>
            <div className="container-fluid days-info-container">
                <div className="row d-flex justify-content-center justify-content-around">
                    <div className="col-lg-2 col-sm-4 element">
                        {/* data.dt_txt */}
                        <h5>Thue 30</h5>
                        {/* weather[0].main */}
                        <span className="mr-4">Icon<br /></span>
                        {/* weather.main.temp |  weather.main.feels_like */}
                        <span>81°</span><span className="text-white-50 ml-2">67°<br /></span>
                        {/* weather[0].main */}
                        <span className="mr-3">Sunny</span>
                    </div>
                    <div className="col-lg-2 col-sm-4 element">
                        <h5>Thue 1</h5>
                        <span className="mr-4">Icon<br /></span>
                        <span>81°</span><span className="text-white-50 ml-2">67°<br /></span>
                        <span className="mr-3">Sunny</span>
                    </div>
                    <div className="col-lg-2 col-sm-4 element">
                        <h5>Thue 2</h5>
                        <span className="mr-4">Icon<br /></span>
                        <span>81°</span><span className="text-white-50 ml-2">67°<br /></span>
                        <span className="mr-3">Sunny</span>
                    </div>
                    <div className="col-lg-2 col-sm-6 element">
                        <h5>Thue 3</h5>
                        <span className="mr-4">Icon<br /></span>
                        <span>81°</span><span className="text-white-50 ml-2">67°<br /></span>
                        <span className="mr-3">Sunny</span>
                    </div>
                    <div className="col-lg-2 col-sm-6 element">
                        <h5>Thue 4</h5>
                        <span className="mr-4">Icon<br /></span>
                        <span>81°</span><span className="text-white-50 ml-2">67°<br /></span>
                        <span className="mr-3">Sunny</span>
                    </div>
                </div>
            </div>
        </>
    )
}
