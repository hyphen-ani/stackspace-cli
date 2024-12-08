export const showStackSpaceInfo = () =>  {
    const version = "v1.0.0";
    const releaseDate = "December 2024";

    const logo =`
      _             _                             
  ___| |_ __ _  ___| | _____ _ __   __ _  ___ ___ 
 / __| __/ _\` |/ __| |/ / __| '_ \\ / _\` |/ __/ _ \\
 \\__ \\ || (_| | (__|   <\\__ \\ |_) | (_| | (_|  __/
 |___/\\__\\__,_|\\___|_|\\_\\___/ .__/ \\__,_|\\___\\___|
                            |_|                   
`
    ;

    console.log(`StackSpace ${version}`);
    console.log(`Released: ${releaseDate}\n`);

    console.log(logo)

    console.log("Welcome to StackSpace");
    console.log("The Dynamic Database Solution for Modern Applications.\n");
    console.log("StackSpace is a versatile database platform that seamlessly switches between");
    console.log("Relational and Non-Relational database modes, catering to diverse application needs.");
    console.log("With built-in **caching support** and flexible deployment options across top cloud providers,");
    console.log("StackSpace is built to handle the most demanding data requirements.\n");
    console.log("Key Features:");
    console.log("- Effortlessly toggle between Relational (SQL) and Non-Relational (NoSQL) modes.");
    console.log("- Integrated caching for optimized performance.");
    console.log("- Supports deployment on:");
    console.log("  - AWS");
    console.log("  - Google Cloud Platform (GCP)");
    console.log("  - Microsoft Azure\n");
    console.log("For more details, use `stackspace --help`.\n");
}