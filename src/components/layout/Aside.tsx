import { TableOfContents } from '@features'

interface AsideProps {
  toc?: boolean
}

const Aside = ({ toc = true }: AsideProps) => {
  return (
    <aside className='content-aside'>
      <div className='p-0 lg:p-2 lg:bg-slate-50 lg:dark:bg-slate-900 lg:sticky top-24'>
        {toc && <TableOfContents />}
      </div>
    </aside>
  )
}

export default Aside
