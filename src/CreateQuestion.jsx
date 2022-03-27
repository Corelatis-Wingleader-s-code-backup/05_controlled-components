/**
 * 创建一个用于提问的表单
 * 要填写的内容有： 问题的标题，问题的内容，问题分类
 */

import React from "react";
export default class CreateQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionTitle: "",
      questionContent: "",
      questionTag: "",
    };
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(event) {
    /**
     * 虽然所有的页面元素onChange handler都是同一个函数，
     * 但是可以使用 event.target.name的方式来区分 是哪个页面
     * 的输入内容发生了改变
     */
    const name = event.target.name;
    const val = event.target.value;
    // ES6 计算属性：根据表达式运算的结果 得到需要访问的对象的属性名
    this.setState({
      [name]: val,
    });
  }

  onSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <fieldset>
          <h3>Ask a Question</h3>
          <form onSubmit={this.onSubmit}>
            <div>
              <label htmlFor="questionTitle">
                title:
                <input
                  name="questionTitle"
                  type="text"
                  value={this.state.questionTitle}
                  onChange={this.onValueChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="questionTag">
                question tag:
                <select
                  name="questionTag"
                  value={this.state.questionTag}
                  onChange={this.onValueChange}
                >
                  <option value="anime">anime</option>
                  <option value="comic">comic</option>
                  <option value="game">game</option>
                  <option value="life">life</option>
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="questionContent">
                content:
                <textarea
                  name="questionContent"
                  value={this.state.questionContent}
                  onChange={this.onValueChange}
                />
              </label>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </fieldset>
      </div>
    );
  }
}
