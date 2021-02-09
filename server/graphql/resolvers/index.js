const Skill = require('../../database/models/skill');

const data = {
  skills: [
    {
      type: 'frontend',
      name: 'react',
      votes: 4,
    },
    {
      type: 'backend',
      name: 'mongo',
      votes: 5,
    },
    {
      type: 'styling',
      name: 'photoshop',
      votes: 9,
    },
    {
      type: 'styling',
      name: 'phopea',
      votes: 9,
    },
    {
      type: 'backend',
      name: 'express',
      votes: 9,
    },
    {
      type: 'frontend',
      name: 'javscript',
      votes: 9,
    },
    {
      type: 'frontend',
      name: 'redux',
      votes: 7,
    },
    {
      type: 'styling',
      name: 'ai',
      votes: 1,
    },
    {
      type: 'backend',
      name: 'nodejs',
      votes: 8,
    },
  ],
};

exports.skillQueries = {
  skills: () => {
    return Skill.find({});
  },
};

exports.skillMutations = {
  updateSkillVotes: async (root, { id, input }) => {
    const updatedSkill = await Skill.findOneAndUpdate({ _id: id }, input, {
      new: true,
    });
    return updatedSkill;
  },
};
