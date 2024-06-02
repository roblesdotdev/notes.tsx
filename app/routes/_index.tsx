import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Notes.tsx" },
    { name: "description", content: "Notes application created with remix.run" },
  ];
};

export default function Index() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="font-bold text-xl">Notes.tsx</h1>
    </div>
  );
}
