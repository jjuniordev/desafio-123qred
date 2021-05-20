module.exports = app => {
    const clientQuestionsDB = app.data.clientQuestions;
    const clientQuestionsID = clientQuestionsDB['clientQuestions']['questions'];
    const clientAnswersDB = app.data.clientAnswers;
    const controller = {};

    const {
        clientAnswers: clientAnswersMock,
      } = clientAnswersDB;
  
    controller.listClientQuestions = (req, res) => res.status(200).json(clientQuestionsDB);
    controller.listClientQuestionsId = (req, res) => res.status(200).json(clientQuestionsID);
    
    controller.saveClientAnswer = (req, res) => {
        clientAnswersMock.push({
            clientID: req.body.clientID,
            data: req.body.data
        });

        res.status(201).json(clientAnswersMock);
    }

    controller.listClientStatus = (req, res) => {
        
        clientAnswersMock.forEach(element => {
            if(element.clientID == req.params.id){
                answers = element.data;
            }
        });

        var points = 0;

        answers.forEach(element => {
            switch (element.answerCod) {
                case 0:
                    points = points + 1
                    break;
                case 1:
                    points = points - 2
                    break;
                case 2:
                    points = points + 1.5
                    break;
                case 3:
                    points = points - 1.5
                    break;
                case 4:
                    points = points + 0.5
                    break;            
                default:
                    break;
            }
        });

        isEligible = points >= 2 ? true : false;
                
        res.status(200).json(
            {
                "points": points,
                "isEligible": isEligible
            }
        );
    }
  
    return controller;
  }