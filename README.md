# eslint-config-smaato

Featuring versioned linter config for JavaScript.

It is based on https://www.npmjs.com/package/eslint-config-airbnb and provides configuration on top of it.

## Usage

1. Open this repo's package.json and copy modules from "devDependencies" section to the target project's package.json. 
   ```json
   {
     "devDependencies": {
       "babel-eslint": "4.1.7",
       "eslint": "1.10.3",
       "eslint-config-airbnb": "5.0.0",
       "eslint-config-smaato": "git@github.com:SmaatoUI/eslint-config-smaato.git#v0.0.1",
       "eslint-plugin-jasmine": "1.6.0",
       "eslint-plugin-react": "3.16.1",
     }
   }
   ```

2. Run `npm i` inside target project to install the dependencies.

3. Then add .eslintrc to the project root and add "extends" section.
   ```json
   {
     "extends": "smaato",
   }
   ```

4. To test you can run `./node_modules/eslint/bin/eslint.js .`
