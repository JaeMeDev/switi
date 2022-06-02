import { NextPage } from 'next';
import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import PageLayout from '@components/layout/PageLayout';
import { NoticeItem } from '@models/notice';
import NoticeList from '@components/domain/NoticeList';

interface NoticeProps {
  notices: NoticeItem[];
}

const Notice: NextPage<NoticeProps> = ({ notices }) => (
  <PageLayout title="공지사항" canGoBack>
    <NoticeList notices={notices} />
  </PageLayout>
);

export async function getStaticProps() {
  const noticePost = readdirSync('./notice').map((file) => {
    const content = readFileSync(`./notice/${file}`, 'utf-8');
    const [slug] = file.split('.');
    return { ...matter(content).data, slug };
  });

  return {
    props: { notices: noticePost.reverse() },
  };
}

export default Notice;
