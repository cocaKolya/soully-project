function showQuestions(data){
  return `<div class="row-question">
   <form action="/questions" method="POST">
   <h2>${data.title}</h2>
   {{#each answers}}
   <p>
      <label>
        <input name="group1" type="radio" class="inputAnswer"/>
        <span>${data.answers.title}</span>
      </label>
    </p>
  <p><input type="submit" value="Выбрать"></p>
  </form> 
</div>`;
}
