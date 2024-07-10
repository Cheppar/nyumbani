import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Domus",
  description: "Find your next home",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider> 
    <html lang="en">
      <body className={inter.className}>
        
        <Provider>{children}
        <SpeedInsights />
        <Analytics/>
        </Provider>
      </body> 
    </html>
    </ClerkProvider>
  );
}
