import express from "express";
import payload from "payload";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
import Comments from "./collections/Comments";

require("dotenv").config();
const app = express();

const corsOptions = {
  origin: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

// Custom route to append a comment
app.post("/api/commentsList/append", async (req, res) => {
  console.log("append", req.body);

  const { articleId, content }: { articleId: string; content: string } =
    req.body;
  const newComment = { id: uuidv4(), content };

  try {
    // Fetch the existing document without its comments to minimize data transfer
    const existingData = await payload.find({
      collection: "commentsList",
      where: {
        articleId: {
          equals: articleId,
        },
      },
      depth: 0, // Adjust as necessary
    });

    let currentCommentsList: any = existingData?.docs[0];

    if (typeof currentCommentsList?.id === "undefined") {
      // Create new commentsList
      currentCommentsList = await payload.create({
        collection: "commentsList",
        data: {
          articleId,
          comments: [],
        },
      });
    }

    let id = currentCommentsList?.id;
    let comments = currentCommentsList?.comments || [];

    console.log("existingComments", currentCommentsList, comments);
    console.log("id", currentCommentsList.id, id);

    // Append the new comment
    const updatedCommentsList = await payload.update({
      collection: "commentsList",
      id,
      data: {
        ...currentCommentsList,
        comments: [...comments, newComment],
      },
    });

    console.log("udpated", updatedCommentsList);

    res.status(200).json(updatedCommentsList);
  } catch (error) {
    console.error("Error appending comment:", error);
    res.status(500).send("Error appending comment");
  }
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Add your own express routes here

  app.listen(3000);
};

start();
