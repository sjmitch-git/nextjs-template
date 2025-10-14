import { Heading } from '@ui';

type SectionProps = {
  title: string;
  children: React.ReactNode;
  level?: 2 | 3 | 4;
};

const Section = ({ title, level = 2, children }: SectionProps) => {
  const id = title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-');

  return (
    <section
      id={id}
      className='section'
    >
      <Heading
        level={level}
        weight='medium'
        className='section-heading'
      >
        {title}
      </Heading>
      {children}
    </section>
  );
};

export default Section;
