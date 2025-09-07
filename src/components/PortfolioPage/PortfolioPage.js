import React from 'react';
import Portfolio from './Portfolio.js';
import oldPortfolio from './portfolioimages/oldportfolio.png';
import spaceBears from './portfolioimages/spacebear.png';
import discord from './portfolioimages/discord.jpeg';
import capstone from './portfolioimages/capstone.png';
import connect4 from './portfolioimages/connect4.png';
import matching from './portfolioimages/matching.png';
import pico8 from './portfolioimages/penguin.gif';
import mmlauncher from './portfolioimages/MMLaunch.jpg';
import misc from './portfolioimages/misc.png';
import games from './portfolioimages/games.png';
import howardsFarm from './portfolioimages/HowardsFarm.jpg'
import './PortfolioPage.css';

const PortfolioPage = () => {
  return (
    <div className='portfolio-container'>
      <div className='portfolio'>
            <h1>Portfolio</h1>
            <p id = "portfolio-description"> I have always had a passion for learning new things and for creating novel projects. I have dabbled in many forms of media creation however I specialize in web development. Below are some of the projects which showcase my skills as an engineer, a thinker, and as a developer. </p>
            <div className='portfolio-contents'>
            <Portfolio
              header="Howards Farm"
              imageName={howardsFarm}
              imagePlacement="right"
              description="Developed the framework and front end interfaces for the Howards Farm website, the website is ran by my family and is used to sell produce locally and across the globe. The application is built on TypeScript using an Azure deployment on the backend"
              link="https://www.howardsfarm.org/"
            />
            <Portfolio
              header="My Old Portfolio"
              imageName={oldPortfolio}
              imagePlacement="left"
              description="This is my previous home page which is currently depracated, however it is one of the only live websites I currently have so I figure I would leave it up to demonstrate my ability to build portfolio's in traditional HTML and JS as well. Unfortunately most of the links in the portfolio are depractated however I will rebuild thier functionality into this portfolio."
              link="https://daho2353.github.io/Project2/portfolio"
            />
            <Portfolio
              header="Discover M(you)sic"
              imageName={capstone}
              imagePlacement="right"
              description="Discover M(you)sic was the project that I created for my senior capstone class. The basis of the project was to provide users with music recommendations pulled from the Last.FM and Youtube API's. The project turned out alright despite the difficulties caused by the Corona virus outbreak and was one of my first successful React projects."
              link="https://daho2353.wordpress.com/2020/01/13/capstone-documentation/"
            />
            <Portfolio
              header="Space Bear Adventure"
              imageName={spaceBears}
              imagePlacement="left"
              description="This was the final project made by my team in game design. It is worth noting that this is the same team that was able to sell the rights to a board game we created the year prior. We continued to use our agile development methods in this class and produced an amazing game. I did a lot of work on the controller intergation as well a lot of the designing and level building. The game is built in Unity using C#"
              link="https://github.com/turnerdylan/SpaceBearsFA19"
            />
            <Portfolio
              header="Discord Bot"
              imageName={discord}
              imagePlacement="right"
              description="Private Discord bot programmed in Python that performs misc. tasks. The bot uses the Python Discord library and the asyncio library to monitor discord servers and respond to certain keywords. When making new features for the bot I usually try do something new programming wise, for example some functions use File I/O, some use Regex, if/elif trees, variable dictionaries, and many more. Clicking on the image will link you to the Git Hub repository for this bot."
              link="https://github.com/daho2353/Discord-Bot"
            />
            <Portfolio
              header="Connect 4"
              imageName={connect4}
              imagePlacement="left"
              description="Connect 4 game built in React using the UseState hook. This project is definetly one of my greater programming achievments due to the amount of logic the game required to be coded in. It was great practice for learning the rules of state within the react framework. Unfortunately it is no longer live due to being hosted on the colorado servers but the source code can be found on my github."
              link="https://github.com/daho2353/connect4"
            />
            <Portfolio
              header="Matching Game"
              imageName={matching}
              imagePlacement="right"
              description="This is a group project created in react, we decided to build a matching game, we also incorporated the use of the lodash library which gives a bunch of useful commands and the UseState hook which makes the management of state much easier"
              link="https://github.com/daho2353/Matching-Game"
            />
            <Portfolio
              header="Pico 8 - Ice Puzzles"
              imageName={pico8}
              imagePlacement="left"
              description="Final Project for a game design class coded in Pico-8 which is a lua based language. The game features a penguin sliding through various ice puzzles."
              link="none"
            />
            <Portfolio
              header="M&M Launcher"
              imageName={mmlauncher}
              imagePlacement="right"
              description="Wordpress blog documenting my various Arduino projects. Most of the code is written by me including the code for the M&M Launcher which has been my largest Arduino project to date. Clicking on the image of the M&M launcher will bring you to my work-in-progress blog where you can find my process on all of my Arduino and some of my front end web development projects."
              link="https://daho2353.wordpress.com/category/object/"
            />
            <Portfolio
              header="Miscellaneous Projects"
              imageName={misc}
              imagePlacement="left"
              description="There are many projects I have created which are no longer live, pictured from my old portfolio are the paralax gaming history site which gave me immense css practice, I also had a handfull of projects which demonstrated my abilities with DOM manipulation and Database usage. Unfortunately these sites are no longer live as they were being hosted on the university servers."
              link="https://github.com/daho2353"
            />
            <Portfolio
              header="Bitsy - Tiny Games and Unity SHMUP"
              imageName={games}
              imagePlacement="right"
              description="I created two games in the Bitsy - Tiny Games builder as well as a Unity shoot em up staring my favorite animal the manatee, Linked above is my itch.io page which includes all of these games."
              link="https://imgumi.itch.io/"
            />
            </div>
          </div>
    </div>
    
  );
};

export default PortfolioPage;
