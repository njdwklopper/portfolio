import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-view-pdf',
    templateUrl: './view-pdf.page.html',
    styleUrls: ['./view-pdf.page.scss'],
})
export class ViewPdfPage implements OnInit {

    pdfToDisplay: string;

    constructor(private router: ActivatedRoute) {}

    ngOnInit() {
        this.router.params.subscribe(params => {
            this.pdfToDisplay = '../assets/references/' + params['item'];
        });
        console.log('PDF: ' + this.pdfToDisplay);
    }
}
