import { Node, Nodes } from "@/modules/node/register";
import { Users } from "@/modules/user/queries/Users";
import { Me } from "@/modules/user/queries/me";
import { GraphQLObjectType } from "graphql";

export const query = new GraphQLObjectType({
  name: "query",
  description: "Root query",
  fields: () => ({
    node: Node,
    nodes: Nodes,
    users: Users,
    me: Me,
  }),
});
