export const fetchComments = async () => {
  return {
    data: {
      comments: [
        {
          id: "1",
          author: {
            name: "Ivana Paradzikovic",
            // picture: "img/ivana.jpg",
            picture: "https://randomuser.me/api/portraits/women/26.jpg",
          },
          text: "Hello there, so I was wondering if you know how much MB is in a GB?",
          timestamp: 414514740000,
        },
        {
          id: "2",
          parent_id: "1",
          author: {
            name: "Zmaj Sipovski",
            // picture: "img/zmaj.jpg",
            picture: "https://randomuser.me/api/portraits/men/84.jpg",
          },
          text: "Hey Ivana! Have you tried Googling that?",
          timestamp: 414514860000,
        },
        {
          id: "3",
          parent_id: "1",
          author: {
            name: "Ines Grah",
            // picture: "img/ines.jpg",
            picture: "https://randomuser.me/api/portraits/women/57.jpg",
          },
          text: "Zmaj has a point, tho I’d say its about 1000MB in a GB.",
          timestamp: 414516900000,
        },
        {
          id: "4",
          author: {
            name: "Pero Pipovski",
            // picture: "img/pero.jpg",
            picture: "https://randomuser.me/api/portraits/men/52.jpg",
          },
          text: "Hey guys, here is a nice web for that comoplicated conversion. www.convertunits.com/from/MB/to/GB",
          timestamp: 1626861080278,
        },
      ],
    },
  };
};
