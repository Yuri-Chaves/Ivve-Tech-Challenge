import React from "react";

export default function Paper({children}:React.PropsWithChildren<{}>) {
  return (
    <div className=" h-full
      bg-white rounded-lg shadow-lg p-4 text-zinc-700
      dark:bg-slate-600 dark:text-zinc-100">
      {children}
    </div>
  )
}