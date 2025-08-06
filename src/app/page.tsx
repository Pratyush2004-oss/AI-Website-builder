"use client";
import { getQueryClient, trpc } from "@/trpc/server";
import {
  dehydrate,
  HydrationBoundary,
  useMutation,
} from "@tanstack/react-query";
import { Suspense } from "react";
import Client from "./client";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";

const App = () => {
  // const queryClient = getQueryClient();
  // void queryClient.prefetchQuery(
  //   trpc.createAI.queryOptions({ text: "Server Prefetch" })
  // );
  const trpc1 = useTRPC();
  const Invoke = useMutation(trpc1.invoke.mutationOptions({}));
  return (
    // <HydrationBoundary state={dehydrate(queryClient)}>
    //   <Suspense fallback={<div>Loading...</div>}>
    //   {/* <Client /> */}
    //   </Suspense>
    // </HydrationBoundary>
    <div>
      <Button onClick={() => Invoke.mutate({ text: "Invoke" })}>
        Invoke background job
      </Button>
    </div>
  );
};

export default App;
