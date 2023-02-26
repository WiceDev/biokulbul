const { schools } = require("./filtered.json");

const arr = [];
console.log(
  Math.max(
    ...schools.map((school) => {
      return school.name.length;
    })
  )
);
