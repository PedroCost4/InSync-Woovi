"use client"

import { useState } from "react";
import { Login } from "./login";
import { useAppUser } from "@/hooks/useAppUser";
import { Button, Tabs, TabsContent } from "@ui/components";
import { ArrowLeft } from "lucide-react";
import { SignUp } from "./sign-up";

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [value, setValue] = useState("sign-in");
  const me = useAppUser()

  if (!me) {
    return (
      <div className="flex flex-col gap-8 h-screen w-screen items-center justify-center">
        <h1 className="font-bold text-3xl text-primary">In Sync</h1>
        <Tabs
          onValueChange={setValue}
          value={value}
          className="flex flex-col w-full gap-12 max-w-[30%]"
        >
          <main className="flex w-full flex-col rounded-lg border border-input p-10">
            <TabsContent
              value="sign-in"
              className="flex flex-col items-center gap-4"
            >
              {value === "sign-in" && <Login />}
              <div className="flex items-center flex-col gap-2">
              <p className="flex gap-2 text-sm">
                Don&apos;t have an account?{" "}
              </p>
                <Button design="link" onClick={() => setValue("sign-up")}>
                  Sign up here.
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="sign-up">
              <Button design="ghost" onClick={() => setValue("sign-in")}>
                <ArrowLeft />
              </Button>
              {value === "sign-up" && <SignUp />}
            </TabsContent>
          </main>
        </Tabs>
      </div>
    );
  }

  return (
    children
  );
}
