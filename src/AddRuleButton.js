import React from "react";
import RuleIcon from "@mui/icons-material/Rule";
import { Button, useStore, useRecordContext, useRedirect } from "react-admin";

const AddRuleButton = () => {
  const record = useRecordContext();
  const redirect = useRedirect();
  const [value, setValue] = useStore("eventId", "");
  const handleClick = () => {
    setValue(record.id);
    redirect("create", "rule", {}, {}, { record: { eventId: record.id } });
  };

  return (
    <Button
      sx={{ marginTop: "0em" }}
      variant="raised"
      onClick={handleClick}
      label="新建规则"
      title="新建规则"
    >
      <RuleIcon />
    </Button>
  );
};

export default AddRuleButton;
