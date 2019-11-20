import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(value: Array<Object>, ...args: any[]): any {
    console.log(args,"arguments")
    let difference  =  args[0]['end'] - args[0]['start']
    if(args[1].activePage==1) {
      console.log("inside if")
     return  value.slice(args[0]['start'], args[0]['end'])
    }
    else if(args[1].activePage > 1){
      console.log("inside else")
      console.log(args[0]['start'] -2,  args[0]['end']* args[1].activePage )
      let end = args[0]['end']* args[1].activePage
      let start = end - difference
     return  value.slice(start, end)
      console.log("else",args[0])
    }
    // return null;
  }

}
