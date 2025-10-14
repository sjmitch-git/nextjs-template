import { ToggleTheme } from "@features";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div>#HEADER</div>
        <div>
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
};

export default Header;
