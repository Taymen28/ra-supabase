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
  AutocompleteInput
} from "react-admin";

export const RuleCreate = () => {
  const [eventId, setEventId] = useStore("eventId");
  const redirect = useRedirect();
  const onSuccess = () => {
    redirect("show", "event", eventId);
  };
  return (
    <Create mutationOptions={{ onSuccess }}>
      <SimpleForm>
        <TextInput source="name" validate={[required()]} />
        <TextInput source="desc" validate={[required()]} />
        <ArrayInput source="rules" label="规则">
          <SimpleFormIterator inline>
            <ReferenceInput
              source="field"
              reference="field"
              label="字段"
              filter={{ eventId: eventId }}
            >
              <SelectInput optionText="desc" optionValue="id" />
            </ReferenceInput>
            <SelectInput
              source="operator"
              choices={[
                { id: "eq", name: "等于" },
                { id: "gt", name: "大于" },
                { id: "gte", name: "大于等于" },
                { id: "lt", name: "小于" },
                { id: "lte", name: "小于等于" }
              ]}
            />
            <SelectInput
              source="valueType"
              defaultValue="fixed"
              choices={[
                { id: "fixed", name: "固定值" },
                { id: "dic", name: "字典" },
                { id: "variable", name: "变量" }
              ]}
            />
            <TextInput source="value" />
          </SimpleFormIterator>
        </ArrayInput>
        <TextInput source="logicExpress" validate={[required()]} />
        <TextInput source="riskCode" validate={[required()]} />
        <TextInput source="riskDesc" validate={[required()]} />
      </SimpleForm>
    </Create>
  );
};

export const RuleEdit = () => {
  const [eventId, setEventId] = useStore("eventId");
  const redirect = useRedirect();
  const onSuccess = () => {
    redirect("show", "event", eventId);
  };
  return (
    <Edit mutationOptions={{ onSuccess }}>
      <SimpleForm>
        <TextInput source="name" validate={[required()]} />
        <TextInput source="desc" validate={[required()]} />
        <ArrayInput source="rules" label="规则">
          <SimpleFormIterator inline>
            <ReferenceInput
              source="field"
              reference="field"
              label="字段"
              filter={{ eventId: eventId }}
            >
              <SelectInput optionText="desc" optionValue="id" />
            </ReferenceInput>
            <SelectInput
              source="operator"
              choices={[
                { id: "eq", name: "等于" },
                { id: "gt", name: "大于" },
                { id: "gte", name: "大于等于" },
                { id: "lt", name: "小于" },
                { id: "lte", name: "小于等于" }
              ]}
            />
            <SelectInput
              source="valueType"
              defaultValue="fixed"
              choices={[
                { id: "fixed", name: "固定值" },
                { id: "dic", name: "字典" },
                { id: "variable", name: "变量" }
              ]}
            />
            <TextInput source="value" />
          </SimpleFormIterator>
        </ArrayInput>
        <TextInput source="logicExpress" validate={[required()]} />
        <TextInput source="riskCode" validate={[required()]} />
        <TextInput source="riskDesc" validate={[required()]} />
      </SimpleForm>
    </Edit>
  );
};
