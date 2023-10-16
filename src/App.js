import * as React from "react";
import { EventList, EventCreate, EventShow, EventEdit } from "./Event";
import { FieldCreate, FieldEdit } from "./Field";
import { VariableCreate, VariableEdit } from "./Variable";
import { RuleCreate, RuleEdit } from "./Rule";
import { CountCreate, CountEdit } from "./Count";
import { ServiceList, ServiceCreate, ServiceEdit } from "./Service";
import { Admin, Resource } from "react-admin";
// import dataProvider from "./dataProvider";
import { dataProvider } from "./supabase/dataProvider";
import polyglotI18nProvider from "ra-i18n-polyglot";
import { ch } from "./ch";
import { ParseAuth, ParseClient } from "ra-data-parse";
const parseConfig = {
  URL: "https://parseapi.back4app.com/",
  JAVASCRIPT_KEY: "fvyOh3u6H05YQLiKIEfUmYr2nMESYVtQVVA4L1BM",
  APP_ID: "2TUcx93K8HajOU9lZNAQK0yE1D6B9oMSTx9XzVAo"
};
const parseDataProvider = ParseClient(parseConfig);
const i18nProvider = polyglotI18nProvider(() => ch, "ch");
const App = () => (
  <Admin dataProvider={dataProvider} i18nProvider={i18nProvider}>
    <Resource
      name="event"
      list={EventList}
      create={EventCreate}
      show={EventShow}
      edit={EventEdit}
    />
    <Resource name="variable" create={VariableCreate} edit={VariableEdit} />
    <Resource name="field" create={FieldCreate} edit={FieldEdit} />
    <Resource name="rule" create={RuleCreate} edit={RuleEdit} />
    <Resource name="count" create={CountCreate} edit={CountEdit} />
    <Resource
      name="service"
      list={ServiceList}
      create={ServiceCreate}
      edit={ServiceEdit}
    />
  </Admin>
);
export default App;
