/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import Card from '../components/Card';
import { fetchFromAPI } from '../context/fetchFromAPI';

const Search = () => {
  const [video, setVideo] = useState([])

  const {search} = useParams();

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${search}`)
      .then((data) => setVideo(data.items))
  },[])

  return (
    <Container>
     {video.map((videos)=>{
      return (
        <div>
          <Card videos={videos} />
        </div>
      )
     })}
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default Search