import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import Config from "react-native-config";

const serviceAccount = {
    apiKey: Config.apiKey,
    authDomain: Config.authDomain,
    projectId: Config.projectId,
    storageBucket: Config.storageBucket,
    messagingSenderId: Config.messagingSenderId,
    appId: Config.appId
};

const app = initializeApp(serviceAccount);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { app, auth };