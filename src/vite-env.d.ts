/// <reference types="vite/client" />

interface ImportMetaEnv {
    // Declare types for your environment variables
    readonly VITE_EMAILJS_SERVICE_ID: string;
    readonly VITE_EMAILJS_TEMPLATE_ID: string;
    readonly VITE_EMAILJS_USER_ID: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }