import {Component, inject, OnInit, signal} from '@angular/core';
import {CommonMessage, ConsumerAgent} from "fusio-sdk";
import {MarkdownComponent} from "ngx-markdown";
import {RouterLink} from "@angular/router";
import {ErrorService, FusioService, MessageComponent} from "ngx-fusio-sdk";

@Component({
  selector: 'app-agent-list',
  templateUrl: './list.html',
  imports: [
    MessageComponent,
    MarkdownComponent,
    RouterLink,

  ],
  styleUrls: ['./list.css']
})
export class List implements OnInit {

  agents = signal<Array<ConsumerAgent>>([]);
  response = signal<CommonMessage|undefined>(undefined);
  loading = signal<boolean>(false);

  private fusio = inject(FusioService);
  private error = inject(ErrorService);

  async ngOnInit(): Promise<void> {
    this.loading.set(true);

    try {
      const response = await this.fusio.getClient().consumer().agent().getAll(0, 1024);
      this.agents.set(response.entry || []);
    } catch (error) {
      this.response.set(this.error.convert(error));
    }

    this.loading.set(false);
  }

}
