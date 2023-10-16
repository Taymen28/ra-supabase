import { supabaseDataProvider } from "ra-supabase-core";
import { supabase } from "./supabase";

const resources = {
  service: ["id", "url", "method", "body", "timeout", "defaultValue"],
  event: ["id", "name", "desc", "created_at"],
  rule: [
    "id",
    "eventId",
    "logicExpress",
    "rules",
    "riskCode",
    "riskDesc",
    "name",
    "desc",
    "created_at"
  ],
  count: [
    "id",
    "name",
    "sumKey",
    "countType",
    "subKey",
    "primaryKey",
    "logicExpress",
    "conditionList"
  ],
  field: ["id", "eventId", "fieldType", "name", "desc", "created_at"],
  variable: [
    "id",
    "eventId",
    "fieldType",
    "calcType",
    "name",
    "desc",
    "created_at",
    "formula",
    "depth"
  ]
};

export const dataProvider = supabaseDataProvider(supabase, resources);
