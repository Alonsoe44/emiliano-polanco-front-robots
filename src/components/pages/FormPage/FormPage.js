import { Button, Grid, Input } from "@nextui-org/react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { createRobotThunk } from "../../../redux/thunks/thunkRobots";

const FormPage = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      robotName: "",
      url: "",
      velocity: "",
      endurance: "",
      date: "",
    },
    onSubmit: ({ robotName, url, velocity, endurance, date }) => {
      dispatch(
        createRobotThunk({
          name: robotName,
          image: url,
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
            id="url"
            name="url"
            label="Url"
            type="url"
            onChange={formik.handleChange}
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
