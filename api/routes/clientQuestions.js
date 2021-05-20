module.exports = app => {
    const controller = app.controllers.clientQuestions;
  
    app.route('/api/v1/client-questions')
      .get(controller.listClientQuestions);

    app.route('/api/v1/client-questions/:id')
      .get(controller.listClientQuestionsId);

    app.route('/api/v1/client-answer')
      .post(controller.saveClientAnswer);

    app.route('/api/v1/client-status/:id')
      .get(controller.listClientStatus);
  }