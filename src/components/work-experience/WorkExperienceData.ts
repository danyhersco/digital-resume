export { };

interface WorkExperienceData {
  title: string;
  companyName: string;
  startDate: string;
  endDate: string;
  description: string;
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
  },
  Initiator: {
    title: "Product Manager & Start-up Guide",
    companyName: "Initiator VC",
    startDate: "12/2020",
    endDate: "04/2023",
    description:
      "Initiator VC"
  },
  Koble: {
    title: "Data Science Intern",
    companyName: "Koble",
    startDate: "02/2023",
    endDate: "04/2023",
    description:
      "Koble"
  },
  Makor: {
    title: "Investment Brokerage Intern",
    companyName: "Makor Group",
    startDate: "11/2020",
    endDate: "11/2020",
    description:
      "Makor",
  },
  Rouvenat: {
    title: "Brand Strategy Intern",
    companyName: "Rouvenat",
    startDate: "07/2021",
    endDate: "09/2021",
    description:
      "Rouvenat",
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
  },
};

export default workExperienceDataMapping;
