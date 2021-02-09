import Skill from './SkillItem';
const SkillsList = ({ skills, updateVotes }) => {
  return (
    <>
      {skills &&
        skills.map((el, i) => (
          <Skill
            updateVotes={updateVotes}
            key={i}
            votes={el.votes}
            name={el.name}
            id={el._id}
          />
        ))}
    </>
  );
};

export default SkillsList;
