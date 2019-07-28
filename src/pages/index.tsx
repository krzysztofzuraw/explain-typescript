import { graphql, Link } from 'gatsby';
import * as React from 'react';

import { IndexPageQuery } from 'typings/graphql';
import { Layout } from '../components';

interface Props {
  data: IndexPageQuery;
}

const IndexPage: React.FunctionComponent<Props> = ({ data }) => {
  const entries = data.allMarkdownRemark ? data.allMarkdownRemark.edges : [];
  return (
    <Layout>
      {entries.map(entry => (
        <div key={entry.node.id} className="mb-5 flex justify-center items-center">
          <Link className="text-xl font-medium text-blue-600 w-1/4" to={entry.node!.fields!.slug!}>
            {entry.node.frontmatter!.title}
          </Link>
          <span className="text-lg font-light text-gray-900 w-4/5">
            {entry.node.frontmatter!.summary}
          </span>
        </div>
      ))}
    </Layout>
  );
};

export default IndexPage;

export const IndexQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        siteName
      }
    }
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___letter] }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            letter
            summary
          }
        }
      }
    }
  }
`;
