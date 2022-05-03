import { FC, useState } from "react";
import { Form } from "./Form.gen";

const App: FC = () => {
  const [items, setItems] = useState<string[]>([]);

  return (
    <>
      <Form
        onSubmit={(text) => {
          setItems([text, ...items]);
        }}
      />
      <div>
        {items.length === 0 ? (
          "No items"
        ) : (
          <ul>
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default App;
