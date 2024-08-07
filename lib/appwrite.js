import { ID, Account, Client } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.jsm.reactNativeAora",
  projectId: "66b31e300031529eff61",
  databaseId: "66b3208f000ef5dae7bd",
  userCollectionId: "66b320f500047c97fd94",
  videoCollectionId: "66b3214e000883053a66",
  storageId: "66b3231000280cfa7fd7",
};

const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);

export const createUser = () => {
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
