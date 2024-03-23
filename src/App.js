import "./App.css";
import React, { useState } from "react";
import Options from "./components/Options";
import TextEditor from "./components/TextEditor";
import Markdown from "./components/Markdown";
import Navbar from "./components/Navbar";

function App() {
  const [input, setInput] = useState([]);
  const [stringInput, setstringInput] = useState("");
  const [allOptions, setAllOptions] = useState([
    {
      title: "Title and Description",
      markdown: `# Project Title\n\nA brief description of what this project does and who it's for`,
    },
    {
      title: "Acknowledgements",
      markdown: `## Acknowledgements\n- [This is link 1](https:deadlink.com)\n- [This is link 2](https:deadlink.com)\n- [This is link 3](https:deadlink.com)`,
    },
    {
      title: "API Reference",
      markdown: `## API Reference\n\n#### Get all items\n\n\`\`\`\nGET /api/items\n\`\`\`\n| Parameter | Type     | Description                |\n| :-------- | :------- | :------------------------- |\n| \`api_key\` | \`string\` | **Required**. Your API key |\n\n#### Get item\n\`\`\`http\nGET /api/items/id\n\`\`\`\n\n| Parameter | Type     | Description                       |\n| :-------- | :------- | :-------------------------------- |\n| \`id\`      | \`string\` | **Required**. ID of item to fetch |\n#### multiply(num1, num2)\nTakes two numbers and returns the product.`,
    },
    {
      title: "Appendix",
      markdown: `## Appendix\n\nYou can add additional information here.\n\n`,
    },
    {
      title: "Authors",
      markdown: `## Authors\n\n- [@tanzzeyl](https://www.github.com/tanzeyl)`,
    },
    {
      title: "Badges",
      markdown: `## Badges\n\nAdd badges from somewhere like: [shields.io](https://shields.io/)\n\n[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)\n[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)\n[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)`,
    },
    {
      title: "Color Reference",
      markdown: `## Color Reference\n\n| Color             | Hex                                                                |\n| ----------------- | ------------------------------------------------------------------ |\n| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |\n| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |\n| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |\n| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |`,
    },
    {
      title: "Contributors",
      markdown: `## Contributing\n\nContributions are always welcome!\n\nSee \`contributing.md\` for ways to get started.\n\nPlease adhere to this project's \`code of conduct\`.`,
    },
    {
      title: "Environment Variables",
      markdown: `## Environment Variables\n\nTo run this project, you will need to add the following environment variables to your .env file\n\n\`API_KEY\`\n\n\`ANOTHER_API_KEY\``,
    },
    {
      title: "FAQ",
      markdown: `## FAQ\n\n#### Question 1\n\nAnswer 1\n\n#### Question 2\n\nAnswer 2`,
    },
    {
      title: "Features",
      markdown: `## Features\n\n- Light/dark mode toggle\n- Live previews\n- Fullscreen mode\n- Cross platform`,
    },
    {
      title: "Feedback",
      markdown: `## Feedback\n\nIf you have any feedback, please reach out to us at fake@fake.com`,
    },
    {
      title: "Github Profile: About Me",
      markdown: `## 🚀 About Me\nI'm a full stack developer...`,
    },
    {
      title: "Github Profile: Introduction",
      markdown: `# Hi, I'm Tanzeel! 👋`,
    },
    {
      title: "Github Profile: Links",
      markdown: `## 🔗 Links\n[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherineoelsner.com/)\n[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)\n[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)`,
    },
    {
      title: "Github Profile - Other",
      markdown: `## Other Common Github Profile Sections\n👩‍💻 I'm currently working on...\n\n🧠 I'm currently learning...\n\n👯‍♀️ I'm looking to collaborate on...\n\n🤔 I'm looking for help with...\n\n💬 Ask me about...\n\n📫 How to reach me...\n\n😄 Pronouns...\n\n⚡️ Fun fact...`,
    },
    {
      title: "Github Profile - Skills",
      markdown: `## 🛠 Skills\n\nJavascript, HTML, CSS...`,
    },
    {
      title: "Installation",
      markdown: `## Installation\n\nInstall my-project with npm\n\n\`\nnpm install my-project\``,
    },
    {
      title: "Lessons",
      markdown: `## Lessons Learned\n\nWhat did you learn while building this project? What challenges did you face and how did you overcome them?`,
    },
    {
      title: "License",
      markdown: `## License\n\n[MIT](https://choosealicense.com/licenses/mit/)`,
    },
    {
      title: "Logo",
      markdown: `![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)`,
    },
    {
      title: "Optimizations",
      markdown: `## Optimizations\n\nWhat optimizations did you make in your code? E.g. refactors, performance improvements, accessibility`,
    },
    {
      title: "Related",
      markdown: `## Related\n\nHere are some related projects\n\n[Awesome README](https://github.com/tanzeyl/tanzeyl/blob/main/README.md)`,
    },
    {
      title: "Roadmap",
      markdown: `## Roadmap\n\n- Additional browser support\n- Add more integrations`,
    },
    {
      title: "Run Locally",
      markdown: `## Run Locally\n\nClone the project\n\n\`git clone https://link-to-project\`\n\nGo to the project directory\n\n\`cd my-project\`\n\nInstall dependencies\n\n\`npm install\`\n\nStart the server\n\n\`npm run start\``,
    },
    {
      title: "Screenshot",
      markdown: `## Screenshots\n\n![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)`,
    },
    {
      title: "Support",
      markdown: `## Support\n\nFor support, email fake@fake.com or join our Slack channel.`,
    },
    {
      title: "Tech Stack",
      markdown: `## Tech Stack\n\n**Client:** React, Redux, TailwindCSS\n\n**Server:** Node, Express`,
    },
    {
      title: "Run Tests",
      markdown: `## Running Tests\n\nTo run tests, run the following command\n\n\`npm run test\``,
    },
    {
      title: "Usage Examples",
      markdown: `## Usage/Examples\n\n\`\`\`javascript\nimport Component from 'my-project'\n\nfunction App() {\nreturn <Component />\n}\n\`\`\``,
    },
    {
      title: "Used By",
      markdown: `## Used By\n\nThis project is used by the following companies:\n\n- Company 1\n\n- Company 2`,
    },
  ]);

  return (
    <>
      <Navbar title="ReadMe Maker" />
      <div className="row">
        <div className="col-md-3">
          <Options
            options={allOptions}
            setAllOptions={setAllOptions}
            setInput={setInput}
            input={input}
            setstringInput={setstringInput}
            stringInput={stringInput}
          />
        </div>
        <div className="col-md-5">
          <TextEditor
            setstringInput={setstringInput}
            stringInput={stringInput}
          />
        </div>
        <div className="col-md-4">
          <Markdown input={stringInput} />
        </div>
      </div>
    </>
  );
}

export default App;
