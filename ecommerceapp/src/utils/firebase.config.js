import firebase from 'firebase/compat/app'
import "firebase/compat/auth"

const app = firebase.initializeApp ({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_API,
    storageBucket: process.env.REACT_APP_STOCKAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
});


export const auth = app.auth();
export default app;