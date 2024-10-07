// src/utils/api.js

const RAW_BASE_URL =
  "https://raw.githubusercontent.com/The-Web3-Compass/web3-compass-data-repository/main";
export const fetchStarterPacks = async () => {
  try {
    const response = await fetch(`${RAW_BASE_URL}/starterpacks/index.json`);
    const starterPackFiles = await response.json();
    const starterPacks = await Promise.all(
      starterPackFiles.map(async (file) => {
        const starterPackResponse = await fetch(
          `${RAW_BASE_URL}/starterpacks/${file}`
        );
        return starterPackResponse.json();
      })
    );
    return starterPacks;
  } catch (error) {
    console.error("Error fetching starter packs:", error);
    throw error;
  }
};

export const fetchCommunities = async () => {
  try {
    const response = await fetch(`${RAW_BASE_URL}/communities/index.json`);
    const communityFiles = await response.json();
    const communities = await Promise.all(
      communityFiles.map(async (file) => {
        const communityResponse = await fetch(
          `${RAW_BASE_URL}/communities/${file}`
        );
        return communityResponse.json();
      })
    );
    return communities;
  } catch (error) {
    console.error("Error fetching communities:", error);
    throw error;
  }
};

export const fetchExplainerTopics = async () => {
  try {
    const response = await fetch(`${RAW_BASE_URL}/explainers/index.json`);
    const topicFiles = await response.json();
    const topics = await Promise.all(
      topicFiles.map(async (file) => {
        const htmlResponse = await fetch(
          `${RAW_BASE_URL}/explainers/${file.id}/content.html`
        );

        const htmlContent = await htmlResponse.text();
        return {
          ...file,
          Content: htmlContent,
        };
      })
    );
    return topics;
  } catch (error) {
    console.error("Error fetching explainer topics:", error);
    throw error;
  }
};

// Update src/utils/api.js
export const generateLearningPlan = async (techStack, role, key) => {
  const prompt = `I know ${techStack.join(
    ", "
  )}. I'm looking to transition into a ${role} role. Please provide a focused, three-week learning plan with latest resources to help me gain essential knowledge and skills. Format the response in markdown with clear headers for each week and bullet points for daily tasks.`;

  const response = await fetch(`https://api.feedtest.xyz/compass/chart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate learning plan");
  }

  const data = await response.json();
  return data.candidates[0].content.parts[0].text;
};
