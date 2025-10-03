import project1 from '../assets/project1.png';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
// You need to add an image for your competitive project here
// For example:
// import competitiveImg from '../assets/competitive.png';


export const projects = [
  {
    id: 1,
    img: project1,
    category: 'REACT',
    title: 'Simon Game',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    link: 'https://devansh9725.github.io/simon-game/',
  },
  {
    id: 2,
    img: project2,
    category: 'MERN',
    title: 'Keeper App',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    link: 'https://keeper-app-nine-mu.vercel.app/',
  },
  {
    id: 3,
    img: project3,
    category: 'REACT',
    title: 'To-Do List',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    link: 'https://to-do-list-alpha-sable.vercel.app/',
  },
  {
    id: 4,
    // FIX 2: Use the imported image. If you don't have one, you can use another placeholder like project1 for now.
    img: project1, // Or use your 'competitiveImg' after importing it
    
    // FIX 1: Change COMPETITIVE to a string 'COMPETITIVE'
    category: 'COMPETITIVE', 
    
    title: 'Codeforces Visualizer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    link: 'https://codeforces-visualizer-sable.vercel.app/',
  },
  {
    id: 5,
    img: project2,
    category: 'REACT',
    title: 'TinDog',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    link: 'https://devansh9725.github.io/TinDog-Website/',
  },
  {
    id: 6,
    img: project3,
    category: 'REACT',
    title: 'Dicee Game',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    link: 'https://devansh9725.github.io/Dicee-Game/',
  },
];

export const MERN = 'MERN';
export const REACT = 'REACT';
