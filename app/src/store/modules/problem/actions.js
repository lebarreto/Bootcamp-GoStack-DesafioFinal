export function addProblemRequest({ data, description }) {
  return {
    type: '@problem/ADD_PROBLEM_REQUEST',
    payload: {
      data,
      description,
    },
  };
}
