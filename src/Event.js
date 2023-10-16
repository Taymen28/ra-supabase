import * as React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
  SelectInput,
  TabbedShowLayout,
  Tab,
  Edit,
  EditButton,
  ReferenceManyField,
  Show,
  SimpleShowLayout,
  List,
  Datagrid,
  TextField,
  SelectField,
  required,
  ShowButton
} from "react-admin";
import AddFieldButton from "./AddFieldButton";
import AddRuleButton from "./AddRuleButton";
import AddVariableButton from "./AddVariableButton";
import AddCountButton from "./AddCountButton";
export const EventCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={[required()]} />
      <TextInput source="desc" validate={[required()]} />
    </SimpleForm>
  </Create>
);

export const EventList = () => (
  <List>
    <Datagrid bulkActionButtons={false}>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="desc" />
      <TextField source="created_at" />
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
);

export const EventShow = () => (
  <Show>
    <TabbedShowLayout>
      <Tab label="基础信息">
        <TextField source="name" />
        <TextField source="desc" />

        <ReferenceManyField label="字段" reference="field" target="eventId">
          <Datagrid bulkActionButtons={false}>
            <TextField source="name" />
            <TextField source="desc" />
            <SelectField
              source="fieldType"
              choices={[
                { id: "STRING", name: "字符串" },
                { id: "NUMBER", name: "数字" },
                { id: "BOOLEAN", name: "布尔类型" },
                { id: "ARRAY", name: "数组" }
              ]}
            />
            <EditButton />
          </Datagrid>
        </ReferenceManyField>
        <AddFieldButton />

        <ReferenceManyField label="计数器" reference="count" target="eventId">
          <Datagrid bulkActionButtons={false}>
            <TextField source="name" />
            <TextField source="primaryKey" />
            <TextField source="subKey" />
            <TextField source="sumKey" />
            <SelectField
              source="countType"
              choices={[
                { id: "count", name: "计数" },
                { id: "sum", name: "汇总" }
              ]}
            />
            <EditButton />
          </Datagrid>
        </ReferenceManyField>
        <AddCountButton />

        <ReferenceManyField label="变量" reference="variable" target="eventId">
          <Datagrid bulkActionButtons={false}>
            <TextField source="name" />
            <TextField source="desc" />
            <SelectField
              source="fieldType"
              choices={[
                { id: "STRING", name: "字符串" },
                { id: "NUMBER", name: "数字" },
                { id: "BOOLEAN", name: "布尔类型" },
                { id: "ARRAY", name: "数组" }
              ]}
            />
            <SelectField
              source="calcType"
              choices={[
                { id: "const", name: "常量" },
                { id: "formula", name: "公式" }
              ]}
            />
            <TextField source="formula" />
            <TextField source="depth" />
            <EditButton />
          </Datagrid>
        </ReferenceManyField>
        <AddVariableButton />

        <ReferenceManyField label="策略" reference="rule" target="eventId">
          <Datagrid bulkActionButtons={false}>
            <TextField source="name" />
            <TextField source="desc" />
            <TextField source="riskCode" />
            <TextField source="riskDesc" />
            <EditButton />
          </Datagrid>
        </ReferenceManyField>
        <AddRuleButton />
      </Tab>
      <Tab label="日志"></Tab>
    </TabbedShowLayout>
  </Show>
);

export const EventEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <TextInput source="desc" validate={required()} />
    </SimpleForm>
  </Edit>
);
