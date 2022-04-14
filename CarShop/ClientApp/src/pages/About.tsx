import { Layout } from "../layout/Layout";

export const AboutPage = () => {
  return (
    <Layout>
      <h1>O aplikacji CarShop</h1>
      <p>
        Aplikacja CarShop jest to strona internetowa skelpu z samochodami, która
        składa się z części serwerowej (back-end) oraz klienta(front-end)
      </p>
      <p>
        Po stronie klienta jest to aplikacja typu SPA (Single Page Application).
        Wybór ten był podyktowany dwoma powodami:
        <ul>
          <li>
            aplikacje typu SPA są coraz bardziej popularne, np. Gmail czy
            Facebook to właśnie aplikacje SPA
          </li>
          <li>
            cały front-end aplikacji to statyczne pliki które można łatwo
            umieścić na zwykłym serwerze html lub otworzyć stronę bezpośrednio z
            pliku index.html
          </li>
        </ul>
        Na potrzeby aplikacji wybrano bibliotekę React. Jego najważniejsze cechy
        to:
        <ul>
          <li>Korzystanie z szablonów opartych o HTML</li>
          <li>
            Skalowalność - umozliwia tworzenie zarówno małych modułów jak i
            pełnowymiarowych aplikacji typu SPA
          </li>
          <li>
            Niski próg wejścia - aby zacząć pracę wystarczy podstawowa znajomość
            HTML, CS i Javascript
          </li>
        </ul>
        Layout projektu ma być prosty w obsłudze, ale jednocześnie ma
        udostępniać mozliwość wyświetlania aplikacji na wszelkich urządzeniach.
        <br />
        Do zaprojektowania Layoutu użyto biblioteki Bootstrap, która pozwalana
        na łatwe dostosowanie strony do różnych rozmiarów ekranu.
      </p>
      <p>
        Cześć serwerowa została wykonana z ASP.Net core wraz z bazą danych SQL
        Server. <br />W aplikacji znajduje się też moduł Administratora do
        którego można się zalogować testowym użytkownikiem (niestety nie
        starczyło czasu na zrobienie poprawnej rejestracji)
        <br />
        Nazwa użytkownika: test@user.com
        <br />
        Hasło: Your_Password123!
      </p>
      <p>
        Umożliwia on dodawanie nowych ofert pojazdów. Do logowania użytkownika
        wykorzystano technologie cookies.
      </p>
      <p>
        Celem przedmiotu jest poznanie technologii, które umozliwiają tworzenie
        zaawansowanych aplikacji internetowych. Technologia ta zmienia sie
        relatywnie szybko, dlatego zdecydowano się na wykorzystanie najnowszych
        technologii.
        <ul>
          <li>React - w wersji 18</li>
          <li>Bootstrap - w wersji 5</li>
          <li>ASP.NET Core 3.1</li>
        </ul>
      </p>
    </Layout>
  );
};
