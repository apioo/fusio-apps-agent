import {Component, inject} from '@angular/core';
import {AgentConsumerConnectionService, Container} from "ngx-fusio-sdk";

@Component({
  selector: 'app-agent-detail',
  imports: [
    Container
  ],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class Detail {

  connection = inject(AgentConsumerConnectionService);

}
