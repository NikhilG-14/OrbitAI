import { cert, initializeApp } from "firebase-admin"

import serviceAccount from "../serviceAccountKey.json" with {type: "json"};

export const app=initializeApplizeApp({
  credential: certt(serviceAccount)
});
