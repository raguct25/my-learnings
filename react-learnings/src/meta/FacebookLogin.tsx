import React, { useEffect } from "react";

declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: {
      init: (options: {
        appId: string;
        autoLogAppEvents: boolean;
        xfbml: boolean;
        version: string;
      }) => void;
      login: (
        callback: (response: FBLoginResponse) => void,
        options: FBLoginOptions
      ) => void;
    };
  }
}

// Type definitions for Facebook response and options
interface FBLoginResponse {
  authResponse?: {
    code: string;
  };
  status: string;
}

interface FBLoginOptions {
  config_id: string;
  response_type: string;
  override_default_response_type: boolean;
  extras: {
    setup: Record<string, unknown>;
    featureType: string;
    sessionInfoVersion: string;
  };
}

const FacebookLogin: React.FC = () => {
  useEffect(() => {
    // Load the Facebook SDK script dynamically
    const loadFacebookSDK = () => {
      const script = document.createElement("script");
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.src = "https://connect.facebook.net/en_US/sdk.js";
      document.body.appendChild(script);

      script.onload = () => {
        // Initialize the Facebook SDK
        window.fbAsyncInit = () => {
          window.FB.init({
            appId: "1063687218746132", // Replace with your App ID
            autoLogAppEvents: true,
            xfbml: true,
            version: "v21.0", // Replace with the Graph API version you want to use
          });
        };
      };
    };

    loadFacebookSDK();

    // Add event listener for postMessage
    const handleMessageEvent = (event: MessageEvent) => {
      if (
        event.origin !== "https://www.facebook.com" &&
        event.origin !== "https://web.facebook.com"
      )
        return;

      try {
        const data = JSON.parse(event.data);
        if (data.type === "WA_EMBEDDED_SIGNUP") {
          console.log("message event: ", data); // Handle your logic here
        }
      } catch {
        console.log("message event: ", event.data); // Handle your logic here
      }
    };

    window.addEventListener("message", handleMessageEvent);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("message", handleMessageEvent);
    };
  }, []);

  // Callback function for FB login
  const fbLoginCallback = (response: FBLoginResponse) => {
    if (response.authResponse) {
      const code = response.authResponse.code;
      console.log("response: ", code); // Handle successful login
    } else {
      console.log("response: ", response); // Handle login failure
    }
  };

  // Launch the Facebook login for WhatsApp signup
  const launchWhatsAppSignup = () => {
    if (window.FB) {
      window.FB.login(fbLoginCallback, {
        config_id: "585651800605940", // Replace with your configuration ID
        response_type: "code",
        override_default_response_type: true,
        extras: {
          setup: {},
          featureType: "",
          sessionInfoVersion: "3",
        },
      });
    } else {
      console.error("Facebook SDK not loaded yet.");
    }
  };

  return (
    <button
      onClick={launchWhatsAppSignup}
      style={{
        backgroundColor: "#1877f2",
        border: 0,
        borderRadius: "4px",
        color: "#fff",
        cursor: "pointer",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontSize: "16px",
        fontWeight: "bold",
        height: "40px",
        padding: "0 24px",
      }}
    >
      Login with Facebook
    </button>
  );
};

export default FacebookLogin;
