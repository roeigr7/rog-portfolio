import axios from 'axios';

export const fetchSkillsGql = () => {
  const query = `query Skills{
    skills{
      _id type name votes
    }
    }`;
  return axios
    .post('http://localhost:3000/graphql', { query })
    .then(({ data: graph }) => graph.data)
    .then((data) => data.skills);
};

export const updateVotesGql = (id, votes) => {
  const query = `
  mutation UpdateSkill{
    updateSkillVotes(id:"${id}",input:{
      votes:${votes + 1}
    }){
      _id
      name
      type
      votes
    }
  }`;
  return axios
    .post('http://localhost:3000/graphql', { query })
    .then(({ data: graph }) => graph.data)
    .then((data) => data.updateSkillVotes);
};
