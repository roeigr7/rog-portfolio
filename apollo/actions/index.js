import { GET_SKILLS, UPDATE_SKILLS } from '../queries/index';
import { useQuery, useMutation } from '@apollo/client';
export const useGetSkills = () => useQuery(GET_SKILLS);
export const useUpdateSkills = () => useMutation(UPDATE_SKILLS);
