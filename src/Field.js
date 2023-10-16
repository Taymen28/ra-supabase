import * as React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  Edit,
  required,
  useStore,
  useRedirect,
  useRemoveFromStore
} from "react-admin";

export const FieldCreate = () => {
  const [eventId, setEventId] = useStore("eventId");

  const redirect = useRedirect();
  const onSuccess = () => {
    redirect("show", "event", eventId);
  };
  return (
    <Create mutationOptions={{ onSuccess }}>
      <SimpleForm>
        {/* <ReferenceInput reference="event" source="eventId" disabled /> */}
        <TextInput source="name" validate={[required()]} />
        <TextInput source="desc" validate={[required()]} />
        <SelectInput
          source="fieldType"
          validate={[required()]}
          choices={[
            { id: "STRING", name: "字符串" },
            { id: "NUMBER", name: "数字" },
            { id: "BOOLEAN", name: "布尔类型" },
            { id: "ARRAY", name: "数组" }
          ]}
        />
      </SimpleForm>
    </Create>
  );
};

export const FieldEdit = () => {
  const [eventId] = useStore("eventId");
  const redirect = useRedirect();
  const onSuccess = () => {
    redirect("show", "event", eventId);
  };
  return (
    <Edit mutationOptions={{ onSuccess }}>
      <SimpleForm>
        {/* <ReferenceInput reference="event" source="eventId" disabled /> */}
        <TextInput source="name" validate={[required()]} />
        <TextInput source="desc" validate={[required()]} />
        <SelectInput
          source="fieldType"
          validate={[required()]}
          choices={[
            { id: "STRING", name: "字符串" },
            { id: "NUMBER", name: "数字" },
            { id: "BOOLEAN", name: "布尔类型" },
            { id: "ARRAY", name: "数组" }
          ]}
        />
      </SimpleForm>
    </Edit>
  );
};
