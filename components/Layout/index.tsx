import { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Head from "next/head"

interface LayoutProps{
    children: ReactNode;
    pageTitle: string;
}

export default function Layout(props: LayoutProps) {
const { children, pageTitle } = props;
  return (
    <>
    <Head>
        <title>{`Adis - ${pageTitle}`}</title>
      
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="keywords" content="portfolio, project, website" />
        <meta name="description" content="portfolio by adis"/>
        <meta name="author" content="adis"/>

        <meta property="og:title" content="Let's go, make your apps..!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adisetiawan.vercel.app/" />
        <meta property="og:image" content="https://adisetiawan.vercel.app/favicon.ico" />
        <meta property="og:image:secure_url" content="https://adisetiawan.vercel.app/favicon.ico" />
        <meta property="og:image:type" content="image/png" />
        
        <link rel="icon" href="/favicon.ico" />
    </Head>
        <Header/>
            <div>{children}</div>
        <Footer/>
    </>
  )
}
