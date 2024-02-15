function password(obj) {
  if (typeof obj === 'object' && 'name' in obj && ('birthYear' in obj && obj.birthYear.toString().length === 4) && 'siteName' in obj)  {
    return `${obj.siteName[0].toUpperCase()+obj.siteName.substring(1)}#${obj.name}@${obj.birthYear} `
  } else{
    return "invalid"
  }
 }

console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }));
console.log(password({ name: "rahat" , birthYear: 2002, siteName: "Facebook" }));
console.log(password({ name: "toky" , birthYear: 200, siteName: "Facebook" }));
console.log(password({ name: "maisha" , birthYear: 2002 }));