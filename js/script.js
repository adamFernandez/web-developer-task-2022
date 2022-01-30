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

 // footnotes body and footer selectors
const footnotesBody = document.querySelector('.footnotes-body');
const footnotesFooter = document.querySelector('.footnotes-footer');
// references selector
const footnoteReferences = document.getElementsByClassName('ref');
const references = Array.from(footnoteReferences);
// citations
const citationGroup = document.getElementsByClassName('citation');
const citations = Array.from(citationGroup);
// a elements for each of the citations
const citationLinks = document.getElementsByClassName('citation-link');
const citationLinksArray = Array.from(citationLinks);

const footnotesArticle = document.querySelector(".footnotes-article");


const generateReferences = () => {
  // creating the snippet
  const list = 
  `<div class="footnotes-footer">
    <ol> ${references.map((n,i) => 
      `<li id="listRef${i}" class="listRef"><a href="#citation${i}" id="ref${i}"><span class="ref">${n.innerHTML}</span></a></li>`)} 
    </ol>
  </div>`;

  // adding ordered attributes to citation links
  citationLinksArray.forEach((c,i) => (
    c.setAttribute("id", `citacion${i}`), 
    c.setAttribute("href", `#ref${i}`)
  ))
  
  return footnotesArticle.insertAdjacentHTML("beforeend", list);
}

generateReferences();


// get the index of the clicked element 
// and add the selected class to its footnote 



footnotesBody.onclick = (e) => {
  console.log(e.target.parentNode);
  let targetIndex = 0;
  if(e.target.closest('.citation-link')){

    // get the index of the clicked element
    targetIndex = Array.from(citationGroup).indexOf(e.target);
    // ol list elements selectors
const listReferences = document.getElementsByClassName('listRef');
const lists = Array.from(listReferences);
   
    // add selected class to the footnote of the selected citation
    lists.forEach(l => l.id !== `listRef${targetIndex}` ?  l.classList.remove('selected') : l.classList.add('selected'))

  } else {
    e.preventDefault();
  }  
}