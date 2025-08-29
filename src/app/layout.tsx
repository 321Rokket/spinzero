import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baosh || Responsive HTML 5 Template",
  description: "Baosh HTML 5 Template",
  icons: {
    icon: [
      { url: "/assets/images/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/images/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/assets/images/favicons/apple-touch-icon.png",
  },
  manifest: "/assets/images/favicons/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100;0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900;0,9..40,1000;1,9..40,100;1,9..40,200;1,9..40,300;1,9..40,400;1,9..40,500;1,9..40,600;1,9..40,700;1,9..40,800;1,9..40,900;1,9..40,1000&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/vendors/animate/animate.min.css" />
        <link rel="stylesheet" href="/assets/vendors/animate/custom-animate.css" />
        <link rel="stylesheet" href="/assets/vendors/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/vendors/bootstrap-select/css/bootstrap-select.min.css" />
        <link rel="stylesheet" href="/assets/vendors/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css" />
        <link rel="stylesheet" href="/assets/vendors/jquery-ui/jquery-ui.css" />
        <link rel="stylesheet" href="/assets/vendors/nice-select/nice-select.css" />
        <link rel="stylesheet" href="/assets/vendors/odometer/odometer.min.css" />
        <link rel="stylesheet" href="/assets/vendors/owl-carousel/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/vendors/owl-carousel/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/assets/vendors/swiper/swiper.min.css" />
        <link rel="stylesheet" href="/assets/vendors/thm-icons/style.css" />
        <link rel="stylesheet" href="/assets/vendors/reey-font/stylesheet.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
