import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";

@Injectable()
export class ServerService {

  constructor(private http: HttpClient) {

  }

  url = "/"

  public async getServerData(): Promise<string> {
    return await lastValueFrom(
      this.http.get<string>(this.url + "api/getTodo")
      )
  }

  public async sendTodoList(jsonStringArray: string) {
    return await lastValueFrom(
      this.http.post<string>(this.url + "api/data", jsonStringArray)
    )
  }
}
