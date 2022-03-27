/**
 * 制作一个表单，用于收集用户的输入
 * （1）对于普通的单纯由html元素构成的表单
 * 单击Submit之后，默认就会提交，刷新页面
 * （2）没有办法直接取到表单中 用户输入的值
 *
 * ======> 行为和数据 都是html元素 自己去管理
 */
export const HtmlForm = () => (
  <form>
    <fieldset>
      <label for="name">
        Your Question:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </fieldset>
  </form>
);
