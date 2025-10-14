"use client";

import { useTheme } from "@lib/contexts/ThemeContext";
import { Switch } from "@smitch/fluid";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Switch
      switchOffColor="warning"
      switchOffContent="☼"
      switchOnColor="warning"
      switchOnContent="☾"
      shape="circle"
      checked={theme === "dark"}
      defaultChecked={theme === "dark"}
      onChange={toggleTheme}
      className="text-dark dark:text-light"
    />
  );
};

export default ToggleTheme;
