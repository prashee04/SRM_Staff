import React, { useState } from "react";
import AchievementScoreForm from "./AchievementScoreForm";
import OnlineCourseForm from "./OnlineCourseForm";
import FDPForm from "./FDPForm";
import CounsellingForm from "./CounsellingForm";
import OnlineFeedbackForm from "./OnlineFeedbackForm";
import PerceptionForm from "./PerceptionForm";
import ResearchPaperForm from "./ResearchPaperForm";
import PaperPresentationForm from "./PaperPresentationForm";
import ResearchProjectForm from "./ResearchProjectForm";
import ResearchProposalForm from "./ResearchProposalForm";
import ConsultancyForm from "./ConsultancyForm";
import InnovativeForm from "./InnovativeForm";
import ContentDevelopmentForm from "./ContentDevelopmentForm";
import "./AppraisalForm.css";

function AppraisalForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState({});
  const employeeId = "your_employee_id"; // Replace with the actual employee ID

  const handleNextStep = (formKey, score) => {
    setScores((prevScores) => ({
      ...prevScores,
      [formKey]: score,
    }));
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <AchievementScoreForm
            onNextStep={(score) => handleNextStep("achievementScore", score)}
          />
        );
      case 1:
        return (
          <OnlineCourseForm
            onNextStep={(score) => handleNextStep("onlineCourse", score)}
          />
        );
      case 2:
        return <FDPForm onNextStep={(score) => handleNextStep("fdp", score)} />;
      case 3:
        return (
          <CounsellingForm
            onNextStep={(score) => handleNextStep("counselling", score)}
          />
        );
      case 4:
        return (
          <OnlineFeedbackForm
            onNextStep={(score) => handleNextStep("onlineFeedback", score)}
          />
        );
      case 5:
        return (
          <PerceptionForm
            onNextStep={(score) => handleNextStep("perception", score)}
          />
        );
      case 6:
        return (
          <ResearchPaperForm
            onNextStep={(score) => handleNextStep("researchPaper", score)}
          />
        );
      case 7:
        return (
          <PaperPresentationForm
            onNextStep={(score) => handleNextStep("paperPresentation", score)}
          />
        );
      case 8:
        return (
          <ResearchProjectForm
            onNextStep={(score) => handleNextStep("researchProject", score)}
          />
        );
      case 9:
        return (
          <ResearchProposalForm
            onNextStep={(score) => handleNextStep("researchProposal", score)}
          />
        );
      case 10:
        return (
          <ConsultancyForm
            onNextStep={(score) => handleNextStep("consultancy", score)}
          />
        );
      case 11:
        return (
          <InnovativeForm
            onNextStep={(score) => handleNextStep("innovative", score)}
          />
        );
      case 12:
        return (
          <ContentDevelopmentForm
            onNextStep={(score) => handleNextStep("contentDevelopment", score)}
          />
        );
      default:
        return null;
    }
  };

  const calculateTotalScore = () => {
    const allScores = Object.values(scores);
    return allScores.reduce((total, score) => total + score, 0);
  };

  return (
    <div className="appraisal-form">
      {renderStep()}

      {currentStep === 13 && (
        <div className="total-score-container">
          <h2 className="total-score-heading">Total Scores</h2>

          <div className="individual-scores">
            {Object.keys(scores).map((formKey) => (
              <p className="score-item" key={formKey}>
                {formKey}:{" "}
                <span className="score-value">{scores[formKey]}</span>
              </p>
            ))}
          </div>

          <p className="total-score">
            Total: <span className="total-value">{calculateTotalScore()}</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default AppraisalForm;
