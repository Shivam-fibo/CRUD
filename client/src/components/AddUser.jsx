import { FormControl, InputLabel, Input, Typography, styled } from "@mui/material";
import { FormGroup, Button } from "@mui/material";
import { useState } from "react";
import { addUser } from "../service/api";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaltValue = {
  name: " ",
  username: " ",
  email: " ",
  password: " ",
};

const AddUser = () => {
  const [user, setUser] = useState(defaltValue);

  const onvalueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetail = async () => {
    try {
      const response = await addUser(user);
      console.log("User added successfully:", response.data);
    } catch (error) {
      console.error("Error while adding user:", error);
    }
  };

  return (
    <Container>
        <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>Name </InputLabel>
        <Input onChange={(e) => onvalueChange(e)} name = "name"/>
      </FormControl>

      <FormControl>
        <InputLabel>UserName </InputLabel>
        <Input onChange={(e) => onvalueChange(e)} name = "username"/>
      </FormControl>

      <FormControl>
        <InputLabel>Email </InputLabel>
        <Input onChange={(e) => onvalueChange(e)} name = "email"/>
      </FormControl>

      <FormControl>
        <InputLabel>Phone </InputLabel>
        <Input onChange={(e) => onvalueChange(e)} name = "phone"/>
      </FormControl>

      <FormControl>
          <Button variant="contained"
        onClick={() => addUserDetail()}
        >

            Add User
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
