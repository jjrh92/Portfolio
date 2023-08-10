import React from 'react'
import styled from '@emotion/styled'
import { ColorsPortfolio } from "../../../colors";
import ProjectCard from './ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "./Projects.css"

const Container = styled ("section") ({

  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",
  height: "100%",
  backgroundColor: ColorsPortfolio.background2,
  userSelect: "none",
  paddingLeft: "3rem",
  paddingRight: "3rem",
  paddingBottom: "3rem",

});

const Title = styled ("h1") ({

    fontSize: "20px",
    fontWeight: "bold",
    color: ColorsPortfolio.text1,
    paddingTop: "5rem",
    paddingBottom: "2rem",
  
});


const Text = styled ("p") ({

    fontSize: "20px",
    color: ColorsPortfolio.text1,
    textAlign: "center",
    paddingBottom: "1rem",
    lineHeight: "3rem",
  
});

const CardContainer = styled ("div") ({

  display: "flex",
  flexDirection: "row",
  border: "2px solid",
  borderColor: ColorsPortfolio.hover,
  borderRadius: "15px",
  height: "375px",
  width: "350px",
  paddingTop: "1rem",
  paddingBottom: "0.6rem",
  alignItems: "bottom",

});

const Projects = () => {

  return (

    <Container id='Container'>
      
      <Title id='Title'>Projects</Title>
      <Text id='Text'>In this section you will find some of the projects that I have worked on, from simple web apps to games, if you have and idea in mind and looking for a committed developer contact me.</Text>
      <Text id='Text'>Thank you for visiting my portfolio.</Text>
  
      <Title id='Title'>All my Projects</Title>
      <CardContainer>
      <Swiper navigation={true} modules={[Autoplay, Navigation]} autoplay={{ delay: 3000, disableOnInteraction: true,}} >
        <SwiperSlide><ProjectCard Title="Text Encrypter" Image="https://user-images.githubusercontent.com/48032098/212504650-e1aed67c-db1a-45e1-aa47-df5bf4482da6.png" Description="Webapp you can use to share secret messages with your friends. Made with HTML, CSS, JS, and Bootstrap." Repo="https://github.com/jjrh92/Encriptador" target="_blank" Live="https://jjrh92.github.io/Encriptador"/></SwiperSlide>

        <SwiperSlide><ProjectCard Title="Rock Paper Scissors" Image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Rock-paper-scissors.svg/1200px-Rock-paper-scissors.svg.png" Description="Classic childhood game. You can play against the Robot. Made with HTML, CSS, JS, and Bootstrap." Repo="https://github.com/jjrh92/rock-paper-scissors" target="_blank" Live="https://jjrh92.github.io/rock-paper-scissors/indexENG.html"/></SwiperSlide>

        <SwiperSlide><ProjectCard Title="JetCompra" Image="https://github.com/jjrh92/jetCompra/blob/main/media/logo.jpg?raw=true" Description="E-commerce using vanilla Javascript, featuring API consumption, cart, purchase simulation and some other cool features." Repo="https://github.com/jjrh92/jetCompra" target="_blank" Live="https://jjrh92.github.io/jetCompra/"/></SwiperSlide>

        <SwiperSlide><ProjectCard Title="Olitek Chile" Image="https://i.ibb.co/ftbcsXT/logo.png" Description="Firetrucks selling company based in Santiago, Chile. Made with HTML/CSS and Bootstrap (Freelance Project)." Repo="http://www.olitek.cl/" target="_blank" Live="http://www.olitek.cl/"/></SwiperSlide>

        <SwiperSlide><ProjectCard Title="toDoList" Image="https://m.media-amazon.com/images/I/31RvOPlfH7L.png" Description="Keep track of your daily goals with this task management webapp. Made with HTML/CSS, Bootstrap, using localstorage and vanilla Javascript." Repo="https://github.com/jjrh92/toDoList" target="_blank" Live="https://jjrh92.github.io/toDoList/"/></SwiperSlide>

        <SwiperSlide><ProjectCard Title="Rick & Morty Data Playground" Image="https://rickandmortyapi.com/api/character/avatar/72.jpeg" Description="Webapp that fetches data from a public API and shows the content by character, gender or species. Uses HTML/CSS, Javascript and Bootstrap." Repo="https://github.com/jjrh92/RicksDataPlayground" target="_blank" Live="https://jjrh92.github.io/RicksDataPlayground/"/></SwiperSlide>

        <SwiperSlide><ProjectCard Title="JulioGeek" Image="https://user-images.githubusercontent.com/48032098/233723395-4b59d658-ef28-4058-94f6-b247fad40e13.png" Description="E-Commerce featuring CRUD operations for the products. This webapp uses a remote JSON-Server to fetch the data. Made with HTML/CSS, Javascript and Bootstrap." Repo="https://github.com/jjrh92/JulioGeek" target="_blank" Live="https://jjrh92.github.io/JulioGeek/"/></SwiperSlide>

        <SwiperSlide><ProjectCard Title="JulioFlix" Image="https://user-images.githubusercontent.com/48032098/245622309-4f1a3770-dd8c-4f30-b6dc-981ac962900d.png" Description="Webapp made with ReactJS and MaterialUI, featuring CRUD operations to manage a video list. Uses a remote JSON-Server and AXIOS." Repo="https://github.com/jjrh92/JulioFlix" target="_blank" Live="https://julio-flix.vercel.app/"/></SwiperSlide>

        <SwiperSlide><ProjectCard Title="JulioFood" Image="https://camo.githubusercontent.com/03943d0b0c33a7a53762d8f2e09c858d865549f3af3e838dee21daa214e1363d/68747470733a2f2f73616c70696d656e74612e636f6d2e61722f77702d636f6e74656e742f75706c6f6164732f323032322f30382f7368757474657273746f636b5f313936303031303938362d383030783533332d312d363936783436342e6a7067" Description="E-Commerce made with ReactJS and MaterialUI, featuring Cart and purchase operations. Uses Marquee, Swiper and Router-DOM." Repo="https://github.com/jjrh92/JulioFood" target="_blank" Live="https://julio-food.vercel.app/"/></SwiperSlide>
      </Swiper>
      </CardContainer>



    </Container>

  )
  
}

export default Projects;