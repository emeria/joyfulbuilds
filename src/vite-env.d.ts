/// <reference types="vite/client" />

interface ImportMetaEnv {
    // Declare types for your environment variables
    readonly EMAILJS_SERVICE_ID: string;
    readonly EMAILJS_TEMPLATE_ID: string;
    readonly EMAILJS_USER_ID: string;
    // You can continue to add more variables here
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }