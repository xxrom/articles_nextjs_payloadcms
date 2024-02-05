# How to run

Open two terminals and run front and back parts of the project:

BACK:

1. open backend folder
2. run `docker compose up`
3. open payloadcms login page: `localhost:6066`

FRONT:

1. open frontend folder
2. run `yarn`
3. run `yarn dev`
4. open fronend page: `localhost:6060`

---

![Image1](https://github.com/xxrom/articles_nextjs_payloadcms/assets/14174697/a126dfdd-b0d5-4537-8a03-727eaa5329d8 "Image1")
![Image2](https://github.com/xxrom/articles_nextjs_payloadcms/assets/14174697/24b5a504-889e-48f0-af13-f6c007b38270 "Image2")
![Image3](https://github.com/xxrom/articles_nextjs_payloadcms/assets/14174697/9e8c42c3-f988-49c6-84d3-a674f996b451 "Image3")

---

You can change `.env` if needed (change `IP` to your `IP` or to `localhost` if you are running it locally)

```
NEXT_PUBLIC_SERVER_URL=http://192.168.77.17:6066
```
