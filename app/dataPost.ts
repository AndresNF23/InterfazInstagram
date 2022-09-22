  interface PostData {
    id: number;
    pictureprofile: string;
    username: string;
    imagepost: string;
    likes: string;
    description: string;
    comments: string;
  }

  const data2: PostData[] = [
    {
      id: 1,
      pictureprofile: "../images/imagespost/equipo.jpg",
      username: "AndresCoz",
      imagepost: "../images/imagespost/deku.jpg",
      likes: "10",
      description: "Aluakbar",
      comments: "Show to 5 comments"
    },
    {
      id: 2,
      pictureprofile: "../images/imagespost/equipo.jpg",
      username: "CamiloGuevara",
      imagepost: "../images/imagespost/deku.jpg",
      likes: "10",
      description: "nose",
      comments: "Show to 12 comments"
    }
  ]
  export default data2; 