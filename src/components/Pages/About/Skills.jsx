import React from 'react'
import styled from '@emotion/styled'
import { ColorsPortfolio } from "../../../colors";
import { Button } from '@mui/material';
import "./About.css"

const Container = styled ("div") ({

    display: "flex",

});

const IconsContainer = styled ("div") ({

    display: "block",
    flexDirection: "column",
    width: "350px",

});

const IconoImagen = styled ("img") ({

    width: "50px",
    height: "50px",
  
});

const Skills = () => {

    return (

        <Container>
            <IconsContainer>
                <Button variant="text" title="HTML5">
                    <IconoImagen draggable="false" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg' className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }} />
                </Button>

                <Button variant="text" title="CSS">
                    <IconoImagen draggable="false" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg' className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }} />
                </Button>

                <Button variant="text" title="JS">
                    <IconoImagen draggable="false" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }} />
                </Button>

                <Button variant="text" title="ReactJS">
                    <IconoImagen draggable="false"src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg' className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }} />
                </Button>

                <Button variant="text" title="MaterialUI">
                    <IconoImagen draggable="false" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }} />
                </Button>

                <Button variant="text" title="NodeJS">
                    <IconoImagen draggable="false" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg' className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }} />
                </Button>

                <Button variant="text" title="Sass">
                    <IconoImagen draggable="false" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }} />
                </Button>

                <Button variant="text" title="Bootstrap">
                    <IconoImagen draggable="false" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }} />
                </Button>

                <Button variant="text" title="Tailwind">
                    <IconoImagen draggable="false" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }} />
                </Button>

                <Button variant="text" title="Git">
                    <IconoImagen draggable="false" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg' className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }} />
                </Button>

                <Button variant="text" title="NPM">
                    <IconoImagen draggable="false" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }} />
                </Button>

                <Button variant="text" title="PS">
                    <IconoImagen draggable="false" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }} />
                </Button>

                <Button variant="text" title="PR">
                    <IconoImagen draggable="false" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg' className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }} />
                </Button>

                <Button variant="text" title="Figma">
                    <IconoImagen draggable="false" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }} />
                </Button>

                <Button variant="text" title="Trello">
                    <IconoImagen draggable="false" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain-wordmark.svg' className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }} />
                </Button>

                <Button variant="text" title="Firebase">
                    <IconoImagen draggable="false" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg' className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }} />
                </Button>

                <Button variant="text" title="Bash">
                    <IconoImagen draggable="false" src='https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg' className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }} />
                </Button>

                <Button variant="text" title="Linux">
                    <IconoImagen draggable="false" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }} />
                </Button>

                <Button variant="text" title="SSH">
                    <IconoImagen draggable="false" src='https://cdn-icons-png.flaticon.com/512/5261/5261867.png' className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }} />
                </Button>
                
                <Button variant="text" title="VSCODE">
                    <IconoImagen draggable="false" src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg' className="button" sx={{ fontSize: "3rem", color: ColorsPortfolio.text1 }} />
                </Button>

            </IconsContainer>
        </Container>
  
    )
    
  }
  
  export default Skills;