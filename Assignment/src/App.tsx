import Card from "./StateAss/Cards";
import { useState } from "react";
import { appStyles } from "./styles/appStyles";
import { theme } from "./theme";

function App() {
  const [readingBooks, setReadingBooks] = useState([
    {
      image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
      title: "React Basics",
      author: "Sriram.",
      time: "2h ago",
      views: 120,
    },
    {
      image: "https://images.unsplash.com/photo-1527430253228-e93688616381",
      title: "TypeScript Guide",
      author: "Kumar.",
      time: "5h ago",
      views: 85,
    },
  ]);

  const [finishedBooks, setFinishedBooks] = useState([
    {
      image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34",
      title: "JavaScript Mastery",
      author: "Saran.",
      time: "1d ago",
      views: 200,
    },
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      title: "HTML & CSS",
      author: "Ranagarajan.",
      time: "3d ago",
      views: 150,
    },
  ]);

  // Move from reading → finished
  const moveToFinished = (index: number) => {
    const book = readingBooks[index];
    setFinishedBooks([...finishedBooks, book]);
    setReadingBooks(readingBooks.filter((_, i) => i !== index));
  };

  // Move from finished → reading
  const moveToReading = (index: number) => {
    const book = finishedBooks[index];
    setReadingBooks([...readingBooks, book]);
    setFinishedBooks(finishedBooks.filter((_, i) => i !== index));
  };

  const [section, setSection] = useState<"reading" | "finished">("reading");

  return (
    <div style={appStyles.wrapper}>
      <h1 style={appStyles.heading}>My Library</h1>

      <div style={appStyles.tabs}>
        <span
          style={{
            ...appStyles.tab,
            borderBottom:
              section === "reading"
                ? `3px solid ${theme.colors.primary}`
                : "none",
            color:
              section === "reading"
                ? theme.colors.primary
                : theme.colors.text,
          }}
          onClick={() => setSection("reading")}
        >
          Reading
        </span>

        <span
          style={{
            ...appStyles.tab,
            borderBottom:
              section === "finished"
                ? `3px solid ${theme.colors.primary}`
                : "none",
            color:
              section === "finished"
                ? theme.colors.primary
                : theme.colors.text,
          }}
          onClick={() => setSection("finished")}
        >
          Finished
        </span>
      </div>

      <div style={appStyles.container}>
        {section === "reading"
          ? readingBooks.map((book, i) => (
              <Card
                key={i}
                {...book}
                actionLabel="Finish"
                onAction={() => moveToFinished(i)}
              />
            ))
          : finishedBooks.map((book, i) => (
              <Card
                key={i}
                {...book}
                actionLabel="Read Again"
                onAction={() => moveToReading(i)}
              />
            ))}
      </div>
    </div>
  );
}

export default App;
