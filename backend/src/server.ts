import express from "express";
import payload from "payload";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";

require("dotenv").config();
const app = express();

const corsOptions = {
  origin: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

// Custom route to append a comment
app.post("/api/commentsList/append", async (req, res) => {
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
      depth: 0,
    });

    let currentCommentsList: any = existingData?.docs[0];

    if (typeof currentCommentsList?.id === "undefined") {
      // Create new commentsList if needed
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

    // Append the new comment
    const updatedCommentsList = await payload.update({
      collection: "commentsList",
      id,
      data: {
        ...currentCommentsList,
        comments: [...comments, newComment],
      },
    });

    res.status(200).json(updatedCommentsList);
  } catch (error) {
    console.error("Error appending comment:", error);
    res.status(500).send("Error appending comment");
  }
});

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  app.listen(3000);
};

start();
