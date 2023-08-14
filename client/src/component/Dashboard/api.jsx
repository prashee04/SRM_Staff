
import axios from 'axios';

const instance = axios.create({
  baseURL: ' http://127.0.0.1:5000', // Base URL for all API endpoints
  timeout: 5000, // Optional: Request timeout in milliseconds
});

// Define API endpoints
export const achievementScoreEndpoint = '/achievement_score';
export const onlineCourseEndpoint = '/online_course';
export const fdpEndpoint = '/fdp';
export const counsellingEndpoint = '/counselling'
export const onlineFeedbackEndpoint = '/online_feedback'
export const perceptionEndpoint = '/precption'
export const researchPaperEndpoint = '/research_paper'
export const paperPresentationEndpoint = '/paper_presentaion'
export const researchProjectEndpoint = '/research_project'
export const researchProposalEndpoint = '/research_proposal'
export const consultancyEndpoint = '/consultancy'
export const innovativeEndpoint = '/inovative'
export const contentDevelopmentEndpoint  = '/content_development'

// Add other function endpoints as needed

export default instance;

