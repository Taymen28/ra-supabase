import * as React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  SelectInput,
  Edit,
  required,
  useStore,
  useRedirect,
  useRemoveFromStore,
  ReferenceInput,
  FormDataConsumer,
  ArrayInput,
  SimpleFormIterator
} from "react-admin";

export const VariableCreate = () => {
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
          source="calcType"
          validate={[required()]}
          choices={[
            { id: "const", name: "常量" },
            { id: "formula", name: "公式" },
            { id: "count", name: "计数" },
            { id: "service", name: "服务补全" }
          ]}
        />
        <FormDataConsumer>
          {({ formData, ...rest }) =>
            formData.calcType === "formula" || formData.calcType === "const"
              ? [
                  <SelectInput
                    source="fieldType"
                    validate={[required()]}
                    choices={[
                      { id: "STRING", name: "字符串" },
                      { id: "NUMBER", name: "数字" },
                      { id: "BOOLEAN", name: "布尔类型" },
                      { id: "ARRAY", name: "数组" }
                    ]}
                    {...rest}
                  />,
                  <TextInput
                    source="formula"
                    fullWidth
                    multiline
                    validate={[required()]}
                    {...rest}
                  />
                ]
              : []
          }
        </FormDataConsumer>
        <FormDataConsumer>
          {({ formData, ...rest }) =>
            formData.calcType === "formula" ? (
              <NumberInput source="depth" {...rest} />
            ) : null
          }
        </FormDataConsumer>

        <FormDataConsumer>
          {({ formData, ...rest }) =>
            formData.calcType === "service" ? (
              <ArrayInput source="fieldMapping" label="字段映射">
                <SimpleFormIterator inline>
                  <ReferenceInput
                    source="from"
                    reference="field"
                    label="字段"
                    filter={{ eventId: eventId }}
                  >
                    <SelectInput optionText="desc" optionValue="id" />
                  </ReferenceInput>
                  <ReferenceInput
                    source="to"
                    reference="field"
                    label="字段"
                    filter={{ eventId: eventId }}
                  >
                    <SelectInput optionText="desc" optionValue="id" />
                  </ReferenceInput>
                </SimpleFormIterator>
              </ArrayInput>
            ) : null
          }
        </FormDataConsumer>

        <FormDataConsumer>
          {({ formData, ...rest }) =>
            formData.calcType === "count"
              ? [
                  <ReferenceInput
                    source="countSchemaId"
                    reference="count"
                    filter={{ eventId: eventId }}
                    {...rest}
                  >
                    <SelectInput optionText="desc" />
                  </ReferenceInput>,
                  <NumberInput
                    source="recent"
                    validate={[required()]}
                    {...rest}
                  />,
                  <SelectInput
                    source="countScopeEnum"
                    validate={[required()]}
                    choices={[
                      { id: "min", name: "分钟" },
                      { id: "hour", name: "小时" },
                      { id: "day", name: "天" },
                      { id: "month", name: "月" }
                    ]}
                    {...rest}
                  />,
                  <SelectInput
                    source="countType"
                    validate={[required()]}
                    choices={[
                      { id: "count", name: "计数" },
                      { id: "sum", name: "汇总" }
                    ]}
                    {...rest}
                  />
                ]
              : null
          }
        </FormDataConsumer>
      </SimpleForm>
    </Create>
  );
};

export const VariableEdit = () => {
  const [eventId, setEventId] = useStore("eventId");
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
          source="calcType"
          validate={[required()]}
          choices={[
            { id: "const", name: "常量" },
            { id: "formula", name: "公式" },
            { id: "count", name: "计数" }
          ]}
        />
        <FormDataConsumer>
          {({ formData, ...rest }) =>
            formData.calcType === "formula" || formData.calcType === "const"
              ? [
                  <SelectInput
                    source="fieldType"
                    validate={[required()]}
                    choices={[
                      { id: "STRING", name: "字符串" },
                      { id: "NUMBER", name: "数字" },
                      { id: "BOOLEAN", name: "布尔类型" },
                      { id: "ARRAY", name: "数组" }
                    ]}
                    {...rest}
                  />,
                  <TextInput
                    source="formula"
                    fullWidth
                    multiline
                    validate={[required()]}
                    {...rest}
                  />
                ]
              : []
          }
        </FormDataConsumer>
        <FormDataConsumer>
          {({ formData, ...rest }) =>
            formData.calcType === "formula" ? (
              <NumberInput source="depth" {...rest} />
            ) : null
          }
        </FormDataConsumer>

        <FormDataConsumer>
          {({ formData, ...rest }) =>
            formData.calcType === "count"
              ? [
                  <ReferenceInput
                    source="countSchemaId"
                    reference="count"
                    filter={{ eventId: eventId }}
                    {...rest}
                  >
                    <SelectInput optionText="desc" />
                  </ReferenceInput>,
                  <NumberInput
                    source="recent"
                    validate={[required()]}
                    {...rest}
                  />,
                  <SelectInput
                    source="countScopeEnum"
                    validate={[required()]}
                    choices={[
                      { id: "min", name: "分钟" },
                      { id: "hour", name: "小时" },
                      { id: "day", name: "天" },
                      { id: "month", name: "月" }
                    ]}
                    {...rest}
                  />,
                  <SelectInput
                    source="countType"
                    validate={[required()]}
                    choices={[
                      { id: "count", name: "计数" },
                      { id: "sum", name: "汇总" }
                    ]}
                    {...rest}
                  />
                ]
              : null
          }
        </FormDataConsumer>
      </SimpleForm>
    </Edit>
  );
};
