# Fonts

**If you need to connect fonts with the '.ttf' extension:**

1. type 'gulp' into your terminal
2. check the 'src/assets/scss/fonts.scss'
3. enjoy :)

U also will see converted fonts with the '.woff' and '.woff2' extensions in the 'src/assets/fonts'

# Images

Pictures will be automatically converted to the '.webp' extension and you can use it like that:

html:

```html
<picture>
  <source type="image/webp" srcset="./assets/images/YOUR_IMAGE.webp" />
  <img src="./assets/images/YOUR_IMAGE.jpg" alt="img" />
</picture>
```

jsx:

```jsx
<picture>
  <source type="image/webp" srcSet="./assets/images/YOUR_IMAGE.webp" />
  <img src="./assets/images/YOUR_IMAGE.jpg" alt="img" />
</picture>
```

**U will have to replace all paths in the build mode like: 'assets/images/' (without './')**

# If you decided to delete the fonts or images dir then:

1. go to the 'configs/webpack.base.conf.js'
2. scroll down to the 'plugins'
3. look at 'CopyPlugin'
