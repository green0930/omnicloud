import express from "express";
import cors from "cors";
import mAdmin from "./magic";
import {
  connectToMongoose,
  createUser,
  createPost,
  getPosts,
  findUsers,
  addCommentToPost,
  deleteCommentFromPost,
  editComment,
  editPost,
  deletePost,
} from "./mongoose";
const profileRoutes = require("./routes/profileRoute");

const app = express();

// eslint-disable-next-line no-undef
const port = process.env.PORT || 9000;

app.use(cors()); // DONT FORGET TO ADD ME!!!
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
  try {
    await connectToMongoose();
    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
});

app.use(`/api`, profileRoutes);

// app.use(async (req, res, next) => {
//   const { authorization } = req.headers;
//   if (!authorization) {
//     next(new Error("Authorization token not found"));
//     return;
//   }
//   try {
//     const DIDToken = authorization.substring(7);
//     mAdmin.token.validate(DIDToken);
//     next();
//   } catch (err) {
//     next(err);
//   }
// });

app.get("/api", (req, res) => {
  res.status(200).json("GET to /api is functional");
});

app.post("/api/users", (req, res) => {
  const userData = req.body;
  try {
    findUsers(req.body).then((result) => {
      const [user] = result;
      if (user === undefined) {
        createUser(userData);
        res.status(200).send("New user saved");
      } else {
        res.status(400).send("User already signed up");
      }
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get("/api/users/:userId", (req, res) => {
  try {
    const userId = req.params.userId;
    findUsers({ userId: userId }).then((foundUser) => res.status(200).send(foundUser));
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/api/auth/", (req, res) => {
  try {
    const userEmail = req.body.email;
    findUsers({ email: userEmail }).then((foundUser) => res.status(200).send(foundUser));
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/api/users", (req, res) => {
  try {
    findUsers({}).then((users) => res.status(200).send(users));
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/api/posts", (req, res) => {
  const postData = req.body;
  try {
    createPost(postData);
    res.status(200).send("post saved");
  } catch (err) {
    console.error(err);
    res.status(400).send("bad request");
  }
});

app.get("/api/posts", (req, res) => {
  try {
    getPosts().then((data) => res.status(200).send(data));
  } catch (err) {
    res.status(500).send("failed GET for /api/posts");
  }
});

app.patch("/api/posts/:id", (req, res) => {
  try {
    const postId = req.params.id;
    const { action, commenterId, text, timestamp, commentId, author } = req.body;

    if (action === "addComment") {
      addCommentToPost(commenterId, text, timestamp, postId).then((data) => res.status(201).send(data));
    } else if (action === "deleteComment") {
      deleteCommentFromPost(commentId, postId).then((data) => res.status(201).send(data));
    } else if (action === "editComment") {
      editComment(commentId, text, postId).then((data) => res.status(201).send(data));
    } else if (action === "editPost") {
      editPost(postId, text, author).then((data) => res.status(201).send(data));
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/api/posts/:id", (req, res) => {
  const postId = req.params.id;
  try {
    deletePost(postId).then(() => res.status(201).send("post deleted"));
  } catch (err) {
    console.error(err);
  }
});

app.listen(port, (req, res, err) => {
  if (err) {
    console.error(err);
  }
  console.log(`Listening on port ${port}`);
});

export default app;
