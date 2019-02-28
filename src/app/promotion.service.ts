//To reach out the server this service has been created
//injectable is used to inject services into this service
import { Injectable } from "@angular/core";
import { Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
@Injectable()
export class PromotionService {
    //we need access to http services
    constructor (private http : Http){

    }

    addPromotion(content: string){
        const body = JSON.stringify({content: content});
        const headers = new Headers({'Content-Type':'application/json'});
        return this.http.post('http://Promotions.test/api/promotion', body, {headers: headers})
    }


    //GetPromotions
    getPromotions() : Observable<any>{
        return this.http.get('http://Promotions.test/api/promotions')//URL of laravel backend-domain
        .map(
            (response: Response) => {
                return response.json().promotions;
            }
        );
    }
    //UpdatePromotion
    updatePromotion(id: number, newContent: string){
        const body = JSON.stringify({content: newContent});//body is the data which we need to modify
        const headers = new Headers({'Content-Type':'application/json'});//headers are added to tell backend that there is some json data
        return this.http.put('http://Promotions.test/api/promotion/' + id, body,{headers:headers})
        .map(
            (response: Response) => response.json()
        );       
    }

    //DeletePromotion
    deletePromotion(id: number){
        return this.http.delete('http://Promotions.test/api/promotion/' + id);
    }
}