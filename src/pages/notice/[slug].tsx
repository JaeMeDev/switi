import { GetStaticProps, NextPage } from 'next';
import matter from 'gray-matter';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse/lib';
import { unified } from 'unified';
import { NoticeItem } from '@models/notice';
import PageLayout from '@components/layout/PageLayout';
import NoticePost from '@components/domain/NoticePost';

interface NoticeDetailProps {
  title: string;
  post: string;
}

const NoticeDetail: NextPage<NoticeDetailProps> = ({ title, post }) => (
  <PageLayout title="공지사항" canGoBack>
    <NoticePost title={title} post={post} />
  </PageLayout>
);

export function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { content, data } = matter.read(`./notice/${ctx.params?.slug}.md`);
  const { value } = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content);
  return {
    props: {
      post: value,
      title: data.title,
    },
  };
};

export default NoticeDetail;
