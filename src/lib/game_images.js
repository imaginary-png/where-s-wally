//images
import alien_planet from "../Assets/images/alien planet/alien planet.png";
import alien_planet_0 from "../Assets/images/alien planet/0.png";
import alien_planet_1 from "../Assets/images/alien planet/1.png";
import alien_planet_2 from "../Assets/images/alien planet/2.png";
import alien_planet_3 from "../Assets/images/alien planet/3.png";

import pirate_island from "../Assets/images/pirate island/pirate island.png";
import pirate_island_0 from "../Assets/images/pirate island/0.png";
import pirate_island_1 from "../Assets/images/pirate island/1.png";
import pirate_island_2 from "../Assets/images/pirate island/2.png";
import pirate_island_3 from "../Assets/images/pirate island/3.png";

import medieval from "../Assets/images/medieval/medieval.png";
import medieval_0 from "../Assets/images/medieval/0.png";
import medieval_1 from "../Assets/images/medieval/1.png";
import medieval_2 from "../Assets/images/medieval/2.png";
import medieval_3 from "../Assets/images/medieval/3.png";

import post_apocalypse from "../Assets/images/post apocalypse/post-apocalypse.png";
import post_apocalypse_0 from "../Assets/images/post apocalypse/0.png";
import post_apocalypse_1 from "../Assets/images/post apocalypse/1.png";
import post_apocalypse_2 from "../Assets/images/post apocalypse/2.png";
import post_apocalypse_3 from "../Assets/images/post apocalypse/3.png";

import prehistoria from "../Assets/images/prehistoria/prehistoria.png";
import prehistoria_0 from "../Assets/images/prehistoria/0.png";
import prehistoria_1 from "../Assets/images/prehistoria/1.png";
import prehistoria_2 from "../Assets/images/prehistoria/2.png";
import prehistoria_3 from "../Assets/images/prehistoria/3.png";

import underground from "../Assets/images/underground/underground.png";
import underground_0 from "../Assets/images/underground/0.png";
import underground_1 from "../Assets/images/underground/1.png";
import underground_2 from "../Assets/images/underground/2.png";
import underground_3 from "../Assets/images/underground/3.png";

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
          { name: "seagull", src: pirate_island_0, id: 0 },
          { name: "skull", src: pirate_island_1, id: 1 },
          { name: "flag", src: pirate_island_2, id: 2 },
          { name: "in bed ^^", src: pirate_island_3, id: 3 },
        ],
        attribution:
          "https://pixeljoint.com/forum/forum_posts.asp?TID=25651&PN=1",
      },
      {
        name: "medieval.",
        src: medieval,
        id: 2,
        toFind: [
          { name: "jester", src: medieval_0, id: 0 },
          { name: "wagon", src: medieval_1, id: 1 },
          { name: "camel", src: medieval_2, id: 2 },
          { name: "genie", src: medieval_3, id: 3 },
        ],
        attribution: "https://pixeljoint.com/forum/forum_posts.asp?TID=27120",
      },
      {
        name: "post apocalypse.",
        src: post_apocalypse,
        id: 3,
        toFind: [
          { name: "isaac", src: post_apocalypse_0, id: 0 },
          { name: "sunflower", src: post_apocalypse_1, id: 1 },
          { name: "?", src: post_apocalypse_2, id: 2 },
          { name: "roadhog", src: post_apocalypse_3, id: 3 },
        ],
        attribution: "https://pixeljoint.com/forum/forum_posts.asp?TID=25150",
      },
      {
        name: "prehistoria.",
        src: prehistoria,
        id: 4,
        toFind: [
          { name: "tails", src: prehistoria_0, id: 0 },
          { name: "cow", src: prehistoria_1, id: 1 },
          { name: "venusaur", src: prehistoria_2, id: 2 },
          { name: "philosophers", src: prehistoria_3, id: 3 },
        ],
        attribution:
          "https://pixeljoint.com/forum/forum_posts.asp?TID=26398&PN=1",
      },
      {
        name: "underground.",
        src: underground,
        id: 5,
        toFind: [
          { name: "sword in stone", src: underground_0, id: 0 },
          { name: "dog house", src: underground_1, id: 1 },
          { name: "shark", src: underground_2, id: 2 },
          { name: "dragon", src: underground_3, id: 3 },
        ],
        attribution: "https://pixeljoint.com/forum/forum_posts.asp?TID=10983",
      },
    ];
  };

  // other stuff?
  return { getImages };
};

export default GameImages;
