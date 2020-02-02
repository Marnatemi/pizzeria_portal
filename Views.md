# Dashboard

- "/"
  - statystyki dzisiejszych zamówień( zdalne i lokalne )
  - lista rezerwacji i eventów zaplanowanych na dziś

# Logowanie

- "/login"
  - pola na login i hasło
  - guzik do zalogowania (link do dashboard)

# Widok dostępności stolików

- "/tables"
  - wybór daty i godziny
  - tabela z listą rezerwacji oraz wydarzeń
    - każda kolumna to 1 stolik
    - każdy wiersz to 30 minut
    - ma przypominać widok tygodnia w kalendarzu google, gdzie w kolumnach zamiast dni są różne stoliki
    - po liknięciu rezerwacji lub eventu przechodzimy na podstronę szczegółów
- "/tables/booking/:id"
  - zawiera wszystkie informacje dtyczące rezerwacji
  - umożliwia edycję i zapisanie zmian
- "/tables/booking/new"
  - analogicznie do powyższej, bez początkowych informacji
- "/tables/events/:id
  - analogicznie do powyższej, dla eventów
- "/tables/events/new"
  - analogicznie do powyższej, dla eventów ,bez początkowych informacji


# Widok kelnera

- "/waiter"
  - tabela
    - w wierszach stoliki
    - w kolumnach różne informacje (status, czas od ostatniej zmiany)
    - w ostatniej kolumnie dostępne akcje dla danego stolika
- "/waiter/order/new"
  - numer stolika (edytowalny)
  - menu produktów
  - opcje wybranego prduktu
  - zamówienie ( zamówione produkty z opcjami i ceną)
  - kwota zamówienia
- "/waiter/order/:id"
  - jak powyższa

# Widok kuchni

- "/kitchen"
  -wyświetla listę zamówień w kolejności złożenia
  - lista zawiera :
    - numer stolika (lub zamówienia zdalnego)
    - pełne informacje dot. zamówionych dań
  - na liście musi być możliwość oznaczenia zamówienia jako zrealizowane


