/**
 * 非受控组件
 * 通过ref来引用页面元素 达到接收表单输入值的目的
 * 好处就是：与受控组件相比较，不用写很多函数处理页面元素的
 * 输入事件。
 */

import React from "react";
export default class RefFrom extends React.Component {
  // 对于页面元素 dom 节点的引用
  questionTitle_ = "";
  questionContent_ = "";
  constructor() {
    super();
    this.questionTitle_ = React.createRef();
    this.questionContent_ = React.createRef();
  }

  onButtonClick(e) {
    // current 属性就是dom节点的对象
    console.log(this.questionTitle_.current.value);
    console.log(this.questionContent_.current.value);
  }

  render() {
    return (
      <div>
        <label>
          Question Title:
          <input type="text" ref={this.questionTitle_} />
        </label>
        <label>
          Question Content:
          <input type="text" ref={this.questionContent_} />
        </label>
        <input
          type="button"
          value="Submit"
          onClick={this.onButtonClick.bind(this)}
        />
      </div>
    );
  }
}
