class Application extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "container" }, /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col xs-12" }, /*#__PURE__*/
      React.createElement("h1", { className: "text-center" }, "Markdown Previewer"), /*#__PURE__*/
      React.createElement("hr", null))), /*#__PURE__*/


      React.createElement(UserInput, null)));


  }}


// 7. OPTIONAL BONUS br  
marked.setOptions({
  breaks: true });


class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      md:
      `# Markdown Previewer

[![Markdown Previewer](https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Markdown-mark-solid.svg/208px-Markdown-mark-solid.svg.png "Markdown Previewer")](https://amr-adel.github.io/fcc-markdown-previewer/)

## FreeCodeCamp | Front End Libraries Projects

A *FreeCodeCamp* challenge on using front-end libraries to build a Markdown previewer with the below user stories to be fulfilled:

> **Required**
> 1. I can see a \`textarea\` element with a corresponding \`id="editor"\`.
> 2.  I can see an element with a corresponding \`id="preview"\`.
> 3. When I enter text into the \`#editor\` element, the \`#preview\` element is updated as I type to display the content of the textarea.
> 4. When I enter GitHub flavored markdown into the \`#editor\` element, the text is rendered as HTML in the \`#preview\` element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).
> 5. When my markdown previewer first loads, the default text in the \`#editor\` field should contain valid markdown that represents at least one of each of the following elements: a header (h1 size), a sub header (h2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
> 6. When my markdown previewer first loads, the default markdown in the \`#editor\` field should be rendered as HTML in the \`#preview\` element.

> **Optional Bonus**
> 1. (You do not need to make this test pass): My markdown previewer interprets carriage returns and renders them as <br> (line break) elements (HINT: read the Marked.js docs for this one!).

---

\`\`\`                      
   <p>Hello world! This is an HTML code block.</p>          
\`\`\`

---` };

  }
  updatePreview(event) {
    this.setState({
      md: event.target.value });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-md-6" }, /*#__PURE__*/
      React.createElement("h3", { className: "text-center" }, "Markdown Input"), /*#__PURE__*/
      React.createElement("textarea", { id: "editor", type: "text", className: "md-input", value: this.state.md, onChange: this.updatePreview.bind(this) })), /*#__PURE__*/

      React.createElement("div", { className: "col-md-6" }, /*#__PURE__*/
      React.createElement("h3", { className: "text-center" }, "Preview"), /*#__PURE__*/
      React.createElement(MarkdownPreview, { markdown: this.state.md }))));



  }}


class MarkdownPreview extends React.Component {

  createMarkup() {
    return { __html:
      marked(this.props.markdown, { sanitize: true }) };
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "preview", className: "well", dangerouslySetInnerHTML: this.createMarkup() }));


  }}



React.render( /*#__PURE__*/React.createElement(Application, null), document.getElementById('app'));