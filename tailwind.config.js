module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
}

/**
 * 这是一个Tailwind CSS的配置文件，用于定义自定义样式和扩展主题。具体来说：

content 定义了哪些文件包含用于生成样式的类名称。在这个例子中，包括所有在 pages/ 和 components/ 
目录下的 .js, .ts, .jsx 和 .tsx 文件。
theme 定义了主题的自定义设置。在这个例子中，没有任何自定义设置，只有一个空的 extend 对象，
用于定义一些自定义类名和属性。
plugins 定义了要加载的插件列表。在这个例子中，没有任何插件被加载。
这个配置文件的作用是为Tailwind CSS提供项目的样式定义和主题扩展。它可以让你使用Tailwind的
工具类轻松地生成样式，并允许你定义自己的样式以覆盖或扩展Tailwind提供的默认样式。

 */
