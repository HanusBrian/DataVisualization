import { Injectable } from '@angular/core';

import { QuestionData } from './questionData';
import { QUESTIONDATA } from './mock-questionData';

@Injectable()

export class QuestionService {  
    getQuestionData(): Promise<QuestionData[]> {
        return Promise.resolve(QUESTIONDATA);
    }
}