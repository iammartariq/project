// import { type ClassValue, clsx } from 'clsx';
// import { twMerge } from 'tailwind-merge';

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// export function zoomOutTabletApp() {
//   const viewport = document.querySelector('meta[name="viewport"]') as HTMLMetaElement;

//   if (viewport) {
//     viewport.content = 'initial-scale=0.1';
//     viewport.content = 'width=1400';
//   }
// }


export function capitalize(str: string): string {
  if(!!str){
    return str.charAt(0).toUpperCase() + str.slice(1);    
  }
  return '';
}

export function getDay(str: string): number {
  if(!!str){
    const first = new Date(str).getTime();
    const second = new Date().getTime();
    return Math.round((first - second) / (1000 * 60 * 60 * 24));
  }
  return 0;
}

export function standardDateFormat(str: string): string {
  const date = new Date(str);
  const formattedDate = date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  return formattedDate;
}