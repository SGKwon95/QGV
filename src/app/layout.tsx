import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KGV - 영화 예매 & 상영 정보",
  description: "CGV를 벤치마킹한 한국형 영화 예매 플랫폼. 상영 중인 영화, 극장 정보, 스크린 시간표를 한 곳에서.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <body className="min-h-full flex flex-col bg-gray-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
