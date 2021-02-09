import { gql } from '@apollo/client';
const GET_VOTES = gql;
export const GET_SKILLS = gql`
  query Skills {
    skills {
      _id
      type
      name
      votes
    }
  }
`;

export const UPDATE_SKILLS = gql`
  mutation UpdateSkill($id: ID, $votes: Int) {
    updateSkillVotes(id: $id, input: { votes: $votes }) {
      _id
      name
      type
      votes
    }
  }
`;
