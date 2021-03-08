import React from 'react'
import AnimeCard from "./AnimeCard";
import { Link, useHistory } from 'react-router-dom'

export default function PrintCardsData(props) {
    const history = useHistory();

    const { data } = props

    return (
        <>
            <div className="container-fluid bg-list">
                <div className="row mt-5">
                    <div className="col-12 text-center my-5">
                        <h1 className="text-white">Results : {data.length} </h1>
                        <button className="btn btn-success mt-2" onClick={() => history.push("/Anime Finder")}>Search for another anime</button>
                    </div>
                </div>
                <div className="row mt-5 p-5">

                    {data.map((key, i) => (
                        <AnimeCard
                            key={i}
                            title={key.title}
                            imgUrl={key.image_url}
                            synopsis={key.synopsis}
                            episodes={key.episodes}
                            score={key.score}
                            rated={key.rated}
                            type={key.type}
                            start_date={key.start_date}
                            end_date={key.end_date}
                            url={key.url}
                            members={key.members}
                        />
                    ))}

                </div>
            </div>
        </>
    )
}
