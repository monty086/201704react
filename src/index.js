//tick指的是被导入的模块的默认导出对象
//import {tick} from  './app/3.渲染元素'
import './app/12.controller';
//require('./app/3.渲染元素');
//如果需要在导入模块中拿出模块的导出对象的话，那么被导入的模块就需要导出对象或变量
//如果在导入的模块中不需要获取被导出的模块的变量的话，则不需要导出任何东西
//就像函数，如果需要拿到返回值，那么在函数内部需要return,如果不需要拿到返回值，则在函数内部不需要return