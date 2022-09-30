import { gql } from '@apollo/client';

export const GET_ALL_PROJECTS_SIMPLE_QUERY = gql`
  query AllProjectsShort {
    projects {
      id
      shortname
      shortDescription
      slug
      externalUrl
      projectTypes
      coverPicture {
        url
      }
    }
  }
`;
