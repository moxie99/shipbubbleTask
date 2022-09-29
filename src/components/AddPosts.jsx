import React from "react";
import { useDispatch } from "react-redux";
import Button from "./Button";
import TextField from "./TextField";
// import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { addPost } from "../redux/Features/postSlice";

const AddPosts = () => {
  const dispatch = useDispatch();
  //   const navigation = useNavigate();
  const [values, setValues] = React.useState({
    userId: "",
    title: "",
    body: "",
  });

  const handleAddUser = (event) => {
    setValues({ title: "", body: "" });
    dispatch(
      addPost({
        userId: values.userId,
        id: uuidv4(),
        title: values.title,
        body: values.body,
      })
    );
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <TextField
        label="Title"
        value={values.title}
        onChange={(e) => setValues({ ...values, title: e.target.value })}
        inputProps={{ type: "text", placeholder: "Brief Intro" }}
      />
      <TextField
        label="Body"
        value={values.body}
        onChange={(e) => setValues({ ...values, body: e.target.value })}
        inputProps={{ type: "text", placeholder: "Content" }}
      />
      <TextField
        label="UserId"
        value={values.userId}
        onChange={(e) => setValues({ ...values, userId: e.target.value })}
        inputProps={{ type: "text", placeholder: "Your Id" }}
      />

      <Button children="Add Post" onClick={handleAddUser} />
    </div>
  );
};

export default AddPosts;
