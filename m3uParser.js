const fs = require("fs");

function print(a) {
  console.log(a);
}

function parse() {
  var models = foxModels();
  models = withCbs(models);
  print(models);
  fs.writeFileSync("nflteams.json", JSON.stringify(models));
}

function foxModels() {
  const file = fs.readFileSync("fox.txt", { encoding: "utf8" }).split("\n");
  var isTitle = true;
  var json = [];
  for (let step = 0; step < file.length; step++) {
    l = file[step];
    line = l.replace("\r", "");
    const t = line.split(",")[1];
    const u = file[step + 1];
    if (isTitle) {
      obj = {
        team: t,
        fox: u.replace("\r", ""),
        cbs: "",
      };
      json.push(obj);
    }
    isTitle = !isTitle;
  }
  return json;
}

function withCbs(models) {
  const file = fs.readFileSync("cbs.txt", { encoding: "utf8" }).split("\n");
  var m = models;
  var newModels = [];
  var isTitle = true;
  for (let step = 0; step < file.length; step++) {
    l = file[step];
    line = l.replace("\r", "");
    const t = line.split(",")[1];
    const u = file[step + 1];
    if (isTitle) {
      obj = {
        team: t,
        cbs: u,
      };
      newModels.push(obj);
    }
    isTitle = !isTitle;
  }

  for (let step = 0; step < newModels.length; step++) {
    const model = newModels[step];
    const url = model.cbs;
    const i = m.findIndex((obj) => obj.team === model.team);
    m[i].cbs = url.replace("\r", "");
  }

  return m;
}

function checkObj(obj) {
  return age > 18;
}

parse();
