import React, { useState, useEffect } from "react";
import PrintCardsData from './PrintCardsData'
import { useLocation } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const AnimeList = (props) => {
  const location = useLocation();
  const base_url = "https://api.jikan.moe/v3";
  const [apiLoading, setApiLoading] = useState(true)
  const [data, setData] = useState([])
  const [originalData, setOriginalData] = useState([])

  const path = location.pathname.substr(11)


  // Moved function into useEffect to avoid "React Hook useEffect has missing dependencies" warning

  useEffect(() => {
    // Function to filter the original fetch, excluding unwanted data
    function filter(element) {
      const newArr = element.filter(obj => obj.title.includes(path))

      return newArr
    }
    // Fetch Data
    async function getData() {
      await fetch(`${base_url}/search/anime?q=${path}&page=1`)
        .then(response => response.json())
        .then(response => {
          setData(filter(response.results))
          setOriginalData(response.results)
          setApiLoading(false)
        })
        .catch(error => {
          throw (error)

        })
    }

    getData();
  }, [])



  // While data are loading
  if (apiLoading) {
    return (
      <Container className="d-flex justify-content-center align-items-center flex-column h-100 text-center bg-light">
        <h1>WARNING !</h1>
        <p className="long-text">Data is loading.. <br /> Crudcrud has reached its limit.. <br />You are navigating offline..</p>
      </Container>
    );
  }
  // If the filtered data from original data returns nothing , print the original data (expended)
  else if (data.length === 0) {
    return (
      <>
        {/* <PrintOriginalCards originalData={originalData} /> */}
        <PrintCardsData data={originalData} />
      </>
    )
  }
  // If the filtered data AND original data returns nothing , throw error
  else if (data.length === 0 && originalData === 0) {
    return (
      <>
        <h1>Error, we have found no match for {path}</h1>
      </>
    )
  }
  // If the filtered data returns something , print it
  else {
    return (
      <>

        <PrintCardsData data={data} />
        {/* <PrintFilteredCards data={data} /> */}
      </>
    );
  }

};

export default AnimeList;
