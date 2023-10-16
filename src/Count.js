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

export const CountCreate = () => {
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
        <ArrayInput source="conditionList" label="规则">
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
        <ReferenceInput
          source="primaryKey"
          reference="field"
          label="主key"
          filter={{ eventId: eventId }}
        >
          <SelectInput optionText="desc" optionValue="id" />
        </ReferenceInput>
        <ReferenceInput
          source="subKey"
          reference="field"
          label="从key"
          filter={{ eventId: eventId }}
        >
          <SelectInput optionText="desc" optionValue="id" />
        </ReferenceInput>
        <ReferenceInput
          source="sumKey"
          reference="field"
          label="汇总字段"
          filter={{ eventId: eventId }}
        >
          <SelectInput optionText="desc" optionValue="id" />
        </ReferenceInput>
        <SelectInput
          source="countType"
          choices={[
            { id: "count", name: "计数" },
            { id: "sum", name: "汇总" }
          ]}
        />
      </SimpleForm>
    </Create>
  );
};

export const CountEdit = () => {
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
        <ReferenceInput
          source="primaryField"
          reference="field"
          label="主key"
          filter={{ eventId: eventId }}
        >
          <SelectInput optionText="desc" optionValue="id" />
        </ReferenceInput>
        <ReferenceInput
          source="subKey"
          reference="field"
          label="从key"
          filter={{ eventId: eventId }}
        >
          <SelectInput optionText="desc" optionValue="id" />
        </ReferenceInput>
        <ReferenceInput
          source="sumKey"
          reference="field"
          label="汇总字段"
          filter={{ eventId: eventId }}
        >
          <SelectInput optionText="desc" optionValue="id" />
        </ReferenceInput>
        <SelectInput
          source="countType"
          choices={[
            { id: "count", name: "计数" },
            { id: "sum", name: "汇总" }
          ]}
        />
      </SimpleForm>
    </Edit>
  );
};
