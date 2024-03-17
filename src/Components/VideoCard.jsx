import {Link} from 'react-router-dom';
import {Typography,Card,CardContent,CardMedia} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl,demoVideoUrl,demoVideoTitle,demoChannelUrl,demoChannelTitle} from '../utils/constants';

const VideoCard = ({video:{id:{videoId},snippet}}) => {
    

  return (
    <Card sx={{width:{md:'320px',xs:'100%',sm: '358px',md:'320px'},boxShadow:'none',borderRadius:'none'}}>
         <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <CardMedia image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{width: { xs: '100%', sm: '358px',md:'320px'}, height: 180 }}
        />
        </Link>

        <CardContent sx={{backgroundColor:'black',height:'106px'}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
            <Typography variant='subtitle1' fontWeight="bold" color="white">
                {snippet?.title.slice(0,60)|| demoVideoTitle.slice(0,60)}
            </Typography>
            </Link>
        <Link to={snippet?.channelId?`/channel/${snippet?.channelId}`:demoChannelUrl}>
            <Typography variant='subtitile2' fontWeight="bold" color="red">
                {snippet?.channelTitle||demoChannelTitle}

                <CheckCircle sx={{fontSize:12,color:'red',ml:'5px'}}/>
            </Typography>
        </Link>
            </CardContent>

    </Card>
  )
}

export default VideoCard;
