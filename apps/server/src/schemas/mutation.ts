import { Login } from "@/modules/user/mutations/login";
import { Register } from "@/modules/user/mutations/register";
import { GraphQLObjectType } from "graphql";

export const mutation = new GraphQLObjectType({
  name: "mutation",
  fields: () => ({
    register: Register,
    login: Login,
  }),
});
