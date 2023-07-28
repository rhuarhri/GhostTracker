
enum SimpleAnswer {
    EMPTY_ANSWER = "",
    YES_ANSWER = "YES",
    NO_ANSWER = "NO"
}

class IndexViewModel {

    repository = new IndexRepository()

    getDirection(): number {

        return 0
    }

    getLocationAnswer() {

        var answer = new Answer()
        answer.answer = "location"
        answer.direction = 90

        return answer
    }

    getQuestionAnswer() {

    }

    getSimpleAnswer() {
        var random = Math.round(Math.random())
        if (random == 0) {
            return SimpleAnswer.YES_ANSWER
        } else {
            return SimpleAnswer.NO_ANSWER
        }
    }

    helloPress() {

    }

    goodbyePress() {

    }

}

class IndexRepository {

    running = false

    start() {

    }

    stop() {

    }

}

class Answer {
    answer = 'test'
    uiLocation = "left"
    direction = 180
    type = SimpleAnswer.EMPTY_ANSWER
}

export default {
    IndexViewModel,
    Answer,
    SimpleAnswer
}