function paramsQuestion(data) {
  `<div class="row">
        <h2>${data.title}</h2>
        <select name="select" id="select">
          <option value="1">${data.answer1}</option>
          <option value="2">${data.answer2}</option>
          <option value="3">${data.answer3}</option>
        </select>        
      </div>
 <button id="button-question" class="waves-effect waves-light btn-large">NEXT</button>`;
}
