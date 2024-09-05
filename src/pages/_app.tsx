import "../styles/global.css";
import type { AppProps } from 'next/app';
import NavigationBar from "@/components/navigationbar";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <NavigationBar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;