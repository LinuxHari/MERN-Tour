const envConfig = {
    API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
    FIREBASE_KEY: import.meta.env.VITE_FIREBASE_KEY,
    FIREBASE_AUTHDOMAIN: import.meta.env.VITE_FIREBASE_AUTHDO,
    FIREBASE_PROJECT_ID: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGE_SENDER_ID: import.meta.env.VITE_FIREBASE_MESSAGE_SENDER_ID,
    FIREBASE_APP_ID: import.meta.env.VITE_FIREBASE_APP_ID,
    STRIPE_PK: import.meta.env.VITE_STRIPE_PK
  } as const;
  
  export default envConfig;