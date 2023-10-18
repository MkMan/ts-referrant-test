import { resolve } from "path";
import { configure } from "ts-referent";

module.exports = configure({
  baseConfig: resolve(__dirname, "tsconfig.json"),
  kinds: {
    source: {
      include: ["**/*"],
      useDependencies: true,
      useDevDependencies: true,
    },
  },
});