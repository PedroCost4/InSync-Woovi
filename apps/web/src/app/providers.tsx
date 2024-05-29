"use client";

import { AuthProvider } from "@/components/auth";
import RelayEnvironment from "@/relay/relay-environment";
import { Spinner } from "@ui/components";
import { Suspense } from "react";
import { HydrationProvider, Client } from "react-hydration-provider";
type ProviderProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProviderProps) {
  return (
    <RelayEnvironment>
      <Suspense fallback={
        <div className="flex w-screen h-screen"> <Spinner className="size-10" /> </div>
      }>
        <HydrationProvider>
          <Client>
            <AuthProvider>{children}</AuthProvider>
          </Client>
        </HydrationProvider>
      </Suspense>
    </RelayEnvironment>
  );
}
