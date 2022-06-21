/** Images **/

declare module '*.jpg' {
    const content: string;
    export default content;
}

declare module '*.jpeg' {
    const content: string;
    export default content;
}

declare module '*.png' {
    const content: string;
    export default content;
}

declare module '*.svg' {
    const content: never;
    export default content;
}

declare module '*.gif' {
    const content: never;
    export default content;
}

/** Style **/

declare module '*.scss' {
    const styles: {[className: string]: string};
    export default styles;
}
