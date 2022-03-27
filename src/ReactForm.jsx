import React from "react";
/**
 * Controlled Components - 受控组件
 * 一个组件的行为和显示的内容 由react组件通过状态和事件接管
 * 将用户输入的内容 储存在组件的状态中
 */
export default class ReactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.onQuestionChanged = this.onQuestionChanged.bind(this);
  }

  onQuestionChanged(e) {
    const val = e.target.value;
    this.setState({ value: val }); // => 修改状态会触发组件重新渲染
  }

  onSubmit = (e) => {
    // dom方法，阻止表单的默认提交行为
    e.preventDefault();
    //可以使用this.state访问用户输入的内容
    console.log(this.state);
    //  对用户的输入 可以做校验
    //  手动使用ajax的方式将表单数据提交到服务器
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="question">
          Your Question:
          {/**
           * 将input元素的value值设置为 this.state.value
           * 此时，文本框中显示的内容，将完全由react组件来接管（通过组件的状态进行管理）
           */}
          <input
            name="question"
            type="text"
            value={this.state.value}
            onChange={this.onQuestionChanged}
          />
          <input type="submit" value="Submit" />
        </label>
      </form>
    );
  }
}
