/*
	删除指定文件夹下文件名中的@符号
*/
let fs = require('fs')
let path = require('path')


// 获取命令行参数
let parm = process.argv.splice(2)
// 第一个参数是路径
let rootPath = parm[0]
// 后面的所有参数都是文件后缀
let types = parm.splice(1)

async function line(path) {
    let files = fs.readdirSync(path)
    files.forEach( name => {
			if (!name.startsWith('.')) {
				let oldPath = name;
				let newPath = oldPath.split('@').join('');
				if (oldPath !== newPath) {
					fs.rename(path + '/' + oldPath, path + '/' + newPath, function(err) {
							if (err) {
									throw err;
							}
					});
				}
			}
		})
}


;(async () => {
    await line(rootPath)
})()