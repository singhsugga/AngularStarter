import {Directive, ElementRef, Input, OnInit} from '@angular/core';


@Directive({
    selector: '[appFlex]',
})
export class FlexBoxModelDirective implements OnInit{
    @Input() padding: string = '0';
    @Input() flexDirection: string = 'row';
    @Input() justify: string = 'flex-start';
    @Input() align: string = 'flex-start';

    constructor(private elRef: ElementRef) {

    }

    ngOnInit(): void {

         this.elRef.nativeElement.style.display = 'flex';

        // Set Properties
        this.elRef.nativeElement.style.padding = this.padding;
        this.elRef.nativeElement.style.flexDirection = this.flexDirection;
        this.elRef.nativeElement.style.justifyContent = this.justify;
        this.elRef.nativeElement.style.alignItems = this.align;
    }


}
