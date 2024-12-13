import ReactDOM from "react-dom/client";
import HomePage from "./Components/HomePage";
import QuestionList from "./Components/QuestionList";

import { createBrowserRouter, RouterProvider } from "react-router";

const questionList = [
  {
    Qn: 1,
    question:
      "Which attribute must have a unique value each time it is used in an HTML document?",
    options: [
      {
        id: "1-1",
        text: "title",
      },
      {
        id: "1-2",
        text: "class",
      },
      {
        id: "1-3",
        text: "style",
      },
      {
        id: "1-4",
        text: "id",
      },
    ],
    answer: "1-4",
  },
  {
    Qn: 2,
    question:
      "Which choice is not a value of the type attribute of the <input> element?",
    options: [
      {
        id: "2-1",
        text: "range",
      },
      {
        id: "2-2",
        text: "address",
      },
      {
        id: "2-3",
        text: "date",
      },
      {
        id: "2-4",
        text: "password",
      },
    ],
    answer: "2-2",
  },
  {
    Qn: 3,
    question: "Which HTML element is not considered a landmark element?",
    options: [
      {
        id: "3-1",
        text: "<form>",
      },
      {
        id: "3-2",
        text: "<ul>",
      },
      {
        id: "3-3",
        text: "<main>",
      },
      {
        id: "3-4",
        text: "<nav>",
      },
    ],
    answer: "3-2",
  },
  {
    Qn: 4,
    question: "Which of the following colors contain equal amounts of RBG?",
    options: [
      {
        id: "4-1",
        text: "White",
      },
      {
        id: "4-2",
        text: "Gray",
      },
      {
        id: "4-3",
        text: "Black",
      },
      {
        id: "4-4",
        text: "All of these",
      },
    ],
    answer: "4-4",
  },
  {
    Qn: 5,
    question: "What is the correct syntax to write an HTML comment?",
    options: [
      {
        id: "5-1",
        text: "<!--Comment-->",
      },
      {
        id: "5-2",
        text: "//Coment",
      },
      {
        id: "5-3",
        text: "#Comment",
      },
      {
        id: "5-4",
        text: "/* Comment */",
      },
    ],
    answer: "5-1",
  },
  {
    Qn: 6,
    question: "Which of the following tags doesn’t require a closing tag?",
    options: [
      {
        id: "6-1",
        text: "<br>",
      },
      {
        id: "6-2",
        text: "<hr>",
      },
      {
        id: "6-3",
        text: "Both A and B",
      },
      {
        id: "6-4",
        text: "None of the above",
      },
    ],
    answer: "6-1",
  },
  {
    Qn: 7,
    question: "In how many ways can CSS be written in?",
    options: [
      {
        id: "7-1",
        text: "One",
      },
      {
        id: "7-2",
        text: "Two",
      },
      {
        id: "7-3",
        text: "Three",
      },
      {
        id: "7-4",
        text: "Four",
      },
    ],
    answer: "7-3",
  },
  {
    Qn: 8,
    question:
      "Which of the following is an appropriate value for the overflow element?",
    options: [
      {
        id: "8-1",
        text: "scroll",
      },
      {
        id: "8-2",
        text: "hidden",
      },
      {
        id: "8-3",
        text: "auto",
      },
      {
        id: "8-4",
        text: "all of these",
      },
    ],
    answer: "8-4",
  },
  {
    Qn: 9,
    question: "Which of the following is not a type of combinator?",
    options: [
      {
        id: "9-1",
        text: ">",
      },
      {
        id: "9-2",
        text: "~",
      },
      {
        id: "9-3",
        text: "+",
      },
      {
        id: "9-4",
        text: "*",
      },
    ],
    answer: "9-4",
  },
  {
    Qn: 10,
    question:
      "Which of the following is not the property of the CSS box model?",
    options: [
      {
        id: "10-1",
        text: "margin",
      },
      {
        id: "10-2",
        text: "color",
      },
      {
        id: "10-3",
        text: "width",
      },
      {
        id: "10-4",
        text: "height",
      },
    ],
    answer: "10-3",
  },
  {
    Qn: 11,
    question:
      "Which of the following CSS Property controls how an element is positioned?",
    options: [
      {
        id: "10-1",
        text: "static",
      },
      {
        id: "10-2",
        text: "position",
      },
      {
        id: "10-3",
        text: "fix",
      },
      {
        id: "10-4",
        text: "set",
      },
    ],
    answer: "11-2",
  },
  {
    Qn: 12,
    question:
      "What will be the output of the following code snippet? print(typeof(NaN));",
    options: [
      {
        id: "10-1",
        text: "object",
      },
      {
        id: "10-2",
        text: "number",
      },
      {
        id: "10-3",
        text: "string",
      },
      {
        id: "10-4",
        text: "none of these",
      },
    ],
    answer: "12-2",
  },
  {
    Qn: 13,
    question: "Which object in Javascript doesn’t have a prototype?",
    options: [
      {
        id: "10-1",
        text: "Base object",
      },
      {
        id: "10-2",
        text: "All objects have prototype",
      },
      {
        id: "10-3",
        text: "None of the object has a prototype",
      },
      {
        id: "10-4",
        text: "None of the above",
      },
    ],
    answer: "13-1",
  },
  {
    Qn: 14,
    question: "Which of the following are closures in Javascript?",
    options: [
      {
        id: "10-1",
        text: "Variables",
      },
      {
        id: "10-2",
        text: "Functions",
      },
      {
        id: "10-3",
        text: "Objects",
      },
      {
        id: "10-4",
        text: "All of these",
      },
    ],
    answer: "14-4",
  },
  {
    Qn: 15,
    question: "Which of the following are not server-side Javascript objects?",
    options: [
      {
        id: "10-1",
        text: "Date",
      },
      {
        id: "10-2",
        text: "FileUpload",
      },
      {
        id: "10-3",
        text: "Function",
      },
      {
        id: "10-4",
        text: "All of these",
      },
    ],
    answer: "15-4",
  },
  {
    Qn: 16,
    question: "How to stop an interval timer in Javascript?",
    options: [
      {
        id: "16-1",
        text: "clearInterval",
      },
      {
        id: "16-2",
        text: "clearTimer",
      },
      {
        id: "16-3",
        text: "intervalOver",
      },
      {
        id: "16-4",
        text: "All of these",
      },
    ],
    answer: "16-1",
  },
  {
    Qn: 17,
    question: "What is the state of React class component? ",
    options: [
      {
        id: "17-1",
        text: "A JavaScript method for sorting arrays. ",
      },
      {
        id: "17-2",
        text: " A built-in object that stores component data.",
      },
      {
        id: "17-3",
        text: "A CSS class used for component styling. ",
      },
      {
        id: "17-4",
        text: "A React component's initial render method. ",
      },
    ],
    answer: "17-2",
  },
  {
    Qn: 18,
    question: "What is the purpose of the useParams hook in React Router?",
    options: [
      {
        id: "18-1",
        text: "To handle form validation in React.js",
      },
      {
        id: "18-2",
        text: "To retrieve query parameters from the URL",
      },
      {
        id: "18-3",
        text: "o extract URL parameters from a route ",
      },
      {
        id: "18-4",
        text: "To manage the state of route transitions ",
      },
    ],
    answer: "18-3",
  },
  {
    Qn: 19,
    question: "Which of the below expression is required to write the JSX ?",
    options: [
      {
        id: "19-1",
        text: "{}",
      },
      {
        id: "19-2",
        text: "[]",
      },
      {
        id: "19-3",
        text: "''",
      },
      {
        id: "19-4",
        text: "()",
      },
    ],
    answer: "19-1",
  },
  {
    Qn: 20,
    question: "What is the following is the use of ref in React.js ?",
    options: [
      {
        id: "20-1",
        text: "for direct access to the DOM node",
      },
      {
        id: "20-2",
        text: "for reference to another JS file",
      },
      {
        id: "20-3",
        text: "for bind the function",
      },
      {
        id: "20-4",
        text: "for calling a function",
      },
    ],
    answer: "20-1",
  },
];

const parent = document.getElementById("parent");
const root = ReactDOM.createRoot(parent);

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/quiz", element: <QuestionList questions={questionList} /> },
  ]);

  return <RouterProvider router={router} />;
};

root.render(App());
