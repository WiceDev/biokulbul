const { schools } = require("../../filtered.json");

export default (req, res) => {
  let data = schools.filter((school) => school.id === req.query.school)[0];

  res.status(200).json(data);
};
