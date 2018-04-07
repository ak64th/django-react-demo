# Development

确保能使用node和npm

- `node -v` > v4.2.2
- `npm -v`  > 2.14.7

安装`yarn`

```language-bash
sudo npm install yarn -g
```

安装webpack和其他依赖

```language-bash
yarn
```

安装python依赖（假设已经在virtualenv环境下）
                               
```language-bash
pip install -r requirements.txt
```

初始化Django数据库

```language-bash
DJANGO_SETTINGS_MODULE=django_react_demo.settings.development ./manage.py migrate
```

用webpack编译

```language-bash
yarn dev:build
```

`ls .tmp/bundles/`可以看见编译后的文件

启动webpack dev server

```language-bash
yarn dev:watch
```

确认生成了webpack-stats.json文件，然后启动Django开发服务器

```language-bash
DJANGO_SETTINGS_MODULE=django_react_demo.settings.development ./manage.py runserver
```

打开`http://127.0.0.1:8000/blog/`查看页面，注意这时候js文件是从`http://127.0.0.1:8080/`加载的。需要为webpack hot server配置CORS，react才能正常工作，但产品环境下js文件和api属于同一域名，并不需要额外配置

开发环境下webpack输出的文件名都包含一个文件hash值，避免缓存问题

# 产品环境

用webpack编译产品环境代码

```language-bash
yarn prod:build
```

确认生成了webpack-stats-prod.json文件，然后使用Django收集静态文件

```language-bash
DJANGO_SETTINGS_MODULE=django_react_demo.settings.production ./manage.py collectstatic --clear --noinput
```

确认`staticfiles`目录下出现了正确的文件

    tree staticfiles/blog/
    staticfiles/blog/
    ├── css
    │   ├── main.9b75f1d5da79.css
    │   └── main.css
    └── js
        ├── main.9cfec5fd49c8.js
        ├── main.9cfec5fd49c8.js.gz
        ├── main.js
        └── main.js.gz

产品环境下使用了[whitenoise](https://whitenoise.evans.io/en/stable/django.html)来收集并压缩静态文件，所以webpack输出的文件名并不需要包含hash

# 工作流

以下这个工作流 *需要* 在产品环境安装webpack等工具

1. 启动开发服务器 
    1. `yarn watch` 
    2. `DJANGO_SETTINGS_MODULE=django_react_demo.settings.development ./manage.py runserver`
2. 修改提交代码后将代码部署到产品环境
3. 在产品环境执行 `yarn prod:build`
4. 在产品环境收集静态文件 `DJANGO_SETTINGS_MODULE=django_react_demo.settings.production ./manage.py collectstatic --clear --noinput`

# 限制

这个工作流下，模板文件用`django-webpack-loader`提供的`render_bundle`来输出静态文件路径，为了能得到正确路径，即使在产品环境下也需要安装node环境

# 参考

[Django与webpack集成](http://owaislone.org/blog/webpack-plus-reactjs-and-django/)
