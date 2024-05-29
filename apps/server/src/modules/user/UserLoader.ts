import { createLoader } from "@entria/graphql-mongo-helpers";
import { User, UserModel } from "./UserModel";

export const UserLoader = createLoader({
	loaderName: "UserLoader",
	model: UserModel,
});
