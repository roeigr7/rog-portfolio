const { skills } = require('./data');

const Skill = require('../database/models/skill');

class FetchInitialData {
  async clean() {
    await Skill.deleteMany({});
  }

  async addData() {
    await Skill.create(skills);
  }
  async populate() {
    await this.clean();
    await this.addData();
  }
}

module.exports = new FetchInitialData();
