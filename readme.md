## Features Implemented

-   **SSR for Articles and Each Article:** Enhances performance and SEO by pre-rendering pages on the server.
-   **Optimized Image Loading:** Improves page load times and efficiency in displaying images.
-   **Adding New Comments to Articles:** Allows users to engage with content by adding comments.
-   **PayloadCMS Integration with Frontend:** Leverages PayloadCMS for easy content management and updates.
-   **Responsive Design:** Ensures the website looks great on mobile, tablet, and desktop devices.
-   **SEO Optimization for Images:** Enhances image discoverability through SEO best practices.
-   **Pagination for Articles:** Implements article loading incrementally to improve user experience.
-   **Styling with TailwindCSS and ui.shadcn:** Utilizes TailwindCSS for utility-first CSS and ui.shadcn for additional UI enhancements.

## Online demo

[Next.js frontend](http://178.128.195.181:6060/)
[PayloadCMS backend](http://178.128.195.181:6066/)

## How to Run the Project

### Prerequisites

Ensure you have Docker and Yarn installed on your machine to run the project.

### Backend Setup

1. **Start the Backend Server:**
    - Navigate to the `backend` folder.
    - Run `docker compose up` to start the PayloadCMS backend.
    - Once the server is up, access the PayloadCMS admin interface at `http://localhost:6066`.

### Frontend Setup

1. **Prepare the Frontend Environment:**

    - Open a new terminal and navigate to the `frontend` folder.
    - Run `yarn` to install the dependencies.

2. **Launch the Frontend Development Server:**
    - Run `yarn dev` to start the Next.js development server.
    - Access the frontend application at `http://localhost:6060`.

---

![Image1](https://github.com/xxrom/articles_nextjs_payloadcms/assets/14174697/a126dfdd-b0d5-4537-8a03-727eaa5329d8 "Image1")
![Image2](https://github.com/xxrom/articles_nextjs_payloadcms/assets/14174697/24b5a504-889e-48f0-af13-f6c007b38270 "Image2")
![Image3](https://github.com/xxrom/articles_nextjs_payloadcms/assets/14174697/9e8c42c3-f988-49c6-84d3-a674f996b451 "Image3")

---

You can change `.env` if needed (change `IP` to your `IP` or to `localhost` if you are running it locally)

```
NEXT_PUBLIC_SERVER_URL=http://192.168.77.17:6066
```
