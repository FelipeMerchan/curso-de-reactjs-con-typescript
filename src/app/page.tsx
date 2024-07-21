import { random } from "lodash";

import { ImageList } from "@/components/ImageList";

const randomNumber = () => random(1, 123);

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello, world</h1>
      <ImageList />
    </main>
  );
}
