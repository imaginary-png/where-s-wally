//images
import alien_planet from "../Assets/images/alien planet.png";
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
          { name: "char 1", src: "img link here", id: 0 },
          { name: "char 3", src: "img link here", id: 1 },
          { name: "char 2", src: "img link here", id: 2 },
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
