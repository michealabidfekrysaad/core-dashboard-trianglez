import React from "react";
import {
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  content: {
    padding: "20px",
    maxWidth: "100%",
    width: "500px",
  },
  deleteButton: {
    backgroundColor: "#AF2F20 !important",
    color: "white !important",
    borderRadius: "10px !important",
    "&:hover": {
      backgroundColor: "darkred !important",
    },
  },
  cancelButton: {
    backgroundColor: "grey !important",
    color: "white  !important",
    borderRadius: "10px !important",
    "&:hover": {
      backgroundColor: "darkgrey !important",
    },
  },
});

export const Modals = ({
  deleteConfirmationOpen,
  setDeleteConfirmationOpen,
  confirmDelete,
  title,
  content,
  btnCancel = "Cancel",
  btnDelete = "Delete",
}) => {
  const classes = useStyles();
  
  return (
    <Dialog
      open={deleteConfirmationOpen}
      onClose={() => setDeleteConfirmationOpen(false)}
    >
      <Paper className={classes.content}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setDeleteConfirmationOpen(false)}
            className={classes.cancelButton}
            variant="contained"
          >
            {btnCancel}
          </Button>
          <Button
            onClick={confirmDelete}
            variant="contained"
            className={classes.deleteButton}
          >
            {btnDelete}
          </Button>
        </DialogActions>
      </Paper>
    </Dialog>
  );
};
