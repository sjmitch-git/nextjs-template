import { AppConfig } from "@lib/config";
import { Hero } from "@layout";

const title = "About Us";
const description = AppConfig.description;

export const metadata = {
  title: title,
  description: description,
};

export default function About() {
  return (
    <>
      <Hero title={title} description={description} />
      <div className="content-wrap">
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras placerat fringilla
            molestie. Quisque quis feugiat nunc. Fusce suscipit sem non tortor dapibus ultricies.
            Maecenas non consequat ligula, laoreet consequat lorem. Nam posuere dolor eget nunc
            ornare, at aliquam ligula sagittis. Nulla lacinia felis id urna consectetur, non laoreet
            justo eleifend. In hac habitasse platea dictumst. Sed consequat sit amet tortor et
            pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Aliquam ullamcorper turpis et eros consectetur rutrum. Nullam iaculis
            pretium ligula, quis commodo diam pretium blandit. Sed ac cursus tellus.
          </p>
        </div>
        <aside className="content-aside">
          This is an aside section. It can be used to highlight important information or provide
          additional context related to the main content.
        </aside>
      </div>
    </>
  );
}
