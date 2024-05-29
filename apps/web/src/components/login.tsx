import { useZodForm } from "@/hooks/useZodForm";
import { login } from "@/utils/auth";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormInputPlaceholder,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@ui/components";
import { graphql, useMutation } from "react-relay";
import { z } from "zod";
import type { loginMutation } from "../../__generated__/loginMutation.graphql";

const LoginFormSchema = z.object({
  credential: z.string().email("Please enter a valid username or e-mail"),
  password: z.string().min(1, "Please enter a password"),
});

const LoginMutation = graphql`
  mutation loginMutation($input: LoginMutationInput!) {
    login(input: $input) {
      token
    }
  }
`;

export function Login() {
  const [mutate, loading] = useMutation<loginMutation>(LoginMutation);
  const form = useZodForm(LoginFormSchema, {
    defaultValues: {
      credential: "",
      password: "",
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    mutate({
      variables: {
        input: { email: data.credential, password: data.password },
      },
      onCompleted: (data, errors) => {
        if (data.login?.token) {
          login(data.login.token);
          location.reload();
        }
        if (errors) {
          const message = errors[0]?.message;
          form.setError(
            message?.includes("password") ? "password" : "credential",
            { message },
          );
        }
      },
    });
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="flex items-center *:w-full flex-col gap-4">
        <FormField
          name="credential"
          control={form.control}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="email address"
                  />
                </FormControl>
                <FormInputPlaceholder>Email</FormInputPlaceholder>
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="password"
                    {...field}
                  />
                </FormControl>
                <FormInputPlaceholder>Password</FormInputPlaceholder>
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" isLoading={loading} className="w-full">
          Sign in
        </Button>
      </form>
    </Form>
  );
}
