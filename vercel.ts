import type { VercelConfig } from "@vercel/config";
import { deploymentEnv } from "@vercel/config";

const config: VercelConfig = {
  rewrites: [
    {
      source: "/api/users/:path*",
      destination: `${deploymentEnv("BACKEND_DOMAIN")}/users/:path*`,
    },
    {
      source: "/api/connections/:path*",
      destination: `${deploymentEnv("BACKEND_DOMAIN")}:8080/connections/:path*`,
    },
  ],
};

export default config;
