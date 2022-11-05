import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card';

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    relatedToVideoId: '7ghhRHRP6t4',
    maxResults: '51'
  },
  headers: {
    'X-RapidAPI-Key': 'f465ec82b7msh107e9b1a172927ap1925cajsn8af425150be1',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

const Home = () => {
  const [video, setVideo] = useState([])

  useEffect(()=>{
    axios.request(options).then(function (response) {
      console.log(response.data);
      setVideo(response.data.items)
    }).catch(function (error) {
      console.error(error);
    });
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

export default Home