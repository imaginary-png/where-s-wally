//images
import alien_planet from "../Assets/images/alien planet/alien planet.png";
import alien_planet_0 from "../Assets/images/alien planet/0.png";
import alien_planet_1 from "../Assets/images/alien planet/1.png";
import alien_planet_2 from "../Assets/images/alien planet/2.png";
import alien_planet_3 from "../Assets/images/alien planet/3.png";

import pirate_island from "../Assets/images/pirate island.png";
import medieval from "../Assets/images/medieval.png";
import post_apocalypse from "../Assets/images/post-apocalypse.png";
import prehistoria from "../Assets/images/prehistoria.png";
import underground from "../Assets/images/underground.png";

const GameImages = () => {
  const getImages = () => {
    return [
      {
        name: "alien planet.",
        src: alien_planet,
        id: 0,
        toFind: [
          { name: "master chief", src: alien_planet_0, id: 0 },
          { name: "ewok", src: alien_planet_1, id: 1 },
          { name: "clap trap", src: alien_planet_2, id: 2 },
          { name: "baby yoda  ", src: alien_planet_3, id: 3 },
        ],
        attribution:
          "https://pixeljoint.com/forum/forum_posts.asp?TID=26631&PN=1",
      },
      {
        name: "pirate island.",
        src: pirate_island,
        id: 1,
        toFind: [
          { name: "char 4", src: "img link here", id: 0 },
          { name: "char 5", src: "img link here", id: 1 },
          { name: "char 6", src: "img link here", id: 2 },
        ],
        attribution:
          "https://pixeljoint.com/forum/forum_posts.asp?TID=25651&PN=1",
      },
      {
        name: "medieval.",
        src: medieval,
        id: 2,
        toFind: [
          { name: "char 7", src: "img link here", id: 0 },
          { name: "char 8", src: "img link here", id: 1 },
          { name: "char 9", src: "img link here", id: 2 },
        ],
        attribution: "https://pixeljoint.com/forum/forum_posts.asp?TID=27120",
      },
      {
        name: "post apocalypse.",
        src: post_apocalypse,
        id: 3,
        toFind: [
          { name: "char 10", src: "img link here", id: 0 },
          { name: "char 11", src: "img link here", id: 1 },
          { name: "char 12", src: "img link here", id: 2 },
        ],
        attribution: "https://pixeljoint.com/forum/forum_posts.asp?TID=25150",
      },
      {
        name: "prehistoria.",
        src: prehistoria,
        id: 4,
        toFind: [
          { name: "char 13", src: "img link here", id: 0 },
          { name: "char 14", src: "img link here", id: 1 },
          { name: "char 15", src: "img link here", id: 2 },
        ],
        attribution:
          "https://pixeljoint.com/forum/forum_posts.asp?TID=26398&PN=1",
      },
      {
        name: "underground.",
        src: underground,
        id: 5,
        toFind: [
          { name: "char 16", src: "img link here", id: 0 },
          { name: "char 17", src: "img link here", id: 1 },
          { name: "char 18", src: "img link here", id: 2 },
        ],
        attribution: "https://pixeljoint.com/forum/forum_posts.asp?TID=10983",
      },
    ];
  };

  // other stuff?
  return { getImages };
};

export default GameImages;
