import React, { useState } from "react";
import RoleSelector from "../components/Chat/RoleSelector";
import TechStackInput from "../components/Chat/TechStackInput";
import Button from "../components/common/Button";
import LearningPlanDisplay from "../components/Chat/LearningPlanDisplay";
import { generateLearningPlan } from "../utils/api";
import DisplayModal from "../components/common/DisplayModal";

const Chat = () => {
  const [techStack, setTechStack] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [learningPlan, setLearningPlan] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // New state for error message
  const key = import.meta.env.VITE_API_KEY;

  const handleGeneratePlan = async () => {
    // Check if techStack is empty
    if (techStack.length === 0) {
      setErrorMessage(
        "You need to add at least one technology or skill before generating the learning plan."
      );
      return; // Exit the function early if no techStack is provided
    }

    // Clear error message if techStack is valid
    setErrorMessage("");
    setIsLoading(true);
    setIsModalOpen(true);
    console.log(techStack);
    try {
      const plan = await generateLearningPlan(techStack, selectedRole, key);
      setLearningPlan(plan);
    } catch (error) {
      console.error("Error generating learning plan:", error);
      setLearningPlan(
        "An error occurred while generating the learning plan. Please try again."
      );
    }
    setIsLoading(false);
  };

  return (
    <div className='container mx-auto px-4 py-8 bg-retro-white'>
      <h1 className='text-3xl md:text-5xl font-bold mb-8 text-center font-roboto'>
        Chart Your Web3 Learning Path{" "}
        <sup>
          <i>beta</i>
        </sup>
      </h1>

      <div className='w-full max-w-full md:max-w-3xl mx-auto bg-retro-white border-3 border-retro-black p-4 md:p-8 shadow-retro-lg'>
        <div className='mb-6'>
          <span className='text-xl md:text-2xl mr-2 font-bold'>I know</span>
          <TechStackInput techStack={techStack} setTechStack={setTechStack} />
          {errorMessage && (
            <p className='text-red-500 mt-2'>{errorMessage}</p> // Display the error message
          )}
        </div>
        <div className='mb-6'>
          <span className='text-xl md:text-2xl mr-2 font-bold'>
            I want to become
          </span>
          <RoleSelector
            selectedRole={selectedRole}
            setSelectedRole={setSelectedRole}
          />
        </div>
        <Button
          onClick={handleGeneratePlan}
          className='mt-4 w-full text-lg md:text-xl py-2 md:py-3 hover:bg-retro-accent border-4 border-black'
        >
          Chart a Map
        </Button>
      </div>
      {/* Note below the entire div */}
      <p className='text-sm text-gray-500 mt-4 text-center'>
        Note: This feature is still in beta and undergoing fine-tuning. So,
        there might be a few hiccups along the way !
      </p>

      <DisplayModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {isLoading ? (
          <div className='p-8 text-center text-xl md:text-2xl font-bold'>
            Loading your personalized plan...
          </div>
        ) : (
          <LearningPlanDisplay
            learningPlan={learningPlan}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </DisplayModal>
    </div>
  );
};

export default Chat;
