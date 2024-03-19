import React from "react";
import { Stack, Box } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
import Loader from "./Loader";
const Video = ({ videos ,direction}) => {
  if(!videos?.length) return <Loader />;
  // if(!videos?.length) return 'Loading....';
  // if (!Array.isArray(videos)) {
  //   console.log(videos);
  //   return null;
  // }

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={5}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id && item.id.videoId && <VideoCard video={item} />}
          {item.id && item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Video;
