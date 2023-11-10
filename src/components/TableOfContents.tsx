import React, { useState, useEffect } from 'react';

// Define the type for props
interface TableOfContentsProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ contentRef }) => {
  // Define the state with TypeScript types
  const [headings, setHeadings] = useState<Array<{ id: string, text: string }>>([]);

  useEffect(() => {
    // Function to extract headings
    const extractHeadings = () => {
      if (contentRef.current) {
        const h1s = contentRef.current.querySelectorAll('h1');
        const headingList = Array.from(h1s).map(h1 => ({
          id: h1.id,
          text: h1.textContent || '',
        }));
        setHeadings(headingList);
      }
    };

    extractHeadings();
  }, [contentRef]);

  return (
    <div className="table-of-contents">
      <ul>
        {headings.map(heading => (
          <li key={heading.id}>
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TableOfContents;
