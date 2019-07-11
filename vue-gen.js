#!/usr/bin/env node
const path = require('path')
const fs = require('fs-extra')
const ejs = require('ejs')

// 获取参数
const argv = process.argv

// 获取输入文件名
const files = argv.slice(2)

// 获取命令当前执行路径
const getCurrentPath = dir => path.join(process.cwd(), dir)

// 获取项目路径
const getPath = dir => path.join(__dirname, dir)

// 遍历文件
files.forEach(async (file, key) => {
    // 获取文件名和后缀
    const [name, ext = 'vue'] = file.substring(file.lastIndexOf('/') + 1).split('.')

    // 渲染与读取
    const content = await ejs.renderFile(getPath('./template.vue'), { name }, { async: true })

    // 新建文件
    await fs.writeFile(getCurrentPath(`${name}.${ext}`), content)
})