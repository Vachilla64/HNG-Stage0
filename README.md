## HNG Stage 0: Accessible Profile Card

This project is a submission for the **HNG Internship Stage 0 Frontend Task**. It features a fully responsive, accessible, and testable personal profile card built using only **plain HTML, CSS, and vanilla JavaScript**, adhering to modern web standards.


## Stage 1 Acceptance Criteria

The following criteria must be met to ensure the successful completion of the project:

### Contact Us Page

* All required fields must exist and utilize the correct **`data-testid`** attributes for automated testing.
* **Validation** logic must be implemented to prevent invalid submissions (e.g., incorrect email format, missing required fields).
* The submission **success message** must only be shown after a valid form submission is processed.

### About Me Page

* All required content sections (e.g., Biography, Skills, Experience) must exist.
* The required sections must use the correct **`data-testid`** attributes.
* **Semantic HTML** must be used correctly throughout the page (e.g., `<main>`, `<section>`, `<ul>`, `<p>`, `<h2>`).

### General Requirements

* **Semantic HTML:** Use appropriate semantic HTML elements throughout the entire codebase.
* **Accessibility (A11y):** Ensure the application is fully accessible, including proper use of `<label>` elements, `alt` text for images, and ARIA associations where necessary.
* **Responsiveness:** The layout must be **fully responsive** and optimized across all viewports (mobile, tablet, desktop).
* **Keyboard Navigability:** All interactive elements must be accessible and operable using only the keyboard.
* **Code Quality:** The codebase must be modular, readable, and consistent in style and structure.




### Features

-   **Semantic HTML**: The structure utilizes semantic tags (`<article>`, `<nav>`, `<section>`, etc.) for improved **accessibility** and Search Engine Optimization (**SEO**).
-   **Testable Elements**: Every required element includes a **`data-testid`** attribute for automated testing, as specified in the task requirements.
-   **Fully Responsive**: The layout is **mobile-first** and adapts cleanly to tablet and desktop screen sizes using modern CSS techniques (**Flexbox** and **Grid**).
-   **Dynamic Content**: The current **UTC time** in milliseconds is displayed and dynamically updated every second using vanilla JavaScript.
-   **Accessibility Focus**: All interactive elements are **keyboard-focusable** with clear focus indicators, and images include descriptive **`alt`** text.

---

### Tech Stack

-   **HTML5**
-   **CSS3** (Flexbox, Grid)
-   **Vanilla JavaScript**

---

### Task Requirements Met

| Requirement | Implementation Detail | `data-testid` Attribute |
| :--- | :--- | :--- |
| **Slack Name** | Displayed user's Slack name. | `slackUserName` |
| **Slack Display Picture** | Included user's display picture. | `slackDisplayImage` |
| **Current Day of the Week** | Displayed the current day. | `currentDayOfTheWeek` |
| **Current UTC Time** | Dynamically updated time in milliseconds. | `currentUTCTime` |
| **Track** | Displayed the user's HNG track. | `myTrack` |
| **GitHub URL** | Link to the project's GitHub repository. | `githubURL` |

---

### Live Demo

The project is hosted on Vercel and can be viewed live here:
**[https://hng-submissin.vercel.app/](https://hng-submissin.vercel.app/)**

---

### How to Run Locally

No complex setup is required. Simply follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Vachilla64/HNG-Stage0.git](https://github.com/Vachilla64/HNG-Stage0.git)
    ```
2.  **Find the project directory:**
    ```bash
    cd HNG-Stage0
    ```
    or just Navigate there in your file explorer
    
4.  **Open the file:**
    Open the `index.html` file in your web browser.

---
