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
    description: "Having a unique and beautiful visual identity is key for success. It applies " +
    "to lots of things: a company product, one's own personal style, a restaurant architecture, " +
    "etc. In fact, the first contact we have with everything surrounding us is its visual " +
    "appearance, directly making up our primary judgement. I started learning how to use " +
    "Adobe Photoshop when I was 13 years old, all by myself. Since then, I have a long " +
    "experience in creating beautiful visual identities for people around me, including logos, " +
    "websites, or any other type of visual content. I also use Adobe Illustrator, InDesign and XD",
    gallery: ["link 1", "link 2", "link 3"],
  },
  {
    activity: "Guitar",
    startDate: "09/2016",
    endDate: "Present",
    description: "After stopping piano lessons, I started playing the guitar. This marked the " +
    "start of my 'Rock and Roll' era. I entered a music school and was part of it for 3 years, " +
    "during which I took weekly lessons, participated in local concerts twice a year and was " +
    "part of a band. I continue playing regularly to this day and occasionally record myself as " +
    "part of my music production projects. Music is an important part of my life that I will " +
    "never give up.",
    gallery: ["link 1", "link 2", "link 3"],
  },
  {
    activity: "Music Production",
    startDate: "09/2022",
    endDate: "Present",
    description: "Recently, I started making my own music. I invested in a personal studio in my " +
    "bedroom, including a pair of audio monitors, an audio interface, a MIDI keyboard, and a DAW " +
    "(Logic Pro). This activity makes me look at music in a completely different way! I now " +
    "understand the different layers and grooves that make up a song, how to perform sound " +
    "design using a synthesizer, and how to create the “unexpected” feeling that every listener " +
    "is desperately looking for.",
    gallery: ["link 1", "link 2", "link 3"],
  },
  {
    activity: "Radio Host",
    startDate: "09/2017",
    endDate: "05/2018",
    description: "Between 2017 and 2018, I served as the co-host for a radio show in Brussels " +
    "(Radio Judaïca 90.2 FM) every Wednesday evening for an hour. We represented the union of " +
    "the 5 Jewish youth movements in Belgium, gathering more than a thousand young scouts. " +
    "Receiving leaders from each movement every week, we gave recent news of what is happening " +
    "in each movement, played entertaining games for our audience, and answered callers' " +
    "questions on air. This experience was truly enriching and significantly improved my " +
    "communication abilities.",
    gallery: ["link 1", "link 2", "link 3"],
  },
]

export default activitiesData;
