
export default class DevService {
    constructor() {
        DevService.log(arguments);
    }

    static log() {    
        const _react_app_stack = (new Error()).stack.toString().split(/\r\n|\n/).splice(2).map(v => v.trim());
        // parse the filepath out of the stack
        let _react_app_source = _react_app_stack[0].trim().split('(').pop();
        _react_app_source = _react_app_source.substr(0, _react_app_source.length-1);
    
        let args = Object.values(arguments);

        return console.log(
          'Dev Log: \n',
          _react_app_source,
          '\n========================================================================\n', 
          ...args,
          '\n========================================================================',
          {'-->':_react_app_stack},
        );
    }
}