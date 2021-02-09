exports.skillTypes = `
  type Skill{
    _id:ID!
    type:String
    name:String
    votes:Int
  }

  input SkillInput{
    type:String
    name:String
    votes:Int
  }

  `;
