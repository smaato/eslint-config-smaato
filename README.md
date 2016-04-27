# eslint-config-smaato

We use eslint to maintain style consistency within our JavaScript. It's based on
https://www.npmjs.com/package/eslint-config-airbnb and extends it with some
additional rules that we've found useful.

## Usage

1. Add this repo to your project's npm devDependencies. Then open this repo's
package.json and copy devDependencies to your project's package.json.

2. Run `npm i` inside your project to install the dependencies.

3. Add an .eslintrc file to your project root and add an "extends"
section:

   ```json
   {
     "extends": "smaato",
   }
   ```

4. You can run the linter from the console, from within your project's root:

  ```bash
  ./node_modules/eslint/bin/eslint.js ./path/to/js/files/**/*.js
  ```
