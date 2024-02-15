설치 과정

https://www.youtube.com/watch?v=g5dRKsBmlpM&list=PLe6NQuuFBu7H3sFnErshsfgNPE9dOZZrx&index=2&t=1s

```bash
npm init -y

npm install webpack webpack-cli --save-dev
npm install typescript ts-loader --save-dev
```

tsconfig.json파일 생성

```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "allowJs": true
  }
}
```

dist 폴더 생성 -> tsconfig.json과 호환되도록
dist/index.html 생성

webpack.config.js

```javascript
const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
```

!누르고 html template 작성
script 구문 추가

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <script src="bundle.js" defer></script>
  </head>
  <body></body>
</html>
```

src/index.ts 파일 생성
console.log("Hello World")

package.json에서
scripts 부분을 아래와 같이 수정

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "bundle": "webpack"
  },
```

터미널에서 npm run bundle을 입력하여 webpack이 동작하는지 확인
dist/bundle.js가 생성되어야 함

Extension에서 Live Server 설치

dist/index.html을 우클릭하여 open with live server 클릭하여 웹브라우저 확인
F12로 콘솔창을 열어 log 찍히는지 확인

index.ts 수정
npm run bundle로 웹페이지 수정 확인
매번 npm run bundle이 복잡함

package.json 수정

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "bundle": "webpack",
    "watch": "webpack --watch",
    "start": "npm run bundle && npm run watch"
  },
```

npm start
index.ts에서 코드 수정
