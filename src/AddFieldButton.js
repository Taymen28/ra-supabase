import React from "react";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import { Button, useStore, useRecordContext, useRedirect } from "react-admin";

const AddFieldButton = () => {
  const record = useRecordContext();
  const redirect = useRedirect();
  const [value, setValue] = useStore("eventId", "");
  const handleClick = () => {
    setValue(record.id);
    redirect("create", "field", {}, {}, { record: { eventId: record.id } });
  };

  return (
    <Button
      sx={{ marginTop: "0em" }}
      variant="raised"
      onClick={handleClick}
      label="新建字段"
      title="新建字段"
    >
      <TextFieldsIcon />
    </Button>
  );
};

export default AddFieldButton;
