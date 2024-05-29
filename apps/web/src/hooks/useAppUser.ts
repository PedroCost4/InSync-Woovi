"use client";

import { graphql, useLazyLoadQuery } from "react-relay";
import { useAppUserQuery } from "../../__generated__/useAppUserQuery.graphql";

const MeQuery = graphql`
  query useAppUserQuery {
    me {
      id
      username
      avatar
    }
  }
`;

export function useAppUser() {
  const {me} = useLazyLoadQuery<useAppUserQuery>(MeQuery, {});

  console.log(me)

  if (!me) {
    return null;
  }

  return me;
}
