import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import {
  trigger,
  style,
  transition,
  animate,
  state,
} from '@angular/animations';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  animations: [
    trigger('accordionAnimation', [
      state('void', style({ height: '0px', opacity: 0 })),
      state('*', style({ height: '*', opacity: 1 })),
      transition('void <=> *', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class SidebarComponent implements OnInit {
  projects = [
    {
      name: 'Project 1',
      isOpen: false,
      links: ['Link A', 'Link B', 'Link C'],
      icon: '/assets/icons/project.svg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  openDropdown(index: number) {
    this.projects[index].isOpen = !this.projects[index].isOpen;
  }
}
