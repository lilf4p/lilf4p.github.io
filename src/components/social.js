import { Button, Container } from "react-bootstrap";
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import wave2 from '../immagini/wave2.svg';

function Social () {
    return (
        <div className="Social" >
                <IconButton aria-label="github" href="https://github.com/lilf4p">
                    <GitHubIcon fontSize="large"/>
                </IconButton>
                <IconButton aria-label="twitter" href="https://twitter.com/lilf4p">
                    <TwitterIcon fontSize="large" color="primary"/>
                </IconButton>
                <IconButton aria-label="instagram" href="https://www.instagram.com/lilf4p/">
                    <InstagramIcon fontSize="large" color="secondary"/>
                </IconButton>
                <IconButton aria-label="linkedin" href="https://www.linkedin.com/in/leonardo-stoppani-45090923a/">
                    <LinkedInIcon fontSize="large" color="primary"/>
                </IconButton>
        </div>
    );
}

export default Social;