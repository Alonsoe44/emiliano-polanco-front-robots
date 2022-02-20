import { Button, Grid, Input } from "@nextui-org/react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { createRobotThunk } from "../../../redux/thunks/thunkRobots";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      robotName: "",
      velocity: "",
      endurance: "",
      date: "",
    },
    onSubmit: ({ robotName, velocity, endurance, date }) => {
      navigate("/toMuseum");
      dispatch(
        createRobotThunk({
          name: robotName,
          image:
            "https://i0.wp.com/hipertextual.com/wp-content/uploads/2020/12/daft-punk.jpg?fit=2500%2C1402&ssl=1",
          statistics: {
            velocity,
            endurance,
            creationDate: date.split("-")[0],
          },
        })
      );
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid.Container
        gap={2}
        justify="center"
        direction="column"
        alignContent="center"
      >
        <Grid>
          <Input
            id="robotName"
            name="robotName"
            onChange={formik.handleChange}
            type="text"
            value={formik.values.email}
            label="Robot Name"
            color="default"
          />
        </Grid>

        <Grid>
          <Input
            id="velocity"
            name="velocity"
            label="Velocity"
            type="number"
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid>
          <Input
            id="endurance"
            name="endurance"
            label="Endurance"
            type="number"
            onChange={formik.handleChange}
          />
        </Grid>

        <Grid>
          <Input
            id="date"
            name="date"
            width="186px"
            label="Date"
            type="date"
            onChange={formik.handleChange}
          />
        </Grid>

        <Grid>
          <Button type="submit" color="success" auto>
            Submit
          </Button>
        </Grid>
      </Grid.Container>
    </form>
  );
};

export default FormPage;
