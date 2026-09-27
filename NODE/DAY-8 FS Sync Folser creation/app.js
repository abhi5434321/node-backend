const fs= require("fs");

/**
 * ! 1 create folder
 * fs.mkdirSync("myFolder")
 */

 //fs.mkdirSync("logo" , { recursive: true });
// fs.mkdirSync("logo/parent/child/subchild", { recursive: true });

/**
 //!delete folder
 * fs.rmdirSync() old method
 * fs.rmSync() new method
 */

//fs.rmSync("logo", { recursive: true});

 //!rename folder
 //! fs.renamesync("older folder", "new folder")

 fs.mkdirSync("logo/parent/child/subchild", { recursive: true });
 fs.renameSync("logo", "dist");


/**
 * ! 4 copy folder
 * fs.cp("older path", new path)
 */
//fs.cpSync("dist/parent/child", "output", {recursive: true});


/**
 * ! read folder
 */
 const data=fs.readdirSync("dist");
 console.log(data);

