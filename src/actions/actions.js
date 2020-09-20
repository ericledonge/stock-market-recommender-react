import { getInitialParameters } from '../api/api';

const getParameters = async (setAlgorithmVersion) => {
  try {
    const response = getInitialParameters();
    setAlgorithmVersion(response.initialAlgorithmVersion);
  } catch (e) {

  }
};

export default { getParameters };
