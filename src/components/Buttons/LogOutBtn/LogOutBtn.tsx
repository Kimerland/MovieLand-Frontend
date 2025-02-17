import React, { FC } from "react";
import LogOutStyles from "../LogOutBtn/LogOutBtn.module.scss";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface LogOutBtnProps {
  setCurrentUser: (user: null) => void;
}

const LogOutBtn: FC<LogOutBtnProps> = ({ setCurrentUser }) => {
  const [open, setOpen] = React.useState(false);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setCurrentUser(null);
  };

  return (
    <>
      <button className={LogOutStyles.btn_logout} onClick={() => setOpen(true)}>
        Log out
      </button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "#181818",
            color: "#fff",
            borderRadius: "12px",
            padding: "20px",
            width: "800px",
          },
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ fontSize: "20px", fontWeight: "bold" }}
        >
          {"Are you sure you want to log out?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ color: "#ccc" }}
          >
            Your journey in MovieLand is always open! You can log back in
            anytime, but for now, are you ready to say goodbye?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} sx={{ color: "#ff9800" }}>
            Stay logged in
          </Button>
          <Button onClick={handleLogOut} autoFocus sx={{ color: "#f00" }}>
            Log out
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LogOutBtn;
