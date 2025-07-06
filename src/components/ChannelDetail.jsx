import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material'
import Videos from './Videos';
import ChannelCard from './ChannelCard'
import { fetchFromAPI } from '../utils/fetchFromAPI';
import zIndex from '@mui/material/styles/zIndex';



const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  // console.log({id});
  // console.log(channelDetail , videos);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items));
  }, [id])
  console.log("Alka's project")

  return (
    <Box minHeight="95vh">
      <Box>      <div style={{
        background: 'linear-gradient(318deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
        zIndex: 10,
        height: '300px'
      }}
      />
        <ChannelCard channelDetail={channelDetail}
          marginTop="-100px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>

  )
}

export default ChannelDetail
