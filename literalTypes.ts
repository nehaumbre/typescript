//Literal types mean a variable can have exact
// specific values, not just a general type.

//example strings

let status: "online" | "offline";

//numbers
let dice: 1 | 2 | 3 | 4 | 5 | 6;

//object
type Anime =
    | { type: "tv"; episodes: number }
    | { type: "movie"; duration: number };

type TrafficLight =
    | { color: "red" }
    | { color: "green" }
    | { color: "yellow" }

const action = (light: TrafficLight) =>
  light.color === "red"
    ? console.log("🛑 Stop")
    : light.color === "yellow"
    ? console.log("⚠️ Get Ready")
    : console.log("✅ Go");

action({color: "red"})
action({ color: "yellow" });
action({ color: "green" });

type httpResponse =
  | { statusCode: "200", message: "OK" }
  | { statusCode: "201", message: "created" }
  | { statusCode: "404", message: "Not found" }
  | { statusCode: "500", message: "server error" }

const response = (res: httpResponse) =>
  res.statusCode === "200" && res.message === "OK"
    ? console.log("this request has been successful")
    : res.statusCode === "201" && res.message === "created"
    ? console.log("resource successfully created")
    : res.statusCode === "404" && res.message === "Not found"
    ? console.log("no such resource available")
    : console.log("server error")

response({statusCode: "200", message: "OK"})
response({statusCode: "500", message: "server error"})