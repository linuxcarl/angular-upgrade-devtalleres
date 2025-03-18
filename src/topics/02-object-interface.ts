const skills = ['bash','typescript','javascript','php','python','ruby','c#','java','c++','c','go']

interface Characters {
    name: string;
    age: number;
    skills: string[];
    hometawn?: string;
}
const stider:Characters = {
    name: 'Stider',
    age: 25,
    skills: skills,
    hometawn:'Mexico City'
}
stider.name = 'Carlos'
console.log(stider)
export {};