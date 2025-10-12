import { AppConfig } from "@lib/config";
import { Hero } from "@layout";
const { title, description } = AppConfig;

export default function Home() {
  return (
    <>
      <Hero title={title} description={description} />
    </>
  );
}
