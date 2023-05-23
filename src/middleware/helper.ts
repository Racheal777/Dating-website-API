


export class ResponseData{
    static  responseJson = (data: any, status:number, message:string) => {
        const res =  ({
            'data': data,
            'status': status,
            'message': message
        })  
        return res
    }
}