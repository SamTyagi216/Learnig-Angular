import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public sidebar_collapse = new BehaviorSubject<boolean>(false)

  miniSidebar = new BehaviorSubject<boolean>(false);
  pageSize: number = 10;
  profileUpdated: any = new BehaviorSubject<boolean>(false);

  constructor() { }

  defaultpayload(sortbycolum: string, keyname?: any, keyvalue?: any, page?: any, size?: any, oprators?: any): any {
    let obj: any = {};
    obj["filterList"] = []
    obj["globalOperator"] = "AND";
    obj["pageRequestDTO"] = {
      "pageNumber": page ? page : 0,
      "pageSize": size ? size : 10,
      "sort": "ASC",
      "sortByColumn": sortbycolum
    }
    if (keyname && keyvalue) {
      obj["filterList"].push({
        "key": keyname,
        "value": keyvalue,
        "operation": oprators ? oprators : "EQUAL"
      })
    }
    return obj;
  }

}
