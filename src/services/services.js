import { mockInitialParameters, mockRecommendationApi } from '../api/api';

export const getRecommendation = async (stockSymbol, numberOfDays, socialMediaTypes, algorithmVersion) => {
  return await mockRecommendationApi(stockSymbol, numberOfDays, socialMediaTypes, algorithmVersion);
};

export const getInitialParameters = async () => {
  return await mockInitialParameters();
};
