import React from "react";
import TocIcon from "@mui/icons-material/Toc";
import { Button, useStore, useRecordContext, useRedirect } from "react-admin";

const AddVariableButton = () => {
  const record = useRecordContext();
  const redirect = useRedirect();
  const [value, setValue] = useStore("eventId", "");
  const handleClick = () => {
    setValue(record.id);
    redirect("create", "variable", {}, {}, { record: { eventId: record.id } });
  };

  return (
    <Button
      sx={{ marginTop: "0em" }}
      variant="raised"
      onClick={handleClick}
      label="新建变量"
      title="新建变量"
    >
      <TocIcon />
    </Button>
  );
};

export default AddVariableButton;
