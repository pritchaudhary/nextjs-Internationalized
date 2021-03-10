import { useRouter } from "next/router";
import { useIntl } from "react-intl";

export default function IndexPage(props) {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  const onChangeLanguage = (e) => {
    router.push("/", "/", { locale: e.target.value });
  };

  return (
    <div>
      <h1>{f("hello")}</h1>
      <p>{f("welcomeMessage")}</p>
      <br />
      <p>Current locale: {locale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(locales)}</p>
      <span>
        <b> Select language :- </b>
        <select onChange={onChangeLanguage} value={locale}>
          <option value='en'>English</option>
          <option value='fr'>French</option>
          <option value='es'>Spanish</option>
        </select>
      </span>
    </div>
  );
}
