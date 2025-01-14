import { Helmet } from "react-helmet-async";

const SecurityHeaders = () => {
  return (
    <Helmet>
      {/* Content Security Policy (CSP) */}
      <meta
        http-equiv="Content-Security-Policy"
        content="
          default-src 'self'; 
          style-src 'self' 'unsafe-inline'; 
          script-src 'self'; 
          font-src 'self'; 
          connect-src 'self'; 
          frame-ancestors 'none';"
      />

      {/* Prevent MIME type sniffing */}
      <meta name="X-Content-Type-Options" content="nosniff" />

      {/* Prevent Clickjacking */}
      <meta name="X-Frame-Options" content="DENY" />

      {/* Enable Cross-Site Scripting (XSS) Protection */}
      <meta name="X-XSS-Protection" content="1; mode=block" />

      {/* Referrer Policy */}
      <meta name="referrer" content="no-referrer" />

      {/* Permissions Policy */}
      <meta
        http-equiv="Permissions-Policy"
        content="geolocation=(self), microphone=(), camera=(), autoplay=()"
      />

      {/* HTTP Strict Transport Security (HSTS) */}
      <meta
        name="Strict-Transport-Security"
        content="max-age=31536000; includeSubDomains; preload"
      />
    </Helmet>
  );
};

export default SecurityHeaders;
