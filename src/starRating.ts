export function starRating(rate : number) {
    let starHTML = '';
    let increment = 0;
    let max = 5; 
 
    while(increment < rate) {
      starHTML += '<i class="material-icons filled">star</i>';
      increment++;
    }
 
    while(max > rate) {
      starHTML += '<i class="material-icons">star</i>';
      max--;
    }
    return starHTML;
  };

