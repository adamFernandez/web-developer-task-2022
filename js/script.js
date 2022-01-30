/* For this task you will be provided with both the existing HTML
 * (`former-html.html` - manual pairing version) of the component and the
 * starter HTML for the task, along with the completed CSS. Your task is to
 * write a JS function that generates a footnote reference list from
 * citation/reference pairs in the main content of the starter HTML file,
 * enabling the list to remain accurate if the pairs are reordered.
 *
 * To successfully complete the task, you must:
 *
 * 1. Populate the `js/script.js` file with a function that generates a
 *    footnotes reference list from the citation/reference pairs in the main
 *    content of the `starter-html.html` file
 *
 * 2. Link each citation to its reference so that the `selected` class is
 *    added to the appropriate reference `li` when the citation is clicked
 *
 * 3. Ensure that the function serves as intended if the citation/reference
 *    pairs are reordered within the main content
 */
 
const footnotesBody = document.querySelector('.footnotes-body');
const footnotesFooter = document.querySelector('.footnotes-footer');
const footnoteReferences = document.getElementsByClassName('ref');
const references = Array.from(footnoteReferences);
const citationGroup = document.getElementsByClassName('citation');
const citations = Array.from(citationGroup);

const footnotesArticle = document.querySelector(".footnotes-article");


const generateReferences = () => {
  const list = 
  `<div class="footnotes-footer">
    <ol> ${references.map((n,i) => 
      `<li id="ref${i+1}"><a href="#citation${i+1}"><span class="ref">${n.innerHTML}</span></a></li>`)} 
    </ol>
  </div>`;

  return footnotesArticle.insertAdjacentHTML("beforeend", list);
}

const linkReferences = () => {
  citations
}


generateReferences();




footnotesBody.onclick = (e) => {
  console.log(e.target);
  const targetIndex = Array.from(e.target.parentElement.children).indexOf(e.target);
  console.log(targetIndex);
}

footnotesFooter.onclick = (e) => {
  console.log(e.target);
}