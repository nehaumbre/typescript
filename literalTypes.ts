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
  | { statusCode: "200"; message: "OK" }
  | { statusCode: "201"; message: "created" }
  | { statusCode: "404"; message: "Not found" }
  | { statusCode: "500"; message: "server error" }
  // | { statusCode: "401"; message: "unauthorized" };// uncomment this to check if never execution is working


// const response = (res: httpResponse) =>
//   res.statusCode === "200" && res.message === "OK"
//     ? console.log("this request has been successful")
//     : res.statusCode === "201" && res.message === "created"
//     ? console.log("resource successfully created")
//     : res.statusCode === "404" && res.message === "Not found"
//     ? console.log("no such resource available")
//     : console.log("server error")


//*better code
function safeResponse(res : httpResponse) {
switch (res.statusCode) {
    case "200":
    case "201":
    case "404":
    case "500":
      console.log(res.message);
      break;
    
    default: // this will execute if we add a new case of http response but not handle it in the switch case
      const nevercase: never = res;
      return nevercase
}
}

// response({statusCode: "200", message: "OK"})
safeResponse({ statusCode: "500", message: "server error" });
safeResponse({statusCode:"201", message: "created"})