import { Component, OnInit } from '@angular/core';

import { QuestionData } from './questionData';
import { QuestionService } from './question.service';

@Component({
    selector: 'data-table',
    templateUrl: './data-table.component.html',
    styleUrls: [ 'data-table.component.css' ],
    providers: [ QuestionService ]
})



export class DataTableComponent {

    constructor (private dataService: QuestionService) {}

    questionData: QuestionData[];

    getData(): void {
        this.dataService.getQuestionData().then(data => this.questionData = data);
    }

    ngOnInit() {
        this.getData();
    }
}
