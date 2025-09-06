import { useState } from "react";
import "./Collapsible.css";

export default function Collapsible({ title, defaultOpen = false, children }) {

  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (

    <div id="my-flexbox">

      <div className={`collapsible_section ${isOpen ? "open" : ""}`}>

        <button type="button" className="collapse_button" onClick={() => setIsOpen(!isOpen)}>
          <span className="arrow">{isOpen ? "▼" : "▶"}</span>
          {title}
        </button>

        <div className="collapsible_content">{children}</div>

      </div>

    </div>

  );
}
