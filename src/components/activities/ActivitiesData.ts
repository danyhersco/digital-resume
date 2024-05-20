export { };

interface ActivitiesData {
  activity: string;
  startDate: string;
  endDate: string;
  description: string;
  gallery: string[];
}

const activitiesData: ActivitiesData[] = [
  {
    activity: "Piano",
    startDate: "09/2007",
    endDate: "Present",
    description: "Growing up in a musical family, I started playing the piano at age 6. For nine " +
    "years in Belgium, I took weekly classical music lessons and practiced daily for hours. My " +
    "teacher, Hagit, is well-known in the classical music scene and runs Musica Mundi, one of " +
    "the world's top music schools. I performed at their private concerts twice a year.\n\n" +
    "Today, I still play regularly and have branched out into other genres. Currently, I'm " +
    "learning to improvise in jazz.",
    gallery: ["link 1", "link 2", "link 3"],
  },
  {
    activity: "Graphic Design",
    startDate: "01/2014",
    endDate: "Present",
    description: "Lorem Ipsum",
    gallery: ["link 1", "link 2", "link 3"],
  },
  {
    activity: "Guitar",
    startDate: "09/2016",
    endDate: "Present",
    description: "Lorem Ipsum",
    gallery: ["link 1", "link 2", "link 3"],
  },
  {
    activity: "Music Production",
    startDate: "09/2022",
    endDate: "Present",
    description: "Lorem Ipsum",
    gallery: ["link 1", "link 2", "link 3"],
  },
  {
    activity: "Radio Host",
    startDate: "09/2017",
    endDate: "05/2018",
    description: "Lorem Ipsum",
    gallery: ["link 1", "link 2", "link 3"],
  },
]

export default activitiesData;
