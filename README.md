# Transactions Test

> You can find some unused files, components or libraries beacause I used one of my own project template

# **Table of Contents**

- [Technologies & Libraries](#tech)
- [Assumptions](#assumptions)
- [Files involved](#files)


---

<a name="tech"></a>
# Technologies & Libraries 

- Typescript
- React
- Redux
- Lodash
- PrimeReact

---

<a name="assumptions"></a>
# Assumptions

- In this solution I don't handle data pagination
- When `/eur-rates` returns `null` I don't show `Eur equiv` value


---

<a name="files"></a>
# Files involved

- `HomeContainer` & `HomeComponent`
- `useTransaction.ts`: hook created to handle transactions data
- `TransactionUtil.tsx`: file used to implements functions usefull to data manipulations
- interface > custom > `Transactions.ts`: Data models
- store >
  - action > `transactions.ts`
  - api > `TransactionsApi.ts`
  - reducer > `transactions.ts`
  - type > `transactions.ts`
