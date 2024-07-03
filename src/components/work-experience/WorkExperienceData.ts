export { };

interface WorkExperienceData {
  title: string;
  companyName: string;
  startDate: string;
  endDate: string;
  description: string;
  link: string;
}

const workExperienceDataMapping: Record<string, WorkExperienceData> = {
  Fly: {
    title: "Co-Founder",
    companyName: "Fly Store Clothing Brand",
    startDate: "05/2018",
    endDate: "06/2019",
    description:
      "Fly is a clothing brand that my friend and I started during our final year of high " +
      "school. As we were heading into Business Management studies the next year, we wanted to " +
      "get a taste of entrepreneurship and understand the challenges first-hand. We aimed our " +
      "casual, brightly coloured clothes at young people and used a drop-shipping model to scale " +
      "globally without needing to manage stock.\n\nI took on marketing and communications, a " +
      "tough job due to stiff competition and our brand being new. I also handled all the " +
      "creative aspects, designing our logo, social media content, website, and apparel. In the " +
      "span of one year, we sold over 1000 products over 15 countries.",
    link: "https://www.facebook.com/flystorebe/",
  },
  Initiator: {
    title: "Product Manager & Start-up Guide",
    companyName: "Initiator VC",
    startDate: "12/2020",
    endDate: "04/2023",
    description:
      "Initiator VC is a student startup incubator I started with classmates. We run venture " +
      "creation programs for students from top universities, helping them find co-founders, gain " +
      "mentorship from industry experts like investors and successful entrepreneurs, and " +
      "potentially receive initial funding from the $1.5 million we raised.\n\nOver three years, " +
      "my role focused on marketing and communications to increase program applications. I led a " +
      "marketing team of six students for a year, and our effective strategies led to over 1,000 " +
      "applications for three programs. Additionally, I supported some of our startups " +
      "throughout the program, ensuring they always had the necessary resources. Finally, being " +
      "a freelance graphic designer, I also designed the website and all social media content.",
    link: "https://initiator.vc/",
  },
  Koble: {
    title: "Data Science Intern",
    companyName: "Koble",
    startDate: "02/2023",
    endDate: "04/2023",
    description:
      "Koble is a London-based startup developing an AI algorithm to predict startup success. " +
      "This quantitative approach to venture capital helps VC firms and angel investors make " +
      "smarter investment decisions.\n\nDuring my two-month data science internship, I developed " +
      "an algorithm to optimize our VC portfolio size based on over 10 features, including " +
      "ticket sizing and follow-on funding allocations. I also improved our main database by " +
      "adding new data points from sources like Pitchbook and Crunchbase, developed strategies " +
      "for missing data imputation, and built a neural network pipeline in Python to predict " +
      "startup success using our pre-processed database.",
    link: "https://www.koble.ai/",
  },
  Rouvenat: {
    title: "Brand Strategy Intern",
    companyName: "Rouvenat",
    startDate: "07/2021",
    endDate: "09/2021",
    description:
      "Rouvenat is a historic French jewellery house from the Second Empire, now part of " +
      "Luximpact Holdings, which focuses on eco-friendly jewellery. Rouvenat uses only recycled " +
      "gold and vintage precious stones, ensuring that nothing new is mined. Essentially, " +
      "Rouvenat brings forgotten treasures back to life.\n\nDuring my two-month internship, " +
      "before the brand relaunched, I helped CEO Marie with tasks related to brand identity, " +
      "digital marketing, and competition analysis. For instance, I visited places like the " +
      "Louvre Museum to draw inspiration from Second Empire artifacts for our upcoming products. " +
      "Additionally, I created product line sheets for Massin, another brand under Luximpact.",
    link: "https://en.rouvenat.com/",
  },
  Xapien: {
    title: "Junior Applied Research Engineer",
    companyName: "Xapien AI",
    startDate: "05/2023",
    endDate: "Present",
    description:
      "Xapien is a London-based tech startup that automates background checks using advanced " +
      "Natural Language Processing (NLP) techniques. Simply enter the subject's name and some " +
      "context, and the system handles the research, delivering a well-organized report.\n\nAt " +
      "Xapien, I develop software and conduct AI research, mainly focusing on Xapien Insight. " +
      "The latter, powered by a Large Language Model (LLM) with Retrieval Augmented Generation, " +
      "is the Generative AI engine of the product. The main feature lets users ask questions " +
      "about their search subjects and receive answers in natural language.",
    link: "https://xapien.com/",
  },
};

export default workExperienceDataMapping;
