import * as React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
  SelectInput,
  required,
  ReferenceInput,
  Edit,
  useStore,
  useRedirect,
  AutocompleteInput,
  NumberInput,
  List,
  Datagrid,
  TextField,
  ShowButton,
  EditButton
} from "react-admin";

export const ServiceList = () => (
  <List>
    <Datagrid bulkActionButtons={false}>
      <TextField source="url" />
      <TextField source="method" />
      <TextField source="body" />
      <TextField source="timeout" />
      <TextField source="defaultValue" />
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
);

export const ServiceCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="url" validate={[required()]} />
        <SelectInput
          source="method"
          validate={[required()]}
          choices={[
            { id: "GET", name: "GET" },
            { id: "POST", name: "POST" }
          ]}
        />
        <TextInput source="body" validate={[required()]} />
        <NumberInput source="timeout" validate={[required()]} />
        <TextInput source="defaultValue" validate={[required()]} />
      </SimpleForm>
    </Create>
  );
};

export const ServiceEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="url" validate={[required()]} />
        <SelectInput
          source="method"
          validate={[required()]}
          choices={[
            { id: "GET", name: "GET" },
            { id: "POST", name: "POST" }
          ]}
        />
        <TextInput source="body" validate={[required()]} />
        <NumberInput source="timeout" validate={[required()]} />
        <TextInput source="defaultValue" validate={[required()]} />
      </SimpleForm>
    </Edit>
  );
};
