import bugModel from "../Models/bugModel";

export function retriveBugs() {
  let data = [];

  data.push(
    new bugModel({
      _id: 2358618904,
      name: "Crash on Load",
      details: "Crashes after 3 seconds",
      steps: "Open application and it will crash",
      version: "V2.0",
      assigned: "X",
      creator: "X",
      priority: 1,
      time: "23:52",
    })
  );

  data.push(
    new bugModel({
      _id: 2358618904,
      name: "Wont Load",
      details: "Crashes after 3 seconds",
      steps: "Open application and it will crash",
      version: "V2.0",
      assigned: "X",
      creator: "X",
      priority: 3,
      time: "23:52",
    })
  );

  let sorted = data.sort((a, b) => {
    return a.priority - b.priority;
  });

  return sorted;
}
