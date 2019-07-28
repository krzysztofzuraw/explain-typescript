import { graphql } from 'gatsby';
import * as React from 'react';

import { GlossaryEntryBySlugQuery } from 'typings/graphql';
import { Layout } from '../components';
import '../styles/main.css';

interface Props {
  data: GlossaryEntryBySlugQuery;
}

const GlossaryEntryTemplate: React.FunctionComponent<Props> = ({ data }) => (
  <Layout>
    <h1 className="text-3xl font-medium text-blue-600 mb-5">
      {data.markdownRemark!.frontmatter!.title}
    </h1>
    <div
      className="text-lg text-gray-900 font-light mb-8"
      dangerouslySetInnerHTML={{ __html: data.markdownRemark!.html || '' }}
    />
    <div className="text-sm font-thin text-gray-900">
      <div>Authors:</div>
      <ul>
        {data.markdownRemark!.frontmatter!.authors!.map((author, index) => (
          <li key={`${index}-${author}`}>{author}</li>
        ))}
      </ul>
    </div>
  </Layout>
);

export const pageQuery = graphql`
  query GlossaryEntryBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        authors
      }
    }
  }
`;

export default GlossaryEntryTemplate;
