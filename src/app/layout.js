//全局布局
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        {/* navigation bar */}
        <nav style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
          {/* <a href="/" style={{ marginRight: '15px' }}>搜索比赛</a> */}
          <a href="/upload">上传数据</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
