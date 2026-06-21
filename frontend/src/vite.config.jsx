import React from "react";
import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import PageLoader from "../../components/Common/PageLoader";

export default defineConfig({
  plugins: [react()],
});