'use client';

import React, { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  title: string;
}

const TableOfContents = () => {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);

  useEffect(() => {
    const sections = document.querySelectorAll(
      'section[id] h2.section-heading'
    );
    const items: TocItem[] = Array.from(sections)
      .map(heading => {
        const section = heading.closest('section');
        const id = section?.id || '';
        const title = heading.textContent || '';
        return { id, title };
      })
      .filter(item => item.id && item.title);

    setTocItems(items);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (tocItems.length === 0) {
    return null;
  }

  return (
    <nav className='toc'>
      <h3 className='hidden lg:block uppercase font-semibold text-sm mb-2'>
        On this page
      </h3>
      <ul className='flex flex-wrap gap-x-2 lg:block lg:text-lg lg:border-l border-neutral-400 lg:pl-2'>
        {tocItems.map(item => (
          <li
            key={item.id}
            className='after:content-["_\2022"] last:after:content-[""] lg:after:content-[""] after:text-xl after:mx-1'
          >
            <a
              href={`#${item.id}`}
              onClick={e => handleClick(e, item.id)}
              className=''
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
