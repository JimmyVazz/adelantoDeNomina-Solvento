This project was created with [BuilderX](https://builderx.io/)

## BuilderX uses third party libraries for some of the react-native components such as

```
@builderx/utils@0.1.6
@builderx/tab-view@0.1.5
lodash
react-navigation@1.2.1
```

These packages are included as dependencies in package.json file

As of now,following icon fam
## Steps to run project

In the project directory, you can run:

### `yarn` or `npm install`

This will add the dependencies required to run the project

### `yarn start` or `npm start`

This will start the project

**Note: BuilderX generates Expo project at the moment, if you want to add custom fonts in your create-react-native-app project please refer these steps**

1. Add Fonts to an "assets/fonts" folder in the root of your project
2. Add rnpm to package.json providing the path to the font files:

```
"rnpm": {
  "assets": [
    "./assets/fonts/"
  ]
}
```

3. Run react-native link

##### This should add your custom fonts in the react native project

