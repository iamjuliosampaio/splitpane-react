import SplitPane, {
  Divider,
  SplitPaneBottom,
  SplitPaneLeft,
  SplitPaneRight,
  SplitPaneTop,
} from "./SplitPane";
import QuoteContext from "./QuoteContext";
import { useState } from "react";

import "./App.css";

const quotes = [
  {
    id: 1,
    author: "Nelson Mandela",
    description:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  },
  {
    id: 2,
    author: "Walt Disney",
    description: "The way to get started is to quit talking and begin doing.",
  },
  {
    id: 3,
    author: "Oprah Winfrey",
    description:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  },
];

function App() {
  const [currQuote, setCurrQuote] = useState(1);

  return (
    <div className="App">
      <QuoteContext.Provider value={{ quotes, currQuote, setCurrQuote }}>
        <SplitPane className="split-pane-row">
          <SplitPaneLeft>
            <SplitPane className="split-pane-col">
              <SplitPaneTop />
              <Divider className="separator-row" />
              <SplitPaneBottom />
            </SplitPane>
          </SplitPaneLeft>
          <Divider className="separator-col" />

          <SplitPaneRight />
        </SplitPane>
      </QuoteContext.Provider>
    </div>
  );
}

export default App;
