import React from 'react'
import styled from '@emotion/styled'
import { ColorsPortfolio } from "../../../colors";
import { Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';

const Title = styled ("h1") ({

  fontSize: "1.4rem",
  fontWeight: "bold",
  color: ColorsPortfolio.text1,

});

const Img = styled ("img") ({

  height: "200px",
  width: "200px",
  paddingTop: "1rem",
  paddingBottom: "1rem",

});

const Description = styled ("p") ({

  fontSize: "1rem",
  color: ColorsPortfolio.text1,
  textAlign: "center",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  lineHeight: "20px",


});

const ButtonsContainer = styled ("div") ({

  display: "flex",
  flexDirection: "row",
  marginTop: "5px",

});

const Card = styled ("div") ({

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

});


const ProjectCard = (props) => {

  return (

    <Card>
      <Title>{props.Title}</Title>
      <Img alt='Project Logo' draggable="false" src={props.Image}/>
      <Description>{props.Description}</Description>
      
      <ButtonsContainer>

        <Button draggable="false" variant="text" title="Repo" href={props.Repo} target="_blank" rel="noopener noreferrer">
          <GitHubIcon className="button" sx={{color: ColorsPortfolio.text1 }}/>
        </Button>

        <Button draggable="false" variant="text" title="Live" href={props.Live} target="_blank" rel="noopener noreferrer">
          <OpenInNewIcon className="button" sx={{color: ColorsPortfolio.text1 }}/>
        </Button>

      </ButtonsContainer>


    </Card>

  )
  
}

export default ProjectCard;