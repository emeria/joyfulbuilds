import React, { useRef } from 'react';
import TableOfContents from './TableOfContents';

const MainContent: React.FC = () => {
  // Using a ref to point to the main content area
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="main-layout">
      <TableOfContents contentRef={contentRef} />
      <div ref={contentRef} className="content">
        <h1 id="section1">Section 1</h1>
        {/* More content */}
        <h1 id="section2">Section 2</h1>
        {/* More content */}
        {/* ... */}
      </div>
    </div>
  );
}

export default MainContent;
