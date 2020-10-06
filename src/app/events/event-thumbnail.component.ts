import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event',
    template: `
    <div class='well hoverwell thumbnail'>
    <h2>{{data.name}}</h2>
    <div>Date: {{data.date}}</div>
    <div>Time: {{data.time}}</div>
    <div>Price: \${{data.price}}</div>
    <div>
        <span> Location: {{data.location.address}} </span>
        <span>&nbsp;</span>
        <span>{{data.location.city}}, {{data.location.country}}</span>
    </div>
    <button class='btn btn-primary' (click)='handleClick()'>Click Me !</button>
</div>
    `
})

export class EventThumbnailComponent{
    @Input() data: any
    @Output() eventClick = new EventEmitter()

    handleClick(){
        this.eventClick.emit(this.data.name)
    }
}