import { rest } from "msw";

const apiUrl = process.env.REACT_APP_API_URL;

const handlers = [
  rest.get(apiUrl, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        robots: [
          {
            name: "Robocop",
            image: "iouhdfoiuhdfs",
            statistics: {
              velocity: 8,
              endurance: 3,
              creationDate: 2018,
            },
          },
          {
            name: "Robofe",
            image: "iouhfsefhdfs",
            statistics: {
              velocity: 2,
              endurance: 7,
              creationDate: 2046,
            },
          },
          {
            name: "Robofe",
            image: "iouhfsefhdfs",
            statistics: {
              velocity: 2,
              endurance: 7,
              creationDate: 2046,
            },
          },
        ],
      })
    )
  ),
  rest.post(`${apiUrl}create`, (req, res, ctx) =>
    res(
      ctx.status(201),
      ctx.json({
        name: "Robocop",
        image: "iouhdfoiuhdfs",
        statistics: {
          velocity: 8,
          endurance: 3,
          creationDate: 2018,
        },
      })
    )
  ),
  rest.delete(`${apiUrl}delete/:id`, (req, res, ctx) => res(ctx.status(200))),
];

export default handlers;
