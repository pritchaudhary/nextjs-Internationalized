import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import * as locales from "../content/locale";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { locale, defaultLocale, pathname } = router;
  const localeCopy = locales[locale];
  const messages = localeCopy[pathname];
  console.log("pathname", pathname);

  return (
    <IntlProvider locale={locale} defaultLocale={defaultLocale} messages={messages}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
