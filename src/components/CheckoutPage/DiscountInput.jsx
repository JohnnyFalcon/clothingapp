import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Tooltip, ClickAwayListener } from "@mui/material";
const DiscountInput = () => {
  const { setValid } = useContext(CartContext);
  const [value, setValue] = useState("");
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    if (value.toLocaleLowerCase() === "xmas") {
      setValid(true);
      setValue("");
      setTooltipOpen(false);
    } else {
      setTooltipOpen(true);
    }
    e.preventDefault(e);
  };
  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleTooltipClose = () => {
    setTooltipOpen(false);
  };
  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Tooltip
        arrow
        onClose={handleTooltipClose}
        open={tooltipOpen}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title="Wrong discount"
      >
        <form className="form-discount" onSubmit={handleSubmit}>
          {" "}
          <input
            style={{ borderColor: tooltipOpen && "red" }}
            className="input-discount"
            type="text"
            required
            value={value}
            onChange={handleChange}
            spellCheck="false"
            placeholder="Enter discount code"
            onClick={() => setTooltipOpen(false)}
          ></input>
          <button
            className="button-discount"
            type="submit"
            onKeyDown={handleEnterPress}
          >
            APPLY
          </button>
        </form>
      </Tooltip>
    </ClickAwayListener>
  );
};

export default DiscountInput;
