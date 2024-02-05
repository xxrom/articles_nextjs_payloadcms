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

You can change `.env` if needed (change `IP` to your `IP` or to `localhost` if you are running it locally)

```
NEXT_PUBLIC_SERVER_URL=http://192.168.77.17:6066
```
